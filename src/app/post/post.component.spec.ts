import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumService } from '../service/sum.service';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let SumService: SumService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
      providers: [SumService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('should have title ',()=>{
    const title=document.getElementById(`title`).innerHTML
    expect(title).toEqual(`Hello World`)
  })

});
