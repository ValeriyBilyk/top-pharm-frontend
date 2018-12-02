import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form = this.fb.group({
    email: this.fb.control(''),
    password: this.fb.control(''),
    confirmPassword: this.fb.control('')
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
    this.authService.signUp({body: this.form.value}).subscribe();
  }
}
