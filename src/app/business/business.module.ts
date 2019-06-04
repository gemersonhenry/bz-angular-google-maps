import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { LocationComponent } from './location/location.component';
import { BusinessRoutingModule } from './business-routing.module';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    BusinessComponent,
    LocationComponent,
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkftmN61nuxGj88dBs5YxWUS-IufetF00',
    })
  ]
})
export class BusinessModule { }
