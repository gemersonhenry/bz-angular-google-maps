import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { LocationComponent } from './location/location.component';
import { BusinessRoutingModule } from './business-routing.module';

import { AgmCoreModule } from '@agm/core';
import { ComponentsModule } from '../components/components.module';
import { CustomLocationComponent } from './custom-location/custom-location.component';

@NgModule({
  declarations: [
    BusinessComponent,
    LocationComponent,
    CustomLocationComponent,
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    ComponentsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8yXlPxcDXMYty_SroLUGOFEpwhPxh1bg',
    })
  ]
})
export class BusinessModule { }
