import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROs } from '../mock-heroes';
import { Hero } from './hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //heroes = HEROs
  selectedHero?: Hero;
  heroes: Hero[] = [];
  
  constructor(private HeroService: HeroService, private messaageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero):void{
    this.selectedHero =  hero;
    this.messaageService.add(`HeroesComponet: selected hero id= ${hero.id}`)
  }
getHeroes():void {
  this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes);
}

}
