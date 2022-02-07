import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  id:number;
  food:Food;
  selectedFile: File; 
  retrievedImage: any;
   base64Data: any; 
   retrieveResonse: any; 
   message: string; 
   imageName: any; 
  constructor(private route:ActivatedRoute,private foodservice:FoodService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.food=new Food();
    this.foodservice.getFoodById(this.id).subscribe(data =>{
      this.food=data;
    });
  }

}
