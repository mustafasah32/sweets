import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
              label:'File',
              icon:'pi pi-fw pi-file',
          }
      ];
  }
}
