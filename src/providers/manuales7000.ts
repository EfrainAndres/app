import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Manual7000 } from '../models/manuales7000';

@Injectable()
export class Manuales7000 {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/manuales7000', params)
      .map(resp => resp.json());
  }

}
