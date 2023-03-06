import { Component, Input, OnInit } from '@angular/core';
import { headerContent } from 'src/interfaces/header-content-interface';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() headerContent!: headerContent;
  constructor() { }

  ngOnInit(): void {
  }
  checkAction() {
    if (this.headerContent.actionLink !== '') {
      return true
    } else {
      return false
    }
  }
}
