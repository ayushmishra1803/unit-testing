import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { EmployeeComponent } from './employee/employee.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, EventComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
