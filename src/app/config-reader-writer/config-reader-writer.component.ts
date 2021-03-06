import { Component, OnInit } from '@angular/core';
import { ConfigReaderWriterModel } from '../ConfigReaderWriterModel';
import { ConfigReaderWriterService } from '../config-reader-writer.service';

@Component({
  selector: 'app-config-reader-writer',
  templateUrl: './config-reader-writer.component.html',
  styleUrls: ['./config-reader-writer.component.css']
})
export class ConfigReaderWriterComponent implements OnInit {


  config: ConfigReaderWriterModel=new ConfigReaderWriterModel("","");
  message:any;

  constructor(private service:ConfigReaderWriterService) { }

  ngOnInit() {
  }
  

  public configureNow(){
let resp=this.service.doConfiguration(this.config);
resp.subscribe((data)=>this.message=data);
  }

}
