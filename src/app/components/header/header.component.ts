import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service: DashboardService) { }

  ngOnInit(): void {
  }
  toggle() {
    this.service.toggleMenu = false;
  }
}
