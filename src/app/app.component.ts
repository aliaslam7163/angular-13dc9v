import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import { DataProviderService } from './dataprovider.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
    animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent implements OnInit  {
  _gridData;
  columnDisplayed;

  constructor(private dp: DataProviderService){
    this._gridData = new MatTableDataSource<any[]>();
  }

  ngOnInit(){
    this.dp.getJSON().subscribe((resp) => {
      this._gridData = resp;
      this.columnDisplayed = Object.keys(this._gridData[0]);
      console.log(this.columnDisplayed);
    });
    //this.columnDisplayed = Object.keys(this._gridData[0]);
    
  }
}
