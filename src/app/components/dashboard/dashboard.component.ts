import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/dashboard.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading: boolean = false;
  error: string = '';
  items: any = {};
  booklist: any = [];
  subject: Subject<any> = new Subject();
  searchResult: any;
  searchText: string = '';
  constructor(public service: DashboardService) { }

  ngOnInit(): void {
    this.getBooks();
    this.Compare();
  }
  getBooks() {
    this.loading = true;
    this.service.getData().subscribe(
      data => {
        this.items = data;
        this.booklist = Object.values(this.items['items']);
        this.searchResult = Object.values(this.items['items']);
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  Compare() {
    this.subject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((datafind: any) => {
      this.searchResult = this.booklist.filter((x: any) => x.volumeInfo.title.toLowerCase().indexOf(datafind) > -1);
      console.log(this.searchResult)
    })
  }
  change(event: any) {
    let name = event;
    console.log(name);
    if (name.length > 2) {
      this.subject.next(name)
    }
    else {
      this.searchResult = this.booklist;
    }
  }
  clearInput(){
    this.searchText = '';
    this.searchResult = this.booklist;
  }
}
