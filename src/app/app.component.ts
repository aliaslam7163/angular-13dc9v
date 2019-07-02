import { Component } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  _gridData;

  constructor(){
    this._gridData = new MatTableDataSource<any>();
  }
}
