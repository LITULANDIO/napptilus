import { Component, OnInit } from '@angular/core';
import { LoompaService } from '../../service/loompa.service';


@Component({
  selector: 'loompa',
  templateUrl: './loompa.component.html',
  styleUrls: ['./loompa.component.scss']
})

export class LoompaComponent implements OnInit {

  loompas: any[] = [];

  constructor(public loompaservice: LoompaService) {

   }
   filterLoompa = '';

  ngOnInit(): void {
   this.loompaservice.getAllLoompas().subscribe(
     (data)=>{
       this.loompas = data['results'];
     },
     (error)=>{
       console.error(error);
     }
   );
}

}
