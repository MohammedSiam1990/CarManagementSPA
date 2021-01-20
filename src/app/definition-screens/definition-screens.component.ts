import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AlertifyService } from '../shared/services/alertify.service';
import { LookUpService } from '../shared/services/lookUp.service';

@Component({
  selector: 'app-definition-screens',
  templateUrl: './definition-screens.component.html',
  styleUrls: ['./definition-screens.component.css'],
})
export class DefinitionScreensComponent implements OnInit {
  typeOfCarDto: any;
  defintionType: boolean;
  constructor(private lookUpService: LookUpService, private alertify: AlertifyService,
    private authService: AuthService) {}

  ngOnInit(): void {
   this.loadLookUP();
  }

  changeDefintion(value: number) {
    if (value == 0) {
      this.defintionType=true;
    }
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
}
