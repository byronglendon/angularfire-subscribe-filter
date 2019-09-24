import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProjectInterface } from '@app/data-models/project.model';

export interface ProjectId extends ProjectInterface {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Observable<ProjectId[]>; // type interface ProjectId
  project: Observable<ProjectInterface>;
  private projectCollection: AngularFirestoreCollection<ProjectInterface>; // type interface ProjectInterface
  private projectDoc: AngularFirestoreDocument<ProjectInterface>;

  constructor(
              private readonly afs: AngularFirestore, // read only
              private firestore: AngularFirestore // read & write
            ) {
                this.projectCollection = this.afs.collection<ProjectInterface>('projects');
              }

  getSnapshotChanges(): Observable<ProjectInterface[]> {
    return (this.projects = this.projectCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as ProjectInterface;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    ));
  }
  
  getValueChanges(id: string): Observable<any> {
    return this.projectCollection
      .doc<ProjectInterface>(id)
      .valueChanges()
      .pipe(
        take(1),
        map(fields => {
          return fields;
        })
      );
  }

  addProject(projectData: ProjectInterface) {
    return this.projectCollection.add(projectData);
  }

  editProject(id: string, data: any) {
    this.projectDoc = this.afs.doc<ProjectInterface>('projects/' +id);
    this.projectDoc.update(data);
    return this.project = this.projectDoc.valueChanges();
  }

  delete(data: any) {
    return this.firestore
      .collection('projects')
      .doc(data.payload.doc.id)
      .delete();
  }
}
