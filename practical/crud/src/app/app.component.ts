import { Component } from '@angular/core';
import { ApiService } from './app.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  selectedInventory;
  constructor( private api : ApiService) {
    this.api.getAllInventorys();
    this.selectedInventory= { id:-1, name:'', description:'', unit_price:'', number_of_unit_available:'' }
  }
  getAllInventory= () => {
    this.api.getAllInventorys().subscribe(
      data => {
        this.selectedInventory.data;
      },
      error =>{
        console.log(error);
      }
      );

    }
    inventoryClicked=(inventory) =>{
      this.api.getOneInventory(inventory.id).subscribe(
        data => {
          },
        error =>{
          console.log(error);
        }
      );
    }
    updateInventory= () => {
      this.api.updateInventory(this.selectedInventory).subscribe(
        data => {
          this.api.getAllInventorys();
        },
        error =>{
          console.log(error);
        } 
        );
    }
    createInventory= () => {
      this.api.createInventory(this.selectedInventory).subscribe(
        data => {
         // this.inventory.push(data);
        },
        error =>{
          console.log(error);
        } 
        );
    }
    deleteInventory= () => {
      this.api.deleteInventory(this.selectedInventory.id).subscribe(
        data => {
          this.api.getAllInventorys();
        },
        error =>{
          console.log(error);
        } 
        );
    }
}
