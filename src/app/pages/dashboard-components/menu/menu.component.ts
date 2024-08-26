import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [

    {
      id: 'dashboard',
      titre: 'Simulateur',
      icon: 'bi bi-calculator-fill',
      url: ''
    },
    {
      id: 'statistique',
      titre: 'Statistique',
      icon: 'bi bi-bar-chart-line-fill',
      url: 'articles',
      sousMenu: [
        {
          id: 'article-s1',
          titre: 'Stat 1',
          icon: 'bi bi-boxes',
          url: 'articles'
        },
        {
          id: 'article-s2',
          titre: 'Stat 2',
          icon: 'fab fa-stack-overflow',
          url: '/mvtstk'
        }
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }
}