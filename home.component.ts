import { Component, OnInit } from '@angular/core';
import { ProjectService, ProjectInterface } from '@app/services/project.service';
import { ProjectInterface } from '@app/data-models/project.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeProjects: Array<ProjectInterface>;
  completedProjects: Array<ProjectInterface>;
  archivedProjects: Array<ProjectInterface>;

  constructor(
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.getActiveProjects();
  }

  getProjects() {
    this.projectService.getSnapshotChanges().subscribe((resObj: ProjectInterface[]) => { 
      this.activeProjects = resObj.filter(project => project.status === 'active' );
      this.completedProjects = resObj.filter(project => project.status === 'completed' );
      this.archivedProjects = resObj.filter(project => project.status === 'archived' );
    });
  }
}
