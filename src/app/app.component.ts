import { Component, OnInit } from '@angular/core';
import { terra } from '../assets/terra';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  keys: any = [];
  titles: any = [];

  ngOnInit() {
    Object.entries(terra).forEach(([key, value]) => {
      let tmptitles:any = [];
      this.keys = [...this.keys, key];
      Object.entries(value).forEach(([key2, value2]) => {
        tmptitles = [...tmptitles, {title: key2, values: value2}];
      });
      this.titles = [...this.titles, tmptitles];
    })
  }

}
