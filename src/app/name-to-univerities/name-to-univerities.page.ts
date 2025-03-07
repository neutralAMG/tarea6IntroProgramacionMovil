import { Component, inject, OnInit,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonTitle, IonToolbar, IonMenuButton, IonInput, IonItem, IonList , IonLabel ,IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-name-to-univerities',
  templateUrl: './name-to-univerities.page.html',
  styleUrls: ['./name-to-univerities.page.scss'],
  standalone: true,
  providers: [{
    provide: HttpClient
  }],
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, ReactiveFormsModule, FormsModule,IonInput, IonItem, IonList,IonLabel,IonButton , IonCard, IonCardContent, IonCardHeader , IonCardTitle ]
})
export class NameToUniveritiesPage implements OnInit {

  Name = new FormControl('');
  Result: Array<apiResult> | null = null;
  constructor(private httpClient: HttpClient ) { }

  ngOnInit() {
  }
  getUniversities(): void{

    this.httpClient.get<Array<apiResult>>("http://universities.hipolabs.com/search"
    ,{params:{country: this.Name.value ?? ""}})
    .subscribe({
      next: (result) =>{
        this.Result = result
      },error: (err) =>{
        console.log(err);
        
      }
    })
  }

}

type apiResult ={
  domains: Array<string>,
  web_pages: Array<string>,
  alpha_two_code: string,
  country: string,
  name: string,
  province: string
}
