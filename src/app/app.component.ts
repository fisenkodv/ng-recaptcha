import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RECAPTCHA_URL } from './recaptcha/recaptcha.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: RECAPTCHA_URL,
      useValue: 'http://localhost:3000/validate_captcha'
    }
  ]
})
export class AppComponent implements OnInit {
  public signin: FormGroup;

  ngOnInit(): void {
    this.signin = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      captcha: new FormControl(),
    });
  }
}
