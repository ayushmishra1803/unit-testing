import { Component, OnInit } from '@angular/core';
import { SumService } from '../service/sum.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private service:SumService) {}
  title="Hello World"

  ngOnInit(): void {}
}

/*
Angular provide us jasmine and karma for unit testing,
command to run test cases is ng test,
jest cypress
*/
