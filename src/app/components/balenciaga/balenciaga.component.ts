import { ArmarioService } from './../../services/armario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balenciaga',
  templateUrl: './balenciaga.component.html',
  styleUrls: ['./balenciaga.component.scss']
})
export class BalenciagaComponent implements OnInit {

  myBalenciaga?: any[];

  constructor(private sneakerService: ArmarioService) {
    this.sneakerService.getAllBalenciaga().subscribe((data:any) => {
      console.log(data);
      this.myBalenciaga = [...data];
    })
   }

  ngOnInit(): void {
  }

}
