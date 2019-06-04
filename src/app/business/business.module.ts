import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { LocationComponent } from './location/location.component';
import { BusinessRoutingModule } from './business-routing.module';

@NgModule({
  declarations: [
    BusinessComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
  ]
})
export class BusinessModule { }
