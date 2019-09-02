import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges {

  @Input() character: any;
  @Input() columns: string[];
  @Input() table: string;

  constructor() {
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }


  lastSeenHoras(lastSeen: string): string {
    var cadena = "";
    var fechaLastSeen = moment(new Date(lastSeen));
    //var fechaLastSeen = moment(new Date("2019-08-07:05:33"));
    var fechaActual = moment(new Date());
    var days = fechaActual.diff(fechaLastSeen, 'days');
    var hours = fechaActual.diff(fechaLastSeen, 'hours');

    if (days === 0) {
      if (hours === 0) {
        cadena = "Hace Menos de una hora";
      } else {
        cadena = "Hace " + hours + " horas";
      }
    } else {
      cadena = "Hace " + days + " dias con " + (hours - (days * 24)) + " horas";
    }
    return cadena;
  }

}
