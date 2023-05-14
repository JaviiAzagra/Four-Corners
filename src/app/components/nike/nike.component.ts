import { ArmarioService } from './../../services/armario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.scss']
})
export class NikeComponent implements OnInit {

  myNike?: any[];

  constructor(private sneakerService: ArmarioService) {
    this.sneakerService.getAllNike().subscribe((data:any) => {
      console.log(data);
      this.myNike = [...data];
    })
   }

  ngOnInit(): void {
  }

}
