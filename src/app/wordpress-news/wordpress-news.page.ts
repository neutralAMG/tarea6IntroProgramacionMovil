import { Component, inject, OnInit,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonTitle, IonToolbar, IonMenuButton, IonInput, IonItem, IonList , IonLabel ,IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-wordpress-news',
  templateUrl: './wordpress-news.page.html',
  styleUrls: ['./wordpress-news.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, ReactiveFormsModule, FormsModule,IonInput, IonItem, IonList,IonLabel,IonButton , IonCard, IonCardContent, IonCardHeader , IonCardTitle,IonCardSubtitle ]
})
export class WordpressNewsPage implements OnInit {
  siteLogo: string = '';
  news: any[] = [];
  apiUrl: string = 'https://usainbolt.com/wp-json/wp/v2/posts?per_page=3';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getNewsData();
  }

  getNewsData(): void {
    // Obtener las últimas 3 publicaciones y el logo del sitio
    this.httpClient.get('https://usainbolt.com/wp-json/wp/v2/settings').subscribe({
      next: (result: any) => {
        this.siteLogo = result.logo; // URL del logo del sitio
      },
      error: (err) => {
        console.error('Error al obtener el logo:', err);
      }
    });

    // Obtener las publicaciones
    this.httpClient.get(this.apiUrl).subscribe({
      next: (result: any) => {
        this.news = result;
      },
      error: (err) => {
        console.error('Error al obtener las noticias:', err);
      }
    });
  }
}