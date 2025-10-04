import { Component } from '@angular/core';
import { BigCardComponent } from "../../component/big-card/big-card.component";

@Component({
  selector: 'app-home',
  imports: [BigCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
