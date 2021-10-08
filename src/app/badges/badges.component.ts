import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css'],
})
export class BadgesComponent implements OnInit {
  constructor() {}
  notifications: number = 2;

  ngOnInit(): void {}
}
