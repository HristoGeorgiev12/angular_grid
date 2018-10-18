import { Component, OnInit } from '@angular/core';

interface interfaceJsonArray {
  id: number;
  name: string;
  username:string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  jsonArray:interfaceJsonArray[];
  displayArray:any[];
  rowOptions:number[];
  rowLimiterStart:number;
  rowLimiterEnd:number;
  currentRowLimiter:number;
  paginationButtons:number[];


  constructor() { }

  ngOnInit() {
    this.rowOptions = [ 1, 2, 5, 7];
    this.jsonArray = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
      }
    ]
    this.displayArray = this.jsonArray;
    this.currentRowLimiter = 0;
    this.pagination();
  }

filterSearchBar(el) {
  if(el == "") {
    this.displayArray = this.jsonArray;
    return;
  }
  this.displayArray = this.displayArray.filter(ele => {
    return !ele.username.toLowerCase().indexOf(el);
  })
}

filterRowLimiter(el) {
  this.currentRowLimiter = el;
  if(el == 0) this.displayArray = this.jsonArray;
  else        this.displayArray = this.jsonArray.slice(0, el);

  this.pagination();

}

display() {
  this.displayArray = this.jsonArray.filter((el, index) =>  {

    return (el.id > this.rowLimiterStart && el.id <= this.rowLimiterEnd);
  })
}

pagination() {
  this.paginationButtons = this.counter(Math.ceil(this.jsonArray.length / this.currentRowLimiter));
}

counter(i: number) {
  return new Array(i);
}

paginationAction(el) {
  this.rowLimiterEnd = el * this.currentRowLimiter;
  console.log(this.rowLimiterEnd);
  this.rowLimiterStart = this.rowLimiterEnd - this.currentRowLimiter;
  console.log(this.rowLimiterStart);

  this.display();

}

}
