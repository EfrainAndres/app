import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Itemsq } from '../models/itemsq';

@Injectable()
export class Itemssq {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/itemssq', params)
      .map(resp => resp.json());
  }

  add(itemsq: Itemsq) {
  }

  delete(itemsq: Itemsq) {
  }

}
