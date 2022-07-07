import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigReaderWriterService {

  constructor(private http:HttpClient) { }


  public doConfiguration(user){
    return this.http.post("http://localhost:9090/processrequest",user,{responseType:'text' as 'json'});
  }
}
