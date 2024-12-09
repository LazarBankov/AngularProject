import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { equalPassValidator } from '../../utils/equal-pass.validator';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    passGroup: new FormGroup(
      {
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        rePassword: new FormControl('', [Validators.required]),
      },
      {
        validators: [equalPassValidator('password', 'rePassword')],
      }
    ),
    placeOfLiving: new FormControl('', [Validators.required]),
    hobbies: new FormControl(''),
    tools: new FormControl('')
  });

  get passGroup() {
    return this.form.get('passGroup')
  }

  register(){
    
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    
  }
}
