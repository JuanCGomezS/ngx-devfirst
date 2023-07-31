import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() links: Links[] = [];
  constructor() {}

  ngOnInit() {}
}

export interface Links {
  name: string;
  router: string[] | undefined;
}
