import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CarCardCreateComponent } from '../carCard-create/carCard-create.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},


];

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-carCard-query',
  templateUrl: './carCard-query.component.html',
  styleUrls: ['./carCard-query.component.scss']
})
export class CarCardQueryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'test', 'test1', 'test3'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  panelOpenState = true;


  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private dialog: MatDialog) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  openAddContactDialog(): void {
    const  dialogRef = this.dialog.open(CarCardCreateComponent, {
      width: '1200px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
