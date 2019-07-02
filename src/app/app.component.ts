import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import { DataProviderService } from './dataprovider.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  _gridData;

  constructor(private dp: DataProviderService){
    this._gridData = new MatTableDataSource<any>();
  }

  ngOnInit(){
    this._gridData = this.dp.getAvailableSearch();
    console.log(this._gridData)
  }
}
