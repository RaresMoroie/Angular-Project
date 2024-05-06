import { Injectable } from '@angular/core';
import {House} from './house.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  getListOfHouses(): House[] {
    return this.HouseArray;
  }

  searchByTitle(vales: string): House[] {
    return this.HouseArray.filter((house: House) =>
      house.title.toLowerCase().includes(vales.toLowerCase())
    );
  }

  HouseArray: House[] = [{
    id: 1,
    title: 'Apartment',
    description: 'Boston, MA',
    price: 800000,
    imageUrl: 'https://photos.zillowstatic.com/fp/3250a5eaa07ddc4624bf04ae617501f6-cc_ft_768.webp',
  },
  {
    id:2,
    title: 'Townhouse',
    description: 'New York, NY',
    price: 5000000,
    imageUrl: 'https://www.zillowstatic.com/bedrock/app/uploads/sites/26/types-of-townhouses-brownstone-townshouses-nyc-6d8c6c.jpg',
  },
  {
    id: 3,
    title: 'Apartment',
    description: "Bucuresti",
    price: 225000,
    imageUrl: 'https://www.in-bucharest.com/images/apartments/360x250/cazare-apartament-bucuresti-1.jpg',
  },
  {
    id: 4,
    title: 'Apartment',
    description: "Brasov",
    price: 115000,
    imageUrl: 'https://coresi-avantgarden.ro/wp-content/uploads/2020/11/Coresi-A204_View01.jpg',
  },
  {
    id: 5,
    title: 'House',
    description: "Los Angeles, CA",
    price: 1200000,
    imageUrl: 'https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
  },
  {
    id: 6,
    title: 'Penthouse',
    description: "Cluj-Napoca",
    price: 180000,
    imageUrl: 'https://archello.s3.eu-central-1.amazonaws.com/images/2022/10/17/kca-international-the-penthouse--the-address-beach-resort-apartments-archello.1665992818.5879.jpg',
  },
  {
    id: 7,
    title: 'Apartment',
    description: "Brasov",
    price: 120000,
    imageUrl: 'https://www.dezvoltatorimobiliar.ro/upload/ansambluri/main/a23a1-coresi-avantgarden-brasov-dezvoltatoimobiliar.ro.jpg',
  },
  {
    id: 8,
    title: 'House',
    description: "Austin, TX",
    price: 430000,
    imageUrl: 'https://www.austinluxuryrealty.com/uploads/Austin%20homepage3.png',
  },
  {
    id: 6,
    title: 'Apartment',
    description: "Miami, FL",
    price: 280000,
    imageUrl: 'https://sxxweb8cdn.cachefly.net/img/thumbnail.aspx?p=/common/uploads/zrs2019/551/media/13bc42a4-44e6-4c14-826b-8b89fbfc17f1.jpg&q=71&w=0&h=0',
  }]

  constructor() { }
}
