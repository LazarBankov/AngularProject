import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';
import { LoaderComponent } from '../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  
  posts: Post[] = [];
  isLoading = true;
  constructor(private apiService: ApiService, private userService: UserService) {}

  ngOnInit(): void {
    this.apiService.getPosts(2).subscribe((posts) => {
      this.posts = posts
      this.isLoading = false;
    })
  }
}
