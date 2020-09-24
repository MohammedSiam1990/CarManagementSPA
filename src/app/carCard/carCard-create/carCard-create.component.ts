import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-carCard-create',
  templateUrl: './carCard-create.component.html',
  styleUrls: ['./carCard-create.component.scss']
})
export class CarCardCreateComponent implements OnInit {
  carCardForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.createCarCardForm();
  }
  // tslint:disable-next-line: typedef
  createCarCardForm() {
    console.log('Test1');
    this.carCardForm = this.fb.group(
      {
        // gender: ['male'],
        carNumber: ['', Validators.required],
        model: ['', Validators.required],
        scheduledCars: ['', Validators.required],
        existingCars: ['', Validators.required],
        Status: ['', Validators.required],
        // password: [
        //   '',
        //   [
        //     Validators.required,
        //     Validators.minLength(4),
        //     Validators.maxLength(8)
        //   ]
        // ],
        Notes: ['', [Validators.required]]
      },
      // { validators: this.passwordMatchValidator }
    );
  }
  // tslint:disable-next-line: typedef
  addCarCard() {

  }

}
