import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';

import { RECAPTCHA_URL } from './recaptcha.config';

@Injectable()
export class ReCaptchaAsyncValidator {
  constructor(private http: HttpClient, @Inject(RECAPTCHA_URL) private url: string) {}

  validateToken(token: string) {
    return (_: AbstractControl) => {
      return this.http.get(this.url, { params: { token } }).pipe(
        map((res: { success: boolean }) => {
          if (!res.success) {
            return { tokenInvalid: true };
          }
          return null;
        })
      );
    };
  }
}
