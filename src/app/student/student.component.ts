import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',

  //External Style
  //styleUrls: ['./student.component.css']
  //Internal style in the component file
  styles:[`table{
    color: brown;
    font-family: 'Courier New', Courier, monospace;
    font-size: large;
    border-collapse: collapse;
}

td{
    border: 1px solid black;
}`]
})
export class StudentComponent {

   Name:string="Dipali";
   Email:string="Dipali123@gmail.com";

}
