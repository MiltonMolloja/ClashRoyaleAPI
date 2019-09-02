import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataTableService } from '../services/data-table.service';
import { Clan } from 'src/app/models/clans/clan';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges {

  @Input() characterClan: any[];
  @Input() table: string;

  //charactersC: any[];
  characters: Observable<any[]>;
  columns: string[];
  itemsPerPageNumber: number=0;

  constructor(private dataTableService: DataTableService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(this.characterClan);
    this.itemsPerPageNumber=15;
    this.characters = Observable.of(this.characterClan);
    this.columns = this.dataTableService.getColumns(this.table);
  }

  ngOnInit() {
    console.log(this.characterClan);
    this.characters = Observable.of(this.characterClan);
    this.columns = this.dataTableService.getColumns(this.table);
    //this.charactersC = this.characterClan;
  }

}
