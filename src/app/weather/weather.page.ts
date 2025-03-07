import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonTitle, IonToolbar, IonMenuButton, IonInput, IonItem, IonList , IonLabel ,IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  providers:[{provide:HttpClient}],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, ReactiveFormsModule, FormsModule,IonInput, IonItem, IonList,IonLabel,IonButton , IonCard, IonCardContent, IonCardHeader , IonCardTitle,IonCardSubtitle ]
})
export class WeatherPage implements OnInit {

  url = `https://wttr.in/Santo+Domingo?format=j1`;
  data: apiReult | null = null
  weatherData: any
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.httpClient.get<wholeresult>(this.url).subscribe({
      next: (result) => {
        this.weatherData = result.current_condition;
        this.data = this.weatherData[0]
      },
      error: (err) => {
        console.error('Error al obtener el clima:', err);
      }
    });
  }
}
type wholeresult ={
  current_condition: apiReult
}
type apiReult ={
  observation_time: string,
  temp_C: string,
  temp_F: string,
  FeelsLikeC: string,
  FeelsLikeF: string,
  weatherDesc: string,
  cloudcover: string,
  windspeedKmph: string,
  humidity: string,
  pressure: string
}