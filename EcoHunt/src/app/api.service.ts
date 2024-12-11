import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './types/post';


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

  createPost(photo: string, address: string, latitude: string, longitude: string, creator: string, size: string, people: string, tools: string) {
    const payload = { photo, address, latitude, longitude, creator, size, people, tools };
    return this.http.post<Post>(`/ecohunt/posts`, payload)
  }
}
