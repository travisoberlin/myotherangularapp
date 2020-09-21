import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DbasDataSource, DbasItem } from './dbas-datasource';


export class Contact {
  _id?: string;
  name: string;
  email: string;
  phone: {
    mobile: string;
    work: string;
  }
}


@Component({
  selector: 'app-dbas',
  templateUrl: './dbas.component.html',
  styleUrls: ['./dbas.component.scss']
})
export class DbasComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DbasItem>;
  dataSource: DbasDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DbasDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
