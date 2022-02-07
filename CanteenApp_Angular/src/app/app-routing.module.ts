import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent} from './food-list/food-list.component';
import { AddFoodComponent} from './add-food/add-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'foods',component:FoodListComponent},
{path:'add-food',component:AddFoodComponent},
{path: '',redirectTo:'home',pathMatch: 'full'},
{path:'update-food/:id', component:UpdateFoodComponent},
{path:'food-details/:id',component:FoodDetailsComponent},
{path:'login',component:LoginComponent}




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
