import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form = this.fb.group({
    email: this.fb.control(''),
    password: this.fb.control('')
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
    this.authService.signIn({body: this.form.value}).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
