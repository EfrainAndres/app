import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Manual } from '../models/manuales';

@Injectable()
export class Manuales {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/manuales', params)
      .map(resp => resp.json());
  }

}
