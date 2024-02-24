import { Component, Input, OnInit } from '@angular/core';
import { Prospect } from '../prospect';
import { ProspectService } from '../prospect.service';

@Component({
  selector: 'app-propspects',
  templateUrl: './propspects.component.html',
  styleUrls: ['./propspects.component.css']
})
export class PropspectsComponent implements OnInit{
  title = 'SUNSET-CRM-Frontend';
  @Input() query = "";
  prospects:Prospect[] = [];
  
  constructor(private prospectService:ProspectService){
    
  }
  ngOnInit(): void {
    this.prospectService.getProspects().subscribe(prospects => {
      this.prospects = prospects._embedded.prospects;
    })
  }
  delete(prospect: any) {
    this.prospectService.deleteProspect(prospect.id).subscribe(() => {
      this.prospects = this.prospects?.filter(p => p.id !== prospect.id);
    });
  }
}
