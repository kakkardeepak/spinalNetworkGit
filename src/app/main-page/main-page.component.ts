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
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    margin:40,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      // 400: {
      //   items: 1
      // },
      760: {
        items: 2
      },
      // 1000: {
      //   items: 2
      // }
    },
    nav: true
  }

  testimonials = [ 
    "My physical therapist is excellent! The whole office is very friendly and helpful. Physio is absolutely outstanding. \
     Thank you very much for your great, attentive service",
     "Everyone I worked with was wonderful, very professional, caring and prompt. My therapist was great, as were all of the aids!",
     "All of the staff was fantastic! The care I received was impeccable. Great place! I also love the availability of the Fit Plan for\
      continued support after my discharge Christopher Strock Back Pain Treatment",
     "I had a really positive experience and my shoulder is totally functional again, without pain! I really enjoyed my therapist and all of the rest of the staff"
  
  ]

  faqoutes = faQuoteLeft;

  ngOnInit(): void {
  }

}
