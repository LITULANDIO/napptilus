import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LoompaService } from '../../service/loompa.service';
import { LoompaInterface } from '../../models/loompa-interface.module';

@Component({
  selector: 'loompa-detail',
  templateUrl: './loompa-detail.component.html',
  styleUrls: ['./loompa-detail.component.scss']
})
export class LoompaDetailComponent implements OnInit {

  constructor(public route: ActivatedRoute, public loompaservice: LoompaService) { }

  public loompa: LoompaInterface = {
    first_name: '',
    gender: '',
    profession: '',
    image: '',
    description: ''
  }

  ngOnInit() {
    const loompa_id = this.route.snapshot.params['id'];
    this.getDetails(loompa_id);
  }

  getDetails(id: string){
    this.loompaservice.getLoompaById(id)
    .subscribe(loompa => (this.loompa = loompa));

  
  }

}
