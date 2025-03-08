import { Component, inject, OnInit,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonTitle, IonToolbar, IonMenuButton, IonInput, IonItem, IonList , IonLabel ,IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, ReactiveFormsModule, FormsModule,IonInput, IonItem, IonList,IonLabel,IonButton , IonCard, IonCardContent, IonCardHeader , IonCardTitle,IonCardSubtitle ]
})
export class PokemonPage implements OnInit {
  pokemonData: any = null;
  pokemonName: string = 'lucario';
  url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getPokemonData()
  }

  getPokemonData(): void {
    const fullUrl = `${this.url}${this.pokemonName.toLowerCase()}`;
    this.httpClient.get(fullUrl).subscribe({
      next: (result) => {
        this.pokemonData = result;
      },
      error: (err) => {
        console.error('Error al obtener los datos del Pokémon:', err);
      }
    });
  }
}
