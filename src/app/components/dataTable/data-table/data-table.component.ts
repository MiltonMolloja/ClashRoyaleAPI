import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataTableService } from '../services/data-table.service';
import { Clan } from 'src/app/models/clans/clan';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];

  constructor(private dataTableService: DataTableService) {
    this.columns = this.dataTableService.getColumns();
    this.characters = this.dataTableService.getCharacters();
  }

  ngOnInit() {

  }
}
