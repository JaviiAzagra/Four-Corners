import { ArmarioService } from './../../services/armario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.scss']
})
export class SneakersComponent implements OnInit {

  mySneakers?: any[];

  constructor(private sneakerService: ArmarioService) { 
    this.sneakerService.getAllSneakers().subscribe((data:any) => {
      console.log(data);
      this.mySneakers = [...data];
    })
  }

  ngOnInit(): void {
  }

}
