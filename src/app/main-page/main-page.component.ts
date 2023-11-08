import { Component, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 800,
    margin:40,
    autoplay : false,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      // 400: {
      //   items: 1
      // },
      760: {
        items: 1
      },
      // 1000: {
      //   items: 2
      // }
    },
    nav: true
  }

  testimonials = [ 
    {text : "I had a very weak arm with no appreciate movement at all. With intensive sessions to my arm, within four weeks my arm started to move and my fingers started to grab small objects; my shoulders could move to bigger angles. I could bend my elbow and touch my knees, chest and forehead. Everyday with home exercise provided I regain my confidence, which has been possible by care and dedication I receive from Shiva and the team",
     author : "Client",
     treatment : "Arm Treatment"
    },
    {text : "I came from egypt to the UK for rehabiliation. I have C6/C7 level of spinal cord injury. My OT worked with me and pushed me to my best capacity.At first I did not undertand the importance of the OT interventions, but when I returned home, I realised that I could do things independantly with skills and techniques taught . All credit goes to my OT who pushed me to my limits. I am very independant now and my hands function has also improved so much.",
     author : "Client",
     treatment : "Spinal Injury Treatment"
    }
  ]

  faqoutes = faQuoteLeft;

  ngOnInit(): void {
  }

}
