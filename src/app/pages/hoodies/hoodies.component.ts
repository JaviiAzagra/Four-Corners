import { ArmarioService } from './../../services/armario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoodies',
  templateUrl: './hoodies.component.html',
  styleUrls: ['./hoodies.component.scss']
})
export class HoodiesComponent implements OnInit {

  myHoodies?: any[];

  constructor(private hoodieService: ArmarioService) { 
    this.hoodieService.getAllHoodies().subscribe((data:any) => {
      console.log(data);
      this.myHoodies = [...data];
    })
  }

  ngOnInit(): void {
  }

}
