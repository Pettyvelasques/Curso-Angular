import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Patrick';
  age: number = 29;
  job = 'Mecânico';
  hobbies = ['Jogar futebol', 'Estudar', 'Viajar de moto'];
  car = {
    name: 'Chevette',
    year: 1991,
  };

  constructor() {}

  ngOnInit(): void {}
}
