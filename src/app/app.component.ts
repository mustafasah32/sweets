import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CakesMenuService } from './cakes/cakes-service/cakes-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  menu: MenuItem[]=[];


  title = 'sweets';

  ngOnInit() {
      this.menu = [
          {
              label:'Enter A Cake',
              icon:'pi pi-fw pi-send',
              command:()=>{
                this.cakesMenuService.showEnterCake.next();
              },
          }
      ];
  }

  constructor(
    private cakesMenuService: CakesMenuService) { }
}
