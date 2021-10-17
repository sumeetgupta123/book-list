import { Component } from '@angular/core';
import { DashboardService } from './core/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'books-list';
  constructor(public service : DashboardService) { }

}
