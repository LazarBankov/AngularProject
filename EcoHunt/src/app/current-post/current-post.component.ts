import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Post } from '../types/post';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-current-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent implements OnInit {
  post = {} as Post;
  isEditMode: boolean = false;

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
  editMode() {
    this.isEditMode = !this.isEditMode;
  }

  editPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { photo, address, latitude, longitude, creator, size, people, tools } = form.value
  }

  deletePost() {
    if (this.post._id) {
      this.apiService.deletePost(this.post._id).subscribe({
        next: () => {
          this.router.navigate(['/actual-dump-places']);
        },
        error: (err) => {
          console.error('Failed to delete post', err);
        }
      });
    }
  }
}
