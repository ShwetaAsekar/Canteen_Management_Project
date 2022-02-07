import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Food } from '../food'
import { FoodService } from '../food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  food: Food = new Food();
  constructor(private foodservice: FoodService, private router: Router, private httpClient: HttpClient) { }

  selectedFile: File; 
  retrievedImage: any;
   base64Data: any; 
   retrieveResonse: any; 
   message: string; 
   imageName: any; 
   public onFileChanged(event: any) {
      this.selectedFile = event.target.files[0];
     }
      onUpload() { 
        console.log(this.selectedFile);
         const uploadImageData = new FormData();
          uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name); 
          this.httpClient.post('http://localhost:8080/upload', uploadImageData, { observe: 'response' })
          .subscribe((response) => { if (response.status === 200) { 
           
             this.message = 'Image uploaded successfully'; 
             alert("success")
            }
             else { 
               this.message = 'Image not uploaded successfully'; 
              } 
            }); 
          }

  ngOnInit(): void {

  }
  onSubmit() {
    // console.log(this.food);


    this.foodservice.addFood(this.food).subscribe(
      data => {
        alert("inside save food")
        console.log(data);

        this.goToFoodList();
      },
      error => console.log(error)
      // alert("error")
    );


  }
  goToFoodList() {
    this.router.navigate(['/foods']);

  }
}

