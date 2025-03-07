import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-country-nameo-flag',
  templateUrl: './country-nameo-flag.page.html',
  styleUrls: ['./country-nameo-flag.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CountryNameoFlagPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
