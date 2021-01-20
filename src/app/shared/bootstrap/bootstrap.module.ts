import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



import { from } from 'rxjs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, AccordionModule.forRoot(), CarouselModule.forRoot(), BsDropdownModule.forRoot(),

  ],
  exports: [ AccordionModule, CarouselModule, BsDropdownModule]
})
export class BootstrapModule { }
