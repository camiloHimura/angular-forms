import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})

export class InputsComponent implements OnInit {

  value: string;
  searchControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(value => this.value = value);
    //this.searchControl.setValue('camilo');
  }

}
