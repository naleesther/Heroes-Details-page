import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {catchError, tap} from 'rxjs/operators';
import { HEROES } from './mock-heroes';
import {Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpContext, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  httpOptions?: { headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined; context?: HttpContext | undefined; observe?: "body" | undefined; params?: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[]; } | undefined; reportProgress?: boolean | undefined; responseType: "arraybuffer"; withCredentials?: boolean | undefined; };
  
  
  // getHero(id: number) {
  // }
  getHeroes():Observable <Hero[]>{
    const heroes =of(HEROES);
    this.messageService.add('Heroservice : fetched heroes');
    return heroes;
  }
  /** GET heroes from the server */
// getHeroes(): Observable<Hero[]> {
//   return this.http.get<Hero[]>(this.heroesUrl)
// }
  gethero(id:number): Observable <Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add('Heroservice : fetched heroes id=${id}');
    return of(hero)
  }
  constructor(private messageService: MessageService, private http:HttpClient) { };
  private log(message:string):any{
    this.messageService.add(`Heroservice:${message}`)
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_=> this.log(`fetched hero id = ${"id"}`)),
          catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  private handleError <T>(operation = 'operations',result?:T) {
    return(error:any):Observable<T> =>{
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }
  updateHero(hero:Hero):Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions!).pipe(
      tap(_=>this.log('updated hero id=${hero.id}'))
    )
 }
 
 private heroesUrl = 'api/heroes';
}
  

