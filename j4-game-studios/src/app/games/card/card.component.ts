import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'games-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('title') title : string;
  @Input('game-icon') gameIcon : string;
}
