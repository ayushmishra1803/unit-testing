import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  constructor(private _authService: AuthService) {
    this._authService.authenciated();
  }
  salarySlip: string = '';

  ngOnInit(): void {}
  onClick() {
    this.salarySlip = this._authService.getsalarySlip();
  }
}
