import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,  // *ngIf, *ngFor
    FormsModule,   // [(ngModel)]
    RouterModule   // [routerLink]
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filters: any = {
    brand: '',
    body: '',
    fuel: '',
    transmission: '',
    price: '',
    year: '',
    color: '',
    doors: '',
    power: '',
    extras: '',
    steering: ''
  };

  ads: any[] = [];

  allAds = [
    { id: 1, title: 'BMW M5', price: 120000, year: 2022, mileage: 15000, fuel: 'Бензин', image: '/assets/cars/bmw-m5.jpg' },
    { id: 2, title: 'Mercedes S-Class', price: 150000, year: 2023, mileage: 5000, fuel: 'Дизел', image: '/assets/cars/s-class.jpg' },
    { id: 3, title: 'Audi RS7', price: 130000, year: 2021, mileage: 20000, fuel: 'Бензин', image: '/assets/cars/rs7.jpg' },
    { id: 4, title: 'Porsche Panamera', price: 180000, year: 2023, mileage: 3000, fuel: 'Хибрид', image: '/assets/cars/panamera.jpg' },
    { id: 5, title: 'Range Rover', price: 160000, year: 2022, mileage: 12000, fuel: 'Дизел', image: '/assets/cars/range.jpg' },
    { id: 6, title: 'Tesla Model S', price: 140000, year: 2023, mileage: 8000, fuel: 'Електрически', image: '/assets/cars/model-s.jpg' }
  ];

  yearOptionsFrom: number[] = [];
  yearOptionsTo: number[] = [];

  constructor() {
    this.showRandomAds();
  }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.yearOptionsFrom = Array.from({length: currentYear - 1969}, (_, i) => 1970 + i);
    this.yearOptionsTo = Array.from({length: currentYear - 1969}, (_, i) => currentYear - i);
  }

  showRandomAds() {
    this.ads = [...this.allAds].sort(() => Math.random() - 0.5).slice(0, 4);
  }

  hasFilters(): boolean {
    return Object.values(this.filters).some(v => v !== '');
  }

  onSearch() {
    if (!this.hasFilters()) {
      this.showRandomAds();
    } else {
      this.ads = this.allAds.filter(ad => {
        return (!this.filters.brand || ad.title.toLowerCase().includes(this.filters.brand.toLowerCase())) &&
               (!this.filters.fuel || ad.fuel === this.filters.fuel) &&
               (!this.filters.year || ad.year >= parseInt(this.filters.year, 10));
      });
    }
  }

  onPriceFromChange(value: number) {
    this.filters.priceFrom = Math.min(value, this.filters.priceTo || 300000);
  }

  onPriceToChange(value: number) {
    this.filters.priceTo = Math.max(value, this.filters.priceFrom || 0);
  }
}
