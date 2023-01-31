import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
  createDb(){
    const heroes = [
    {id:'1', name:"Nalenyi",age:20},  
    {id:'1', name:"Jane",age:21},
    {id:'1', name:"Faith",age:22},
    {id:'1', name:"Lisa",age:22},
    {id:'1', name:"Gumato",age:24},
    {id:'1', name:"Ochwada",age:20},
    {id:'1', name:"Winnie",age:22},
    {id:'1', name:"Chirii",age:22},
    {id:'1', name:"Julie",age:23},
    {id:'1', name:"Respah",age:25},
    {id:'1', name:"Mutua",age:22},
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
