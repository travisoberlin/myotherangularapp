import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbasComponent } from './dbas/dbas.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [DbasComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class TablesModule { }
