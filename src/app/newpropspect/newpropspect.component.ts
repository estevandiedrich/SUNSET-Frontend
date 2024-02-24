import { Component, OnInit } from '@angular/core';
import { ProspectService } from '../prospect.service';
import { Prospect } from '../prospect';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-newpropspect',
  templateUrl: './newpropspect.component.html',
  styleUrls: ['./newpropspect.component.css']
})
export class NewpropspectComponent implements OnInit {
  
  constructor(private service: ProspectService, private activatedRoute: ActivatedRoute,private datePipe: DatePipe) { }
  prospect: Prospect = new Prospect();
  id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  ngOnInit(): void {
    if (this.id) {
      this.service.getProspect(this.id).subscribe(p => {
        this.prospect = p;
      });
    }
  }
  novoProspect() {
    if (this.id) {
      this.service.putProspect(this.prospect).subscribe(p => {
        p.dataNascimento.setDate(p.dataNascimento.getDate()+1);
        p.dataConversao.setDate(p.dataConversao.getDate()+1);
        this.prospect = p;
      });
    } else {
      this.service.postProspect(this.prospect).subscribe(p => {
        p.dataNascimento.setDate(p.dataNascimento.getDate()+1);
        p.dataConversao.setDate(p.dataConversao.getDate()+1);
        this.prospect = p;
      });
    }
  }
  novoCliente() {
    this.prospect.dataConversao = new Date();
    this.prospect.cliente = true;
    this.service.putProspect(this.prospect).subscribe(p => {
      this.prospect = p;
    });
  }
  
}
