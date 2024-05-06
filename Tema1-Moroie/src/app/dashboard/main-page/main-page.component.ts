import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/card.service';
import { House } from 'src/app/house.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  HousesArray: House[] = [];
  SearchedHouses: House[] = [];
  startSliceIndex: number = 0;
  endSliceIndex: number = 5;
  searchValue: string = '';

  ngOnInit(): void {
    this.getListOfHouses();
  }

  constructor(private cardService: CardService){}

  getListOfHouses() {
    this.HousesArray = this.cardService.getListOfHouses();
    this.SearchedHouses = this.cardService.getListOfHouses();
  }

  incrementIndices() {

    if (this.endSliceIndex < this.HousesArray.length) {
      this.startSliceIndex++;
      this.endSliceIndex++;
    }
  }

  decrementIndices() {
    this.startSliceIndex--;
    this.endSliceIndex--;

    if (this.startSliceIndex < 0) {
      this.startSliceIndex = 0;
      this.endSliceIndex = 5;
    }
  }

  searchHouse() {
    const listFiltered = this.cardService.searchByTitle(this.searchValue);
    this.SearchedHouses = listFiltered;
  }
}
