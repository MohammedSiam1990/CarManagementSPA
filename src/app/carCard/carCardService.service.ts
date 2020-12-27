import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { getPaginatedResult, getPaginationHeaders } from 'src/app/shared/services/paginationHelper';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: typedef
export class CarCardServiceService {
baseurl = environment.apiUrl + 'CarCard/';
constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
addNewCarCard(userId: number, newCarCard: any): Observable<any>  {
  console.log(this.baseurl + userId + '/AddNewCarCard');
  return this.http.post(this.baseurl + userId + '/AddNewCarCard', newCarCard).pipe(
    map((response: any) => {
      console.log(response);
      return response;
    })
  );
}
// tslint:disable-next-line: typedef
getCarCards(pageNumber, pageSize, userId: number) {
  const params = getPaginationHeaders(pageNumber, pageSize);
  // params = params.append('Container', container);
  const url = this.baseurl + userId + '/GetCarCards';
  return getPaginatedResult<any>(url, params, this.http);
}



}
