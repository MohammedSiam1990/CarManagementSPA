import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LookUP } from 'src/app/shared/models/lookUP';
import { lookUpDto } from 'src/app/carCard/carCard-create/carCard-create.component';
import { LookUpType } from '../enum/LookUpType.enum';

@Injectable({
  providedIn: 'root'
})
export class LookUpService {
  looKUP: LookUP[] = [];
// public looKUPs: Observable<LookUP[]> = of([]);

baseurl = environment.apiUrl  + 'LookUP/';
constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
 // tslint:disable-next-line: no-shadowed-variable
 loadlookUp(id: number): Observable<any> {
  return this.http.get<LookUP>(this.baseurl + id + '/getLookUP').pipe(
    map((response: any) => {
      return response;
      // tslint:disable-next-line: no-debugger
      debugger;
      console.log(response.lookUps);
    }));
}



}
