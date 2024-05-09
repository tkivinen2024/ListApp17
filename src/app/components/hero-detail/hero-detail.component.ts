import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})


export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    console.log("----------getHero---------------");
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(parseInt(this.route.snapshot.paramMap.get('id')!, 10));
    var strnum = this.route.snapshot.paramMap.get('id')?.toString();

    var res = strnum?.trim();
    res = res?.replace("'", "");
    res = res?.replace("'", "");
    res = res?.replace("[", "");
    res = res?.replace("]", "");
    console.log(res);
    console.log("----------getHero2-");

    const id = parseInt(res!, 10);
    console.log(id);
    console.log("----------getHero3-");
    console.log(this.heroService.getHero(id));
    console.log("----------getHero4-");

    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);

      
    console.log("----------getHero5-");
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
