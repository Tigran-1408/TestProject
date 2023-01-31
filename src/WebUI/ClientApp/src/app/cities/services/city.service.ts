import {Inject, Injectable} from "@angular/core";
import {ApiResult, BaseService} from "../../base.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../models/city";

@Injectable({
  providedIn: 'root',
})

export class CityService extends BaseService {
  constructor(
    http: HttpClient,
    @Inject("BASE_URL") baseUrl: string
  ) {
    super(http, baseUrl);
  }

  getData<ApiResult>(
    pageIndex: number,
    pageSize: number,
    sortColumn: string,
    sortOrder: string,
    filterColumn: string,
    filterQuery: string): Observable<ApiResult> {
    let url_ = this.baseUrl + "/api/Cities";
    let params = new HttpParams()
      .set("pageIndex", pageIndex.toString())
      .set("pageSize", pageSize.toString())
      .set("sortColumn", sortColumn)
      .set("sortOrder", sortOrder);

    if (filterQuery) {
      params = params
        .set("filterColumn", filterColumn)
        .set("filterQuery", filterQuery);
    }
    return this.http.get<ApiResult>(url_, {params});
  }

  get<City>(id): Observable<City> {
    let url_ = this.baseUrl + "/api/Cities/" + id;
    return this.http.get<City>(url_);
  }

  put<City>(item): Observable<City> {
    let url_ = this.baseUrl + "/api/Cities/" + item.id;
    return this.http.put<City>(url_, item);
  }

  post<City>(item): Observable<City> {
    let url_ = this.baseUrl + "/api/Cities/" + item.id;
    return this.http.post<City>(url_, item);
  }

  getCountries<ApiResult>(
    pageIndex: number,
    pageSize: number,
    sortColumn: string,
    sortOrder: string,
    filterColumn: string,
    filterQuery: string): Observable<ApiResult> {
    let url_ = this.baseUrl + "/api/Countries";
    let params = new HttpParams()
      .set("pageIndex", pageIndex.toString())
      .set("pageSize", pageSize.toString())
      .set("sortColumn", sortColumn)
      .set("sortOrder", sortOrder);

    if (filterQuery) {
      params = params
        .set("filterColumn", filterColumn)
        .set("filterQuery", filterQuery);
    }
    return this.http.get<ApiResult>(url_, {params});
  }

  isDupeCity(item): Observable<boolean>{
    let url_ = this.baseUrl + "/api/Cities/IsDupeCity";
    return this.http.post<boolean>(url_, item);
  }
}
