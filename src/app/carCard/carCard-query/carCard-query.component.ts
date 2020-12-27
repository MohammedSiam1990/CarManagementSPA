import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CarCardCreateComponent } from '../carCard-create/carCard-create.component';
import { CarCardServiceService } from '../carCardService.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { Pagination } from 'src/app/shared/models/pagination';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},


// ];


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-carCard-query',
  templateUrl: './carCard-query.component.html',
  styleUrls: ['./carCard-query.component.scss']
})
export class CarCardQueryComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['carNumber', 'carModelName', 'nationalityName', 'scheduledCars', 'test', 'test1', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();
  pagination: Pagination;
  resultsLength = 7 ;
  panelOpenState = true;
  pageNumber = 1;
  pageSize = 5;

  constructor(private dialog: MatDialog, private carCardService: CarCardServiceService,
              private authService: AuthService, private alertify: AlertifyService) { }

  @ViewChild('MatPaginator', {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
      console.log('filterValue',filterValue);
   }


  // tslint:disable-next-line: typedef
  ngOnInit() {
   this.getCarCards()
  }

  pageChanged(event: PageEvent): void{
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getCarCards();
    console.log('this.pageNumber' + this.pageNumber + 'this.pageSize' + this.pageSize);
  }
  getCarCards() {

    this.carCardService.getCarCards(this.pageNumber, this.pageSize, this.authService.decodedToken.nameid)
    .subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource<any>(data.result);
        // this.dataSource.paginator = this.paginator;
        this.pagination = data.pagination;
        // this.pagination.totalPages = data.pagination.totalPages;

        // this.resultsLength = this.pagination.totalItems;
        // this.dataSource.paginator.length = this.resultsLength;
        // this.dataSource.paginator = data.pagination;
        console.log(data);
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator);
    this.dataSource.sort = this.sort;
  }
  openAddContactDialog(): void {
    const dialogRef = this.dialog.open(CarCardCreateComponent, {
      width: '1200px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // tslint:disable-next-line: typedef
  // loadCarCard() {
  //   this.carCardService.getCarCards(this.pageNumber, this.pageSize, this.container).subscribe(response => {
  //     this.messages = response.result;
  //     this.pagination = response.pagination;
  //     this.loading = false;
  //   })
  // }

}
