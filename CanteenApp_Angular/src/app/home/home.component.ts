import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm:String;
  food:Food[];
  constructor(private route:ActivatedRoute,private foodservice:FoodService) { }

  ngOnInit(): void {
  
  }

}
