import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { ProfileDetails } from '../../types/user';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;
  isOwner: boolean = false;


  profileDetails: ProfileDetails = {
    email: '',
    username: '',
    placeOfLiving: '',
    hobbies: '',
    tools: ''
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    placeOfLiving: new FormControl('', [Validators.required]),
    hobbies: new FormControl(''),
    tools: new FormControl(''),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {



    this.userService.getUser().subscribe(user => {
      if (user) {        
        this.profileDetails = { 
          email: user.email, 
          username: user.username, 
          placeOfLiving: user.placeOfLiving, 
          hobbies: user.hobbies || '', 
          tools: user.tools || ''
        };
        this.form.setValue({
          email: user.email, 
          username: user.username, 
          placeOfLiving: user.placeOfLiving, 
          hobbies: user.hobbies || '', 
          tools: user.tools || ''
        });
      }
    });
  }

  editMode() {
    this.isEditMode = !this.isEditMode;
  }

  editHandler() {
    if (this.form.invalid) {
      return;
    }

    const { email, username, placeOfLiving, hobbies, tools } = this.form.value as ProfileDetails;
    this.userService.updateProfile(email, username, placeOfLiving, hobbies, tools).subscribe(() => {
      this.profileDetails = this.form.value as ProfileDetails;
      this.editMode();
    });
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.form.setValue({
      email: this.profileDetails.email, 
      username: this.profileDetails.username, 
      placeOfLiving: this.profileDetails.placeOfLiving, 
      hobbies: this.profileDetails.hobbies || '', 
      tools: this.profileDetails.tools || ''
    });
    this.editMode();
  }
}
