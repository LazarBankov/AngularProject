import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types/post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }
  getPosts(limit?: number) {
    

    let url = `/ecohunt/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Post[]>(url)
  }
  getSinglePost(id:string) {

    return this.http.get<Post>(`/ecohunt/posts/${id}`)
  }

  attendCleaningEvent(post: Post) {
    return this.http.put(`/ecohunt/posts/${post._id}/attend`, post)
  }
  markAsCleaned(post: Post) {
    post.isCleaned = true;
    return this.http.post<Post>(`/ecohunt/posts/cleaned`, post);
  }
  getCleanedPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/ecohunt/posts/cleaned');
  }
  createPost(photo: string, address: string, latitude: string, longitude: string, creator: string, size: string, people: string, tools: string) {
    const payload = { photo, address, latitude, longitude, creator, size, people, tools };
    return this.http.post<Post>(`/ecohunt/posts`, payload)
  }
  editPost(postId: string, photo: string, address: string, latitude: string, longitude: string, creator: string, size: string, people: string, tools: string) {
    const payload = { photo, address, latitude, longitude, creator, size, people, tools };
    return this.http.put<Post>(`/ecohunt/posts/${postId}`, payload)
  }
  deletePost(postId: string) {
    return this.http.delete(`/ecohunt/posts/${postId}`)
  }
}
