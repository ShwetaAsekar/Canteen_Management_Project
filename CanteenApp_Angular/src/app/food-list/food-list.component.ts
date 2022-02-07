import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Food[];
  selectedFile: File; 
  retrievedImage: any;
   base64Data: any; 
   retrieveResonse: any; 
   message: string; 
   imageName: any; 
  constructor(private foodservice: FoodService, private router: Router, private httpClient: HttpClient) { }
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.   
     this.httpClient.get('http://localhost:8080/get/' + this.imageName).subscribe( res => {
       this.retrieveResonse = res;this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      } );
    }
  ngOnInit(): void {
    this.getFood();
  }
  private getFood() {
    this.foodservice.getFoodList().subscribe(data => {
      this.foods = data;
    });
  }
  foodDetails(id: number) {
    this.router.navigate(['food-details', id]);
  }
  updateFood(id: number) {
    this.router.navigate(['update-food', id]);
  }
  deleteFood(id: number) {
    this.foodservice.deleteFood(id).subscribe(data => {
      console.log(data);
      this.getFood();
    })
  }

 }
