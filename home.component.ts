import { Component, OnInit } from '@angular/core';
import { ProjectService, ProjectInterface } from '@app/services/project.service';
import { ProjectInterface } from '@app/data-models/project.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: Array<ProjectInterface>
  

  constructor(
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.getActiveProjects();
  }

  getActiveProjects() {
    this.projectService.getSnapshotChanges().subscribe((object: ProjectInterface[]) => { 
      this.projects = object.filter(project => project.status === 'active' );
    });
  }
}
