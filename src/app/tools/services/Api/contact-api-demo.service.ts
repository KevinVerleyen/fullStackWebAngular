import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../models/post.model';

@Injectable({
    providedIn: 'root',
})
export class ContactApiDemoService {
    private _apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private _httpClient: HttpClient) {}

    // CRUD

    // récupérer tout les posts
    RecupererPosts(): Observable<Post[]> {
        return this._httpClient.get<Post[]>(this._apiUrl);
    }

    // ajouter un post
    AjouterPost(post: Post): Observable<Post> {
        return this._httpClient.post<Post>(this._apiUrl, post);
    }

    // Modiffier un post
    ModifPost(post: Post): Observable<Post> {
        console.log(post);

        return this._httpClient.put<Post>(`${this._apiUrl}/${post.id}`, post);
    }

    // Supprimer un post
    SupprimerPost(id: number): Observable<void> {
        return this._httpClient.delete<void>(`${this._apiUrl}/${id}`);
    }
}
