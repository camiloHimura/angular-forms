import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {

  trvInput: string;
  optionSelected: string;
  textThree: string;

  constructor() { }

  ngOnInit() {
  }

  sendValue(value){
    this.trvInput = value;
  }

  sendInfo(element){
    this.optionSelected = (<HTMLSelectElement>element).value;
  }

  onEnter(value){
    this.textThree = value;
  }
}
