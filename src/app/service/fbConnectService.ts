import { FacebookService, InitParams } from 'ngx-facebook';
 
export class facebookConnect {
 
  constructor(private fb: FacebookService) {
 
    let initParams: InitParams = {
      appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);
 
  }
 
}