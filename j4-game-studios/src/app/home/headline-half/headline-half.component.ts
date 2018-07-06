import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home-headline-half',
  templateUrl: './headline-half.component.html',
  styleUrls: ['./headline-half.component.css']
})
export class HeadlineHalfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input('header') header : string;
  @Input('sub-header') subHeader : string;
  @Input('link') link : string;
}
