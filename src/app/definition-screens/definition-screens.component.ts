import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { AlertifyService } from '../shared/services/alertify.service';
import { LookUpService } from '../shared/services/lookUp.service';
import { DefinitionLookup } from '../shared/models/definitionLookup';

@Component({
  selector: 'app-definition-screens',
  templateUrl: './definition-screens.component.html',
  styleUrls: ['./definition-screens.component.css'],
})
export class DefinitionScreensComponent implements OnInit {
  defintionForm: FormGroup;
  definitionLookup: DefinitionLookup;
  typeOfCarDto: any;
  typeOfCar: boolean =false;
  defintionType: boolean =false;
  constructor(private lookUpService: LookUpService, private alertify: AlertifyService,
    private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
   this.loadLookUP();
   this.definitionlookupValidatorsForm();
  }

  changeDefintion(value: string) {
    console.log(value);
    switch (value) {
      case "0":
       {
        this.defintionType=true;
        this.typeOfCar= false;
        break;
       }
      case "1":
       {
        this.defintionType=true;
        this.typeOfCar= false;
        break;
       }
      case "2":
       {
        this.defintionType= true;
        this.typeOfCar= true;
        break;
       }
      case "3":
       {
        this.defintionType=true;
        this.typeOfCar= false;
        break;
       }
      case "4":
       {
        alert("Marks < 60" + "\n" + "Below Average");
        break;
       }
      default:
       {
        alert("Wrong Grade.........");
       }
     }
    // if (value == 0){
    //   this.defintionType=true;
    //   this.typeOfCar= true;
    // }
  }



  loadLookUP() {
    this.lookUpService
      .loadlookUp(this.authService.decodedToken.nameid)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.typeOfCarDto = data.lookUps.TypeOfCar;
        },
        (error) => {
          this.alertify.error(error);
        }
      );
  }

  definitionlookupValidatorsForm() {

    this.defintionForm = this.fb.group(
      {
        // id: ['', Validators.required],
        description: ['', Validators.required],
        otherType: [ '' , Validators.required],
        lookUpType: ['', Validators.required]
      }

    );
  }

  addNewItem() {
    debugger;
    console.log("Test Add Item");
    this.lookUpService.definitionlookup(this.authService.decodedToken.nameid, this.defintionForm.value)
    .subscribe(
      (data: any) => {
        console.log(data);
        this.alertify.success('Add New Item successfully');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }
}
