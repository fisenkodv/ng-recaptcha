declare const grecaptcha: any;

interface Window {
  grecaptcha: any;
  reCaptchaLoad: () => void
}
