import { Component } from '@angular/core';
import { Post } from '../../../models/post.model';
import { ContactApiDemoService } from '../../../tools/services/Api/contact-api-demo.service';

@Component({
    selector: 'app-contact-api',
    standalone: false,

    templateUrl: './contact-api.component.html',
    styleUrl: './contact-api.component.scss',
})
export class ContactApiComponent {
    posts: Post[] = [];
    postModifie: Post = {
        id: 1,
        title: '',
        body: '',
        userId: 1,
    };
    messageErreur: string = '';
    etaModif: boolean = false;

    nouveauPost: Post = {
        title: 'test',
        body: 'Toto tata titi',
        userId: 1,
    };
    selectedPost: any;

    constructor(private _contactApi: ContactApiDemoService) {}

    ngOnInit(): void {
        this._contactApi.RecupererPosts().subscribe({
            next: (data) => {
                this.posts = data.slice(0, 10);
            },
            error: (error) => {
                this.messageErreur = error.message;
            },
            complete: () => {
                console.log('Récupération terminée....');
            },
        });
    }

    etatModif(): void {
        this.etaModif = true;
    }

    modifPost(): void {
        this._contactApi.ModifPost(this.postModifie).subscribe({
            next: (data) => {
                const index = this.posts.findIndex(
                    (post) => post.id === data.id
                );
                if (index !== -1) {
                    this.posts[index] = data;
                    this.postModifie.title = '';
                    this.postModifie.body = '';
                    this.etaModif = false;
                }
            },
            error: (error) => {
                console.log(error.message);
            },
        });
    }
    AjouterPost(): void {
        this._contactApi.AjouterPost(this.nouveauPost).subscribe({
            next: (data) => {
                this.posts.unshift(data);
            },
            error: (error) => {
                console.log(error.message);
            },
        });
    }

    SupprimerPost(id: number | undefined): void {
        if (id) {
            this._contactApi.SupprimerPost(id).subscribe({
                next: () => {
                    this.posts = this.posts.filter((post) => post.id !== id);
                },
                error: (error) => {
                    console.log(error.message);
                },
            });
        }
    }
}
