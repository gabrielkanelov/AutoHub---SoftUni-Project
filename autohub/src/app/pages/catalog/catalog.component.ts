import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { Theme } from '../../core/models/theme.model'; // <-- правилен импорт

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  themes: Theme[] = [];
  error: any;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.getThemes().subscribe({
      next: (themes) => this.themes = themes,
      error: (err) => this.error = err
    });
  }
}