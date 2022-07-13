import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigReaderWriterModel } from './ConfigReaderWriterModel';
@Injectable({
  providedIn: 'root'
})
export class ConfigReaderWriterService {

  constructor(private http:HttpClient) { }


  public doConfiguration(config:ConfigReaderWriterModel){
    return this.http.post("http://localhost:9090/processrequest",config,{responseType:'text' as 'json'});
  }
}
