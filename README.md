# AngularFire subscribe  & filter

angularfire-subscribe-filter is an example usage of filtering AngularFire results after subscribing to snapshotChanges() of a firebase collection 

## Installation

```bash
angularfire2
angular 6 +
```

## Usage

```
    this.yourService.getSnapshotChanges().subscribe((resObj: ProjectInterface[]) => { 
      this.activeProjects = resObj.filter(project => project.status === 'active' );
      this.completedProjects = resObj.filter(project => project.status === 'completed' );
      this.archivedProjects = resObj.filter(project => project.status === 'archived' );
    });
```

## Contributing
Pull requests & Improvement Suggestions are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)
