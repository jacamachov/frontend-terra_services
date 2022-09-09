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
  values: any = [];

  ngOnInit() {
    Object.entries(terra).forEach(([key, value]) => {
      this.keys = [...this.keys, key];
      Object.entries(value).forEach(([key2, value2]) => {
        this.titles = [...this.titles, key2];
        this.values = [...this.values, value2];
      });
    })
  }

}
