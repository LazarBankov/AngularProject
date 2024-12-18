import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Post } from '../types/post';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-current-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css'],
})
export class CurrentPostComponent implements OnInit {
  post = {} as Post;
  isEditMode: boolean = false;
  isOwner: boolean = false;
  isAttended: boolean = false;
  isAuth: boolean = false;
  attendedLength: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['postId'];
    this.apiService.getSinglePost(id).subscribe((post) => {
      this.post = post;

      const userId = this.userService.user?._id;

      const userIncluded = this.post.attends.find((user) => user == userId);

      this.attendedLength = post.attends.length;

      if (userIncluded) {
        this.isAttended = true;
      } else {
        this.isAttended = false;
      }

      if (userId) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }

      if (userId === this.post.userId._id) {
        this.isOwner = true;
      } else {
        this.isOwner = false;
      }
    });
  }
  editMode() {
    this.isEditMode = !this.isEditMode;
  }

  attend() {
    this.apiService.attendCleaningEvent(this.post).subscribe({
      next: () => {
        this.ngOnInit();

        this.router.navigate([`/actual-dump-places/${this.post._id}`]);
      },
      error: (err) => {
        console.error('Failed to attend post', err);
      },
    });
  }

  markAsCleaned() {
    this.apiService.markAsCleaned(this.post).subscribe({
      next: () => {
        this.deletePost();
        this.ngOnInit();
        this.router.navigate([`/cleaned`]);
      },
      error: (err) => {
        console.error('Failed to mark as cleaned post', err);
      },
    });
  }

  editPost(form: NgForm) {
    const postId = this.post._id;

    const {
      photo,
      address,
      latitude,
      longitude,
      creator,
      size,
      people,
      tools,
    } = form.value;
    this.apiService
      .editPost(
        postId,
        photo,
        address,
        latitude,
        longitude,
        creator,
        size,
        people,
        tools
      )
      .subscribe(() => {
        this.ngOnInit();
        this.editMode();
      });
  }

  deletePost() {
    if (this.post._id) {
      this.apiService.deletePost(this.post._id).subscribe({
        next: () => {
          this.router.navigate(['/actual-dump-places']);
        },
        error: (err) => {
          console.error('Failed to delete post', err);
        },
      });
    }
  }
}
