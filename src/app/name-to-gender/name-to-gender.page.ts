import { Component, inject, OnInit,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonTitle, IonToolbar, IonMenuButton, IonInput, IonItem, IonList , IonLabel ,IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-name-to-gender',
  templateUrl: './name-to-gender.page.html',
  styleUrls: ['./name-to-gender.page.scss'],
  standalone: true,
  providers: [{
    provide: HttpClient
  }],
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, ReactiveFormsModule, FormsModule,IonInput, IonItem, IonList,IonLabel,IonButton , IonCard, IonCardContent, IonCardHeader , IonCardTitle ]
})
export class NameToGenderPage implements OnInit {

  Name = new FormControl('');
  Result: string | null = null;
  constructor(private httpClient: HttpClient ) { }

  ngOnInit() {
  }

  getName(): void{

    this.httpClient.get<apiResult>("https://api.genderize.io"
    ,{params:{name: this.Name.value ?? ""}})
    .subscribe({
      next: (result) =>{
        this.Result = result.gender
      },error: (err) =>{
        console.log(err);
        
      }
    })
  }

}

type apiResult ={
  gender: string,
  probability: number
}
