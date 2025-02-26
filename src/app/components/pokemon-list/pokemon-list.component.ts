import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getPokemonList().subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }
}