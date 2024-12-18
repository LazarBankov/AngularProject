import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { equalPassValidator } from '../../utils/equal-pass.validator';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    passGroup: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        rePassword: new FormControl('', [Validators.required]),
      },
      {
        validators: [equalPassValidator('password', 'rePassword')],
      }
    ),
    placeOfLiving: new FormControl('', [Validators.required]),
    hobbies: new FormControl('', [Validators.required]),
    tools: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService, private router: Router) {}

  get passGroup() {
    return this.form.get('passGroup');
  }

  register() {
    if (this.form.invalid) {
      return;
    }
    const {
      email,
      username,
      passGroup: { password, rePassword } = {},
      placeOfLiving,
      hobbies,
      tools,
    } = this.form.value;

    this.userService
      .register(
        email!,
        username!,
        password!,
        rePassword!,
        placeOfLiving!,
        hobbies!,
        tools!
      )
      .subscribe(() => {
        this.router.navigate(['/home'])
      });
  }
}
