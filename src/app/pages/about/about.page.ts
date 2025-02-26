import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  standalone: false,
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {
  pokemons: any[] = []; 

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getPokemonList().subscribe(
      (data: any) => {
        this.pokemons = data.results; 
        console.log('Pokémons:', this.pokemons); 
      },
      (error) => {
        console.error('Error fetching Pokémon list:', error); 
      }
    );
  }
}