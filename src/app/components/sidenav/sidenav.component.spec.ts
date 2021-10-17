import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { DashboardService } from 'src/app/core/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavComponent ],
      imports:[HttpClientModule,MatTooltipModule],
      providers: [
        {provide:DashboardService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
