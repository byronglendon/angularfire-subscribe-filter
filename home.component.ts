import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TodoModalService } from '@app/services/todo-modal.service';
import { SnagModalService } from '@app/services/snag-modal.service';
import { CredentialsService } from './../core/authentication/credentials.service';
import { ProjectService, ProjectInterface } from '@app/services/project.service';
// import { Project } from '@app/data-models/project.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public innerWidth: any;
  public styleWidth: any;
  public subtractVal = 720;
  isLoading = false;
  credentials: any;
  uid: string;
  profile: any;
  // Projects
  project$: Array<ProjectInterface>
  projects: any; // Rather Use This?
   
  // ToDO
  taskList = [
    'Call 24/7 Queen Street 5/8/2019',
    'St Marys Rd, Ponsonby 5/8/2019',
    'The Auckland Domain, Parnell 5/8/2019',
    'Princes St, Auckland CBD 5/8/2019',
    'Wellesley St E, Auckland CBD 5/8/2019',
    '23 Tamaki Dr, Orakei, Auckland 5/8/2019',
    'Motions Rd, Auckland 1022 5/8/2019',
    'Aotea Square Mayoral Dr, Auckland 5/8/2019'
  ];

  constructor(
    private todoModalService: TodoModalService,
    private snagModalService: SnagModalService,
    public credentialsService: CredentialsService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    // this.projects = this.projectService.getprojectsByStatus('active');
    // this.projects = this.projectService.getProjects();
    this.getActiveProjects();
    this.getProjects();
    this.innerWidth = window.innerWidth;
    this.styleWidth = innerWidth - this.subtractVal;
    this.credentials = this.credentialsService.credentials;
    this.uid = this.credentialsService.credentials.uid;
    // console.log('UID:' + this.uid);
    // this.profileService.getValueChanges(this.uid).subscribe(res => {
    //   console.log('Profile:' + res);
    // });
  }

  // getActiveProjects() {
  //   this.projectService.getSnapshotChanges().subscribe(object => { 
  //     object.filter(project => project.status === 'active' )
  //           .map(res => { 
  //             console.log(res);
  //             // this.projects = res;
  //           });
  //   });
  // }

  getActiveProjects() {
    this.projectService.getSnapshotChanges().subscribe((object: ProjectInterface[]) => { 
      this.projects = object.filter(project => project.status === 'active' );
    });
  }

  getProjects() {
    this.projectService.getSnapshotChanges().subscribe(res => {
      // console.log(res);
      this.project$ = res;
    });
  }

  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.styleWidth = innerWidth - this.subtractVal;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }

  openTodoModal() {
    this.todoModalService.openModal();
  }

  openSnagModal() {
    this.snagModalService.openModal();
  }

  loaderImplementation() {
    // export...
    // quote: string | undefined;
    // this.isLoading = true;
    // this.quoteService
    //   .getRandomQuote({ category: 'dev' })
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((quote: string) => {
    //     this.quote = quote;
    //   });
  }
}
