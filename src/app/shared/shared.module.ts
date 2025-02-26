import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from '../components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PokemonCardComponent,
    PokemonDetailsComponent,
    PokemonListComponent,
  ], 
  
})
export class SharedModule {}