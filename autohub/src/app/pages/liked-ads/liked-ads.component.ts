import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-liked-ads',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './liked-ads.component.html',
  styleUrl: './liked-ads.component.scss'
})
export class LikedAdsComponent {}
