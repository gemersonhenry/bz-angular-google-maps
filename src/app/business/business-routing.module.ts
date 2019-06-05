import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CustomLocationComponent } from './custom-location/custom-location.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: LocationComponent,
        pathMatch: 'full',
    },
    {
        path: 'custom-location',
        component: CustomLocationComponent,
        pathMatch: 'full',
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class BusinessRoutingModule {}