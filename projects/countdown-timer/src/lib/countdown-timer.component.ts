import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'ctimer-countdown-timer',
  template: ` <div id="timer">
  <div>{{ time.days }} : <span>DAYS</span></div>
  <div>{{ time.hours }} : <span>HOURS</span></div>
  <div>{{ time.min }} : <span>MIN</span></div>
  <div>{{ time.sec }}<span>SEC</span></div>
  </div> `,
  
  styles: [`#timer {
    font-size: 20px;
    color: white;
    text-shadow: 0 0 0.2em black;
    width: 100%;
  }
  
  #timer div {
    display: inline-block;
    max-width: 90px;
    border-radius: 10px;
    font-weight: bold;
  }
  #timer div span {
    color: white;
    display: block;
    font-size: .55em;
    font-weight: bold;
    padding: 5px;
  }`],
})
export class CountdownTimerComponent implements OnInit {
  time!: {
    days: Number;
    hours: Number;
    min: Number;
    sec: Number;
  };
  @Input() finishDateString: string = '';
  finishDate: Date = new Date();
  

  ngOnInit(): void {
    // Inicializamos el momento que falta hasta llegaral tiempo objetivo con valores en 0
    this.time = {
      days: 0, hours: 0, min: 0, sec: 0 
    };
    // Creamos la fecha a partir de la fecha en formato string AAAA-MM-dd HH:mm:ss
    this.finishDate = new Date(this.finishDateString); 

    this.start().subscribe(_ => console.log("down"));
  }

  updateTime() {
    
    const now = new Date();
    const diff = this.finishDate.getTime() - now.getTime();
    console.log(diff)

    // Cálculos para sacar lo que resta hasta ese tiempo objetivo / final
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
    
    // La diferencia que se asignará para mostrarlo en la pantalla
    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.min = mins - hours * 60;
    this.time.sec = secs - mins * 60;
  }
  
  // Ejecutamos la acción cada segundo, para obtener la diferencia entre el momento actual y el objetivo
  start() {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTime();
        return x;
      })
    );
  }
}