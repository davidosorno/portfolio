import { Component, OnInit } from '@angular/core';

// Call Javascript function
declare function initSwiper(): any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initSwiper();
  }
}
