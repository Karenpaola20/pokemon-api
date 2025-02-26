import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  standalone: false,
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {
  pokemon!: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.httpService.getPokemonDetails(name).subscribe(
        (data: Pokemon) => {
          this.pokemon = data;
        },
        (error) => {
          console.error('Error fetching Pokémon details:', error);
        }
      );
    }
  }
}