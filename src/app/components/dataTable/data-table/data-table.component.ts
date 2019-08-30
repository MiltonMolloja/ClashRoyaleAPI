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

  @Input() characterClan: any[];

  charactersC:  any[];
  characters: Observable<any[]>;
  columns: string[];

  constructor(private dataTableService: DataTableService) {
  }

  ngOnInit() {
    console.log(this.characterClan);
    this.characters = Observable.of(this.characterClan);
    this.columns = this.dataTableService.getColumns();
    this.charactersC = this.characterClan;
  }
}
