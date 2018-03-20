import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { AgGridModule } from 'ag-grid-angular/main';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '../../shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { ExtendedComponent } from './extended/extended.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AngulargridComponent } from './angulargrid/angulargrid.component';
import { NgxdatatableComponent } from './ngxdatatable/ngxdatatable.component';

const routes: Routes = [
    { path: 'standard', component: StandardComponent },
    { path: 'extended', component: ExtendedComponent },
    { path: 'datatable', component: DatatableComponent },
    { path: 'aggrid', component: AngulargridComponent },
    { path: 'ngxdatatable', component: NgxdatatableComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        Ng2TableModule,
        AgGridModule.withComponents([AngulargridComponent]),
        NgxDatatableModule
    ],
    declarations: [
        StandardComponent,
        ExtendedComponent,
        DatatableComponent,
        AngulargridComponent,
        NgxdatatableComponent
    ],
    exports: [
        RouterModule
    ]
})
export class TablesModule { }
