import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { letterValidator } from '../validators/letterValidator';
import { initialLetterValidator } from '../validators/initialLetterValidator';
import { UniqueService } from '../validators/async/unique.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  //Listen input by formComtrol
  //Manage subscribe an unsubscribe
  //group elements
  //group validations
  //updateOn?: 'change' | 'blur' | 'submit'
  //Pipes
  //run built - built aot

  citys: {name: string, id: number}[] = [ 
    {name: "--- ---", id: null},
    {name: "Medellín", id: 1},
    {name: "Manizales", id: 2},
    {name: "Armenia", id: 3},
    {name: "Pereira", id: 4}];

  // camiloForm = new FormGroup({
  //   name: new FormControl(''),
  //   lastName: new FormControl(''),
  //   age: new FormControl(''),
  //   isStudent: new FormControl(''),
  //   location: new FormGroup({
  //     idCity: new FormControl(''),
  //     department: new FormControl(''),
  //   })
  // });
  generalkey = 1;
  getArrayDefault = [];
  camiloForm: FormGroup;

  constructor(private fb: FormBuilder, private uniqueService: UniqueService) {
  }

  ngOnInit() {
    this.camiloForm = this.fb.group({
                        name: ['', [Validators.required, Validators.pattern(''),
                                    Validators.minLength(5), Validators.maxLength(10), letterValidator('o')],
                                  ],
                        lastName: ['', {updateOn: 'blur', validators:[], asyncValidators: [this.uniqueService]}],
                        age: ['', Validators.required],
                        isStudent: ['', Validators.required],
                        location: this.fb.group({
                          idCity: [''],
                          department: ['', Validators.required],
                        }),
                        test: this.fb.group({
                          default: this.fb.group({}),
                        })
                      },{ validator: [initialLetterValidator('c')], updateOn: 'submit' })
    console.log(this.camiloForm);
  }

  onSubmit(){
    console.log(this.camiloForm.value);
  }

  updateForm(){
    this.camiloForm.patchValue({
      name: "camilo",
      lastName: "colorado",
      location: {
        idCity: "2",
        department: "Antioquia",
      }
    })
    // this.camiloForm.setValue({
    //   name: "camilo",
    //   lastName: "colorado",
    //   isStudent: true,
    //   age: "26",
    //   location: {
    //     idCity: "2",
    //     department: "Antioquia",
    //   }
    // })
  }

  test(){
    this.getDefault.setControl(`onVisa${this.generalkey++}`, this.fb.control(false))
    this.getArrayDefault = Object.values(this.getDefault.controls);
  }

  get getTest() { 
    return this.camiloForm.get('test') as FormGroup; 
  }

  get getDefault() { 
    return this.getTest.get('default') as FormGroup; 
  }

  get name() { return this.camiloForm.get('name'); }
  get lastName() { return this.camiloForm.get('lastName'); }
}

