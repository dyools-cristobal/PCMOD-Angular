import { Component, OnInit } from '@angular/core';
import { headerContent } from 'src/interfaces/header-content-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  expandSearch = {
    show: false,
    title: '+ Advanced Search'
  };
  headerContent: headerContent = {
    subtitle: '',
    title: 'Search',
    actionLabel: '',
    actionLink: '',
    actionIcon: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  expandSearchPanel() {
    if (this.expandSearch.show === false) {
      this.expandSearch = {
        show: true,
        title: '- Advanced Search'
      }
    } else {
      this.expandSearch = {
        show: false,
        title: '+ Advanced Search'
      }
    }
  }

}
