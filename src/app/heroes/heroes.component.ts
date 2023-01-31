import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from '../message.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location} from '@angular/common';
import {HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero[] = []
  // messageService: any;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent : Selected hero id =${hero.id}');
  }
  constructor(private heroService: HeroService, private messageService:MessageService){}
  ngOnInit():void{
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe( heroes=>this.heroes = heroes);

  }

}

