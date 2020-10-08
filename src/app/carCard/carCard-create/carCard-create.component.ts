import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { from } from 'rxjs';
import { LookUpService } from 'src/app/shared/services/lookUp.service';
import { LookUP } from 'src/app/shared/models/lookUP';
import { LookUpType } from 'src/app/shared/enum/LookUpType.enum';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { AuthService } from 'src/app/auth/auth.service';
// tslint:disable-next-line: class-name
export interface lookUpDto {
  lookUpType: LookUpType ;
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-carCard-create',
  templateUrl: './carCard-create.component.html',
  styleUrls: ['./carCard-create.component.scss'],
})
export class CarCardCreateComponent implements OnInit {
  // looKUPsdto: LookUP;
  // lookUPType: lookUpDto;
  carCardForm: FormGroup;
  typeOfCarDto: any;
  nathanalotyDto: any;
  selectedCar: string;
  constructor(
    private fb: FormBuilder,
    private lookUpService: LookUpService,
    private alertify: AlertifyService,
    private authService: AuthService
  ) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.createCarCardForm();
    // tslint:disable-next-line: no-debugger
    this.loadTypeOfCarLookUP();
  }
  // tslint:disable-next-line: typedef
  loadTypeOfCarLookUP() {

    this.lookUpService.loadlookUp(this.authService.decodedToken.nameid).subscribe(
      (data: any) =>  {
        this.typeOfCarDto = data.lookUps.TypeOfCar;
        this.nathanalotyDto = data.lookUps.Nationality;
        // tslint:disable-next-line: no-debugger
        debugger;
        console.log(data);
      },
      (error) => {
        this.alertify.error(error);
      }
    );
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
        // nationality: [''],
        // typeOfCarf: [''],
        // password: [
        //   '',
        //   [
        //     Validators.required,
        //     Validators.minLength(4),
        //     Validators.maxLength(8)
        //   ]
        // ],
        Notes: ['', [Validators.required]],
      }
      // { validators: this.passwordMatchValidator }
    );
  }
  // tslint:disable-next-line: typedef
  addCarCard() {}
}
