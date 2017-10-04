import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Manual7500 } from '../models/manuales7500';

@Injectable()
export class Manuales7500 {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/manuales', params)
      .map(resp => resp.json());
  }

}
