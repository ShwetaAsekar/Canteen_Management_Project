import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {
  id: number;
  food:Food=new Food();
  
  constructor(private route:ActivatedRoute,private router:Router,private foodservice:FoodService) { }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    this.foodservice.getFoodById(this.id).subscribe(data =>{
      this.food=data;
    }, error =>console.log(error));
    }
    onSubmit(){
       this.foodservice.updateFood(this.id,this.food).subscribe(data =>{
         this.goToFoodList();
       }
       , error => console.log(error));
       
     }
     goToFoodList(){
      this.router.navigate(['/foods']);
     }
}
