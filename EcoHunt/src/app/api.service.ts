import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Post } from './types/post';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }
  getPosts(limit?: number) {
    
    const { apiUrl } = environment;

    let url = `${apiUrl}/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Post[]>(url)
  }
  getSinglePost(id:string) {
    const { apiUrl } = environment;

    return this.http.get<Post>(`${apiUrl}/posts/${id}`)
  }

  createPost(photoUrl: string, address: string, latitude: string, longitude: string, creator: string, size_of_dump: string, people_needed: string, tools_needed: string) {
    const { apiUrl } = environment;
    const payload = { photoUrl, address, latitude, longitude, creator, size_of_dump, people_needed, tools_needed };
    return this.http.post<Post>(`${apiUrl}/posts`, payload)
  }
}
