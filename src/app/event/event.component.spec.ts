import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should add click', () => {
    const h1 = de.query(By.css('h1'));
    const button = de.query(By.css('#btnAddClick'));
    button.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.num).toEqual(parseInt(h1.nativeElement.innerText));
  });
});
