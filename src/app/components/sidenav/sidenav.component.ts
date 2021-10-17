import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/dashboard.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(public service: DashboardService) { }

  ngOnInit(): void {
  }
  menuitem = [
    {
      icon: '../../../assets/icon.PNG', name: 'Content management', showsubmenu: false, route: '',
      childcontent: [
        { icon: '../../../assets/icon.PNG', name: 'management 1' },
        { icon: '../../../assets/icon.PNG', name: 'management 2' },
        { icon: '../../../assets/icon.PNG', name: 'management 3' },
        { icon: '../../../assets/icon.PNG', name: 'management 4' },
      ],
    },
    { icon: '../../../assets/icon1.PNG', name: 'Courses', showsubmenu: false, childcontent: null , route : '/Courses'},
  ]
  toggle() {
    this.service.toggleMenu = !this.service.toggleMenu;
  }
  menuselect(menu:any){
    console.log(menu);
    if(menu.showsubmenu){
      menu.showsubmenu = false;
    }
    else{
      menu.showsubmenu = true;
    }

  }
  submenu(submenu:any,event:any){
    console.log(submenu);
    event.stopPropagation();
  }
}
