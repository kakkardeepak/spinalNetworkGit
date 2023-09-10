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
    autoplay : true,
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
    {text : "My physical therapist is excellent! The whole office is very friendly and helpful. Physio is absolutely outstanding. \
     Thank you very much for your great, attentive service",
     author : "John White",
     treatment : "Back Pain Treatment"
    },
    {text : "Everyone I worked with was wonderful, very professional, caring and prompt. My therapist was great, as were all of the aids!",
     author : "Christopher  Stroke",
     treatment : "Shoulder Pain Treatment"
    },
    {text : "All of the staff was fantastic! The care I received was impeccable. Great place! I also love the availability of the Fit Plan for\
    continued support after my discharge Christopher Strock Back Pain Treatment",
     author : "Dave",
     treatment : "Sports Injury Treatment"
    },
    {text : "I had a really positive experience and my shoulder is totally functional again, without pain! I really enjoyed my therapist and all of the rest of the staff",
     author : "Tom",
     treatment : "Back Pain Treatment"
    }
     
     
     
  
  ]

  faqoutes = faQuoteLeft;

  ngOnInit(): void {
  }

}
