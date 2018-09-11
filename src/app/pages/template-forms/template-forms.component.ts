import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  name: string;
  lastName?: string;
  email: string;
  idCity: string;
}

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  citys: {name: string, id: number}[] = [ 
          {name: "--- ---", id: null},
          {name: "Medellín", id: 1},
          {name: "Manizales", id: 2},
          {name: "Armenia", id: 3},
          {name: "Pereira", id: 4}];

  //user: User = {name: "Camilo", lastName: "Colmenares", email: "ccolorado47@gmail.com", idCity: 1}
  user: User = {name: "", lastName: "", email: "", idCity: ""}
  
  constructor() { }

  ngOnInit() {
  }

  save(camiloForm: NgForm){
    console.log("camiloForm", camiloForm);
    this.user = {name: "", lastName: "", email: "", idCity: ""}
  }
}
