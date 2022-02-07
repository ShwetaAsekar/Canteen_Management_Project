import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from './food';
import { Observable } from 'rxjs';
import { FoodDetailsComponent } from './food-details/food-details.component';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  

  private baseUrl:String; 
  private loginUrl:String; 
  // private Url:String;
  // http: any;
   constructor(private httpclient: HttpClient) {
    this.baseUrl='http://localhost:8080/foods';

   }
  getFoodList(): Observable<Food[]> {
	  return this.httpclient.get<Food[]>(`${this.baseUrl}`);
  }
  addFood(food:Food):Observable<object>{
    return this.httpclient.post(`${this.baseUrl}`,food);
  }
  getFoodById(id:number):Observable<Food>{
    return this.httpclient.get<Food>(`${this.baseUrl}/${id}`);
  }
  updateFood(id: number,food:Food):Observable<object>{
    return this.httpclient.put(`${this.baseUrl}/${id}`,food);
  }
  deleteFood(id:number):Observable<object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
 
 
  
}