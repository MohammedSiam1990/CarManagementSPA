import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { from } from 'rxjs';
import { LookUpService } from 'src/app/shared/services/lookUp.service';
import { LookUP } from 'src/app/shared/models/lookUP';
import { LookUpType } from 'src/app/shared/enum/LookUpType.enum';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { AuthService } from 'src/app/auth/auth.service';
import { CarCardServiceService } from 'src/app/carCard/carCardService.service';
// tslint:disable-next-line: class-name
export interface lookUpDto {
  lookUpType: LookUpType;
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
  carModelsDto: any;
  selectedCarModel: any;
  constructor(
    private fb: FormBuilder,
    private lookUpService: LookUpService,
    private alertify: AlertifyService,
    private authService: AuthService,
    private carCardService: CarCardServiceService
  ) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.createCarCardForm();
    // tslint:disable-next-line: no-debugger
    this.loadLookUP();
  }
  // tslint:disable-next-line: typedef
  loadLookUP() {
    this.lookUpService
      .loadlookUp(this.authService.decodedToken.nameid)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.typeOfCarDto = data.lookUps.TypeOfCar;
          this.selectedCarModel = this.typeOfCarDto;
          console.log(this.selectedCarModel.id);
          this.nathanalotyDto = data.lookUps.Nationality;
          console.log(data);
        },
        (error) => {
          this.alertify.error(error);
        }
      );
  }
  // tslint:disable-next-line: typedef
  loadCarModelookUP(carTypeId: number) {
    console.log('Test loadlooKUPCascading');
    this.lookUpService
      .loadlooKUPCascading(this.authService.decodedToken.nameid, carTypeId, LookUpType.CarModel)
      .subscribe(
        (data: any) => {
          this.carModelsDto = data;
          console.log(data);
        },
        (error) => {
          this.alertify.error(error);
        }
      );
  }
  // tslint:disable-next-line: typedef
  createCarCardForm() {

    this.carCardForm = this.fb.group(
      {
        // gender: ['male'],
        carNumber: ['', Validators.required],
        model: ['', Validators.required],
        scheduledCars: ['', Validators.required],
        existingCars: ['', Validators.required],
        Status: ['', Validators.required],
        nationality: ['', Validators.required],
        typeOfCar: ['', Validators.required],
        carModel: ['', Validators.required],
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
  addCarCard() {
    // tslint:disable-next-line: no-debugger
    debugger;
    // if (this.carCardForm.valid) {
    this.carCardService
      .addNewCarCard(this.authService.decodedToken.nameid, this.carCardForm.value)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.alertify.success('Add New Car Card successfully');
        },
        (error) => {
          this.alertify.error(error);
        }
      );
    // }
  }
}
