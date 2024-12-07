import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-current-post',
  standalone: true,
  imports: [],
  templateUrl: './current-post.component.html',
  styleUrl: './current-post.component.css'
})
export class CurrentPostComponent implements OnInit {
  post = {} as Post;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}


  ngOnInit(): void {
    const id = this.route.snapshot.params['postId']
    this.apiService.getSinglePost(id).subscribe(post => {
      this.post = post;
    });
  }
}
