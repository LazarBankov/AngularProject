import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../shared/loader/loader.component';
import { Post } from '../types/post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cleaned-places',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './cleaned-places.component.html',
  styleUrl: './cleaned-places.component.css'
})
export class CleanedPlacesComponent implements OnInit {
  posts: Post[] = [];
  isLoading = true;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCleanedPosts().subscribe((posts) => {
      this.posts = posts
      this.isLoading = false;
    })
  }
}
