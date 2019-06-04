import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bz-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {

  public title = 'My first AGM project';
  public lat = 51.678418;
  public lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
