import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

// bypassSecurityTrustHtml
// bypassSecurityTrustScript
// bypassSecurityTrustStyle
// bypassSecurityTrustUrl
// bypassSecurityTrustResourceUrl


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  data: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  today: number = Date.now();
  title: String = 'cristian camilo';
  collection: string[] = ['a', 'b', 'c', 'd'];
  time: Observable <string>;
  
  numbers: number[] = [2,4,3,45,6,56,767];
  
  content: SafeHtml;
  dangerousUrl: SafeUrl;
  //dangerousUrl: string;
  
  constructor(private sanitizer: DomSanitizer) { }
  
  ngOnInit() {
    this.time = new Observable <string> ((observer: any) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });

    //this.dangerousUrl = 'javascript:alert("Hi there")';
    this.dangerousUrl = this.sanitizer.bypassSecurityTrustUrl('javascript:alert("Hi there")');
    this.content = this.sanitizer.bypassSecurityTrustHtml('Template <script>alert("0wned")</script> <b>Syntax</b>');
  }
  
  addNumber(number: number){
    console.log("addNumber")
    this.numbers.push(number);
  }

}
