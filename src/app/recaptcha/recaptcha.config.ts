import { InjectionToken } from '@angular/core';

export const RECAPTCHA_URL = new InjectionToken('RECAPTCHA_URL');

export interface ReCaptchaConfig {
  theme?: 'dark' | 'light';
  type?: 'audio' | 'image';
  size?: 'compact' | 'normal';
  tabindex?: number;
}
