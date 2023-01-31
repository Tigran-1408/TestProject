import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Country} from "./models/country";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort, SortDirection} from "@angular/material/sort";
import {HttpClient, HttpParams} from "@angular/common/http";
import { CountryService } from './services/country.service';
import {ApiResult} from "../base.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'iso2', 'iso3', 'totCities'];
  public countries: MatTableDataSource<Country>;

  defaultPageIndex: number = 0;
  defaultPageSize: number = 10;
  public defaultSortColumn: string = "name";
  public defaultSortOrder: SortDirection = "asc";
  defaultFilterColumn: string = "name";
  filterQuery: string = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.loadData(null);
  }

  loadData(query: string = null) {
    var pageEvent = new PageEvent();
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

    this.countryService.getData<ApiResult<Country>>(
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
        this.countries = new MatTableDataSource<Country>(result.data);
      }, error => console.error(error));
  }
}
