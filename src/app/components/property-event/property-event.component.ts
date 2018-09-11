import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-event',
  templateUrl: './property-event.component.html',
  styleUrls: ['./property-event.component.css']
})
export class PropertyEventComponent implements OnInit {
  
  value: string;

  constructor() { }

  ngOnInit() {
  }

  onKey(event: KeyboardEvent) { // with type info
    this.value = (<HTMLInputElement>event.target).value;
  }

}
