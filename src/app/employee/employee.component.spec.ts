import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';

import { EmployeeComponent } from './employee.component';

  describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthService;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [AuthService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.get(AuthService);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('salery is added', () => {
    component.onClick();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salarySlip);
  });
});
