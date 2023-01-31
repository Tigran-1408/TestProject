import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort, SortDirection} from "@angular/material/sort";

import {City} from "./models/city";
import { CityService } from './services/city.service';
import { ApiResult} from '../base.service'


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'lat', 'lon', 'countryName'];
  public cities: MatTableDataSource<City>;

  defaultPageIndex: number = 0;
  defaultPageSize: number = 10;
  public defaultSortColumn: string = 'Name';
  public defaultSortOrder: SortDirection = 'asc';

  defaultFilterColumn: string = 'Name';
  filterQuery: string = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private cityService: CityService
  ) {
  }

  ngOnInit() {
    this.loadData(null);
  }

  loadData(query:string = null) {
    let pageEvent = new PageEvent();
    pageEvent.pageIndex = this.defaultPageIndex;
    pageEvent.pageSize = this.defaultPageSize;
    if (query) {
      this.filterQuery = query;
    }
    this.getData(pageEvent);
  }

  getData(event: PageEvent) {

    let sortColumn = (this.sort) ? this.sort.active : this.defaultSortColumn;
    let sortOrder = (this.sort) ? this.sort.direction : this.defaultSortOrder;
    let filterColumn = (this.filterQuery) ? this.defaultFilterColumn : null;
    let filterQuery = (this.filterQuery) ? this.filterQuery : null;

    this.cityService.getData<ApiResult<City>>(
      event.pageIndex,
      event.pageSize,
      sortColumn,
      sortOrder,
      filterColumn,
      filterQuery
    )
      .subscribe(result => {
          this.paginator.length = result.totalCount;
          this.paginator.pageIndex = result.pageIndex;
          this.paginator.pageSize = result.pageSize;
          this.cities = new MatTableDataSource<City>(result.data);
        },
        err => {
          console.log(err);
        }
      )
  }
}
