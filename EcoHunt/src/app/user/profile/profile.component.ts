import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { ProfileDetails } from '../../types/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    email: '',
    username: '',
    placeOfLiving: '',
    hobbies: '',
    tools: ''
  }

  form = new FormGroup ({
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    placeOfLiving: new FormControl('', [Validators.required]),
    hobbies: new FormControl(''),
    tools: new FormControl(''),
  });

  constructor (private userService: UserService) {}

  ngOnInit(): void {
    const { email, username, placeOfLiving, hobbies, tools } = this.userService.user!;
    this.profileDetails = { email, username, placeOfLiving, hobbies: hobbies!, tools: tools! };
    this.form.setValue({
      email, username, placeOfLiving, hobbies: hobbies!, tools: tools!
    })
  }

  editMode () {
    this.isEditMode = !this.isEditMode
  }

  editHandler() {
    
    if (this.form.invalid) {
      return;
    }
    
    this.profileDetails = this.form.value as ProfileDetails;

    const { email, username, placeOfLiving, hobbies, tools } = this.profileDetails;
    this.userService.updateProfile(email, username, placeOfLiving, hobbies, tools).subscribe(() => {
      this.editMode();
    })
  }

  onCancel(event: Event) {
    event.preventDefault()
    this.editMode()
  }
}
