import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faHandPeace } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  faHandPeace = faHandPeace;
  faPhone = faPhoneAlt;
  faEmail = faEnvelope;

  title = 'spinalNetwork';

  constructor(private router:Router) {}

  goToURL(url : any)
  {
    this.router.navigateByUrl('/main#'+ url, {skipLocationChange : true})
  }
}
