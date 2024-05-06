import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/house.interface';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent {
  @Input() house!: House;

  constructor(private router: Router, private cardService: CardService) {}
}
