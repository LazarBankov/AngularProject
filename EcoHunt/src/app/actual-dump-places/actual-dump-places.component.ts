import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { Post } from '../types/post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-actual-dump-places',
  standalone: true,
  imports: [LoaderComponent, RouterLink],
  templateUrl: './actual-dump-places.component.html',
  styleUrl: './actual-dump-places.component.css'
})
export class ActualDumpPlacesComponent implements OnInit {
  posts: Post[] = [];
  isLoading = true;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) => {
      this.posts = posts
      this.isLoading = false;
    })
  }
}
