import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  reset(): void {
    // Estas instrucciones están fuera del ciclo de detección de angular
    // Este solo busca el primero, de querer todos sería querySelectorAll
    // document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
    // document.querySelectorAll('h1)!.foreach(element => {
    //  element.innerHTML = '<h1>Desde Angular</h1>'
    // })
    this.name = 'ironman';
    this.age = 45;
  }
}
