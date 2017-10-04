import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Itemcinco } from '../models/itemcinco';

@Injectable()
export class Itemscinco {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/itemscinco', params)
      .map(resp => resp.json());
  }

  add(itemcinco: Itemcinco) {
  }

  delete(itemcinco: Itemcinco) {
  }

}
