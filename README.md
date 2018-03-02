# Angular reCAPTCHA Directive Example

## How to use


```
<form  [formGroup]="signin">
  <input type="email" placeholder="email" formControlName="email">
  <input type="password" placeholder="password" formControlName="password">
  <div recaptcha key="sitekey" formControlName="captcha"></div>
  <input type="submit" [disabled]="signin.invalid" value="Submit">
</form>
```
for the `signin` form group
```
this.signin = new FormGroup({
  email: new FormControl(null, Validators.required),
  password: new FormControl(null, Validators.required),
  captcha: new FormControl(),
});
```
