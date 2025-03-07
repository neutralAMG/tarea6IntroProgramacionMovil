import { Component, inject, OnInit,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonTitle, IonToolbar, IonMenuButton, IonInput, IonItem, IonList , IonLabel ,IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-name-to-age',
  templateUrl: './name-to-age.page.html',
  styleUrls: ['./name-to-age.page.scss'],
  standalone: true,
  providers: [{provide: HttpClient}],
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, ReactiveFormsModule, FormsModule,IonInput, IonItem, IonList,IonLabel,IonButton , IonCard, IonCardContent, IonCardHeader , IonCardTitle ]
})
export class NameToAgePage implements OnInit {

  Name = new FormControl('');
  Result: number | null = null;
  constructor(private httpClient: HttpClient ) { }

 
  ngOnInit() {
  }
  getAge(): void{

    this.httpClient.get<apiResult>("https://api.agify.io"
    ,{params:{name: this.Name.value ?? ""}})
    .subscribe({
      next: (result) =>{
        this.Result = result.age
      },error: (err) =>{
        console.log(err);
        
      }
    })
  }

}

type apiResult ={
  age: number,
  probability: number
}