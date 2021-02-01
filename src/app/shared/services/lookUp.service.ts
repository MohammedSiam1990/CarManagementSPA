import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LookUP } from 'src/app/shared/models/lookUP';
import { lookUpDto } from 'src/app/carCard/carCard-create/carCard-create.component';
import { LookUpType } from '../enum/LookUpType.enum';

@Injectable({
  providedIn: 'root',
})
export class LookUpService {
  looKUP: LookUP[] = [];
  baseurl = environment.apiUrl + 'LookUP/';
  constructor(private http: HttpClient) {}
  loadlookUp(id: number): Observable<any> {
    return this.http.get<LookUP>(this.baseurl + id + '/getLookUP').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  loadlooKUPCascading(userId: number, carTypeId: number, lookUpType: number): Observable<any> {
    return this.http
      .get<any>(this.baseurl + userId + '/' + carTypeId + '/' + lookUpType + '/GetLookUPCascading')
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  definitionlookup(userId: number, definitionlookupForm : any ) {

    return this.http.post(this.baseurl + userId + '/AddItemslookUp', definitionlookupForm).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      })
    );
  }
}
