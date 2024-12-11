import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { ProfileDetails } from '../../types/user';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    email: 'vrbuff1@gmail.com',
    username: 'John',
    placeOfLiving: 'Pleven',
    hobbies: 'sasdasd, sdawdasd, asdawdasd, asdawwwqq',
    tools: 'dsdawdawd, da wdwad, awdawda wd, dwadw'
  }

  form = new FormGroup ({
    email: new FormControl(this.profileDetails.email, [Validators.required, emailValidator(DOMAINS)]),
    username: new FormControl(this.profileDetails.username, [Validators.required, Validators.minLength(4)]),
    placeOfLiving: new FormControl(this.profileDetails.placeOfLiving, [Validators.required]),
    hobbies: new FormControl(this.profileDetails.hobbies),
    tools: new FormControl(this.profileDetails.tools),
  })

  editMode () {
    this.isEditMode = !this.isEditMode
  }

  editHandler() {
    
    if (this.form.invalid) {
      return;
    }
    
    this.profileDetails = this.form.value as ProfileDetails;
    this.editMode();
  }

  onCancel(event: Event) {
    event.preventDefault()
    this.editMode()
  }
}
