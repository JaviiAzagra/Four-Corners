import { ArmarioService } from './../../services/armario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.scss']
})
export class AdidasComponent implements OnInit {

  myAdidas?: any[];

  constructor(private sneakerService: ArmarioService) { 
    this.sneakerService.getAllAdidas().subscribe((data:any) => {
      console.log(data);
      this.myAdidas = [...data];
    })
  }

  ngOnInit(): void {
  }

}
