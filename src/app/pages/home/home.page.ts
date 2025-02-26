import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  pokemons: any[] = []; 
  filteredPokemons: any[] = []; 
  searchTerm: string = ''; 

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getPokemonList().subscribe((data: any) => {
      this.pokemons = data.results; 
      this.filteredPokemons = [...this.pokemons]; 
    });
  }

  
  filterPokemons() {
    this.filteredPokemons = this.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}