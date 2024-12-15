import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-current-post',
  standalone: true,
  imports: [],
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent implements OnInit {
  post = {} as Post;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['postId'];
    this.apiService.getSinglePost(id).subscribe(post => {
      this.post = post;
    });
  }

  deletePost() {
    if (this.post._id) {
      this.apiService.deletePost(this.post._id).subscribe({
        next: () => {
          console.log('Post deleted successfully');
          this.router.navigate(['/actual-dump-places']); // Navigate to another route after deletion
        },
        error: (err) => {
          console.error('Failed to delete post', err);
        }
      });
    }
  }
}
