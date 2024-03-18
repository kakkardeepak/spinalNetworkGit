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
    {text : "I had a very weak arm with no appreciable movement at all. With intensive therapy, within four weeks my arm started to move and my fingers were able to grab small objects and there was significantly increased movement in  my shoulders. I could bend my elbow and touch my knees, chest and forehead. The home exercise regime I was provided with helped me to regain my confidence, which has been made possible by the care and dedication i have received from Shiva and the team",
     author : "Client",
     treatment : "Arm Treatment"
    },
    {text : "I came from Egypt to the UK for rehabiliation having sustained a C6/C7 level of spinal cord injury. My OT worked with me and helped me to function to my maximum capacity. At first I did not undertand the importance of the OT interventions, but when I returned home, I realised that I was able to  do things independantly with the skills and techniques I had been taught . All credit goes to my OT who pushed me to my limits. I am very independant now and my hands function has also improved so much.",
     author : "Client",
     treatment : "Spinal Injury Treatment"
    }
  ]

  faqoutes = faQuoteLeft;

  ngOnInit(): void {
  }

}
