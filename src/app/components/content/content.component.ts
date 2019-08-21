import { Component, OnInit } from '@angular/core';
import { ClanService } from 'src/app/services/clan.service';
import { Clan } from 'src/app/models/clans/clan';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  clan: Clan;


  constructor(private clanService: ClanService) {
    this.clan = new Clan();
    this.get("%23YRL0YC8R");
   }


  ngOnInit() {
  }

  get(tag: string){
    this.clanService.get(tag).subscribe((response: Clan) => {
        this.clan = new Clan();
        this.clan = response;
        console.log(this.clan);
    }
        , error => console.log(error)
    );
  }



}
