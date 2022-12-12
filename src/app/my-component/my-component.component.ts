import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  //internal template
 template:`<h1>{{M1}}</h1>

           <body>
 
               Hey siri , how to know more about Angular and Typescript?
          </body>
 `,


  //External template
  //templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent  {

  M1="Welcome to skillsoft Platform";

  
}


