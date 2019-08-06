import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoompaService {
  constructor(protected http: HttpClient) { }

  getAllLoompas(){
    return this.http.get(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas`);
  }
  getLoompaById(id: string){
    return this.http.get(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`);

  }

}
