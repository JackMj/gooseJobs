import { Component, OnInit,ViewChild } from '@angular/core';
import {FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent} from 'ngx-facebook';

@Component({
  selector: 'app-fb-posts',
  templateUrl: './fb-posts.component.html',
  styleUrls: ['./fb-posts.component.css']
})
export class FbPostsComponent  {

   @ViewChild(FBVideoComponent) video: FBVideoComponent;

  constructor(
    private fb: FacebookService
  ) {

    console.log('Initializing Facebook');

    fb.init({
      appId: '1927971220769787',
      version: 'v2.8'
    });

  }

    login() {
    this.fb.login({
      scope: 'user_managed_groups,manage_pages,publish_pages'
    }).then((userData: any) => {
        this.fb.api('/100323896721132/groups', 'get', {
          perms: ['CREATE_CONTENT'] // get pages that the user can post to
        }).then(
          (res: any) => {
            let pagesList = res.data; // The pages that the user can post to
            console.log(pagesList);
          },
          (err: any) => console.error(err)
        );
      },
      (err: any) => {
        console.error("Error logging in with Facebook: " + err);
      });

    
  }

  /**
   * Login with additional permissions/options
   */
  loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);

  }

  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }


  /**
   * Get the user's profile
   */
  getProfile() {
    this.fb.api('/me')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);
  }


  /**
   * Get the users friends
   */
  getFriends() {
    this.fb.api('/me/friends')
      .then((res: any) => {
        console.log('Got the users friends', res);
      })
      .catch(this.handleError);
  }


  /**
   * Show the share dialog
   */
  share() {

    const options: UIParams = {
      method: 'share',
      href: 'https://github.com/zyramedia/ng2-facebook-sdk'
    };

    this.fb.ui(options)
      .then((res: UIResponse) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);

  }


  playVideo() {
    this.video.play();
  }

  onVideoEvent(ev) {
    console.log('Video event fired: ' + ev);
  }

  pauseVideo() {
    this.video.pause();
  }



  /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    console.error('Error processing action', error);
  }

}
