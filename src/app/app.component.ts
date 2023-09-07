import { Component } from '@angular/core';
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
}
