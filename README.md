# AngularFire subscribe  & filter

angularfire-subscribe-filter is an example usage of filtering AngularFire results after subscribing to snapshotChanges() of a firebase collection.

## Installation

```bash
angularfire2
angular6+
RxJS6+
```

## Usage
Usefull when you a already have Range filters or an orderBy clause on the on the original CollectionReference.

```
    this.yourService.getSnapshotChanges().subscribe((resObj: YourInterface[]) => { 
      this.activeItem = resObj.filter(item => item.status === 'active' );
      this.completedItem = resObj.filter(item => item.status === 'completed' );
      this.archivedItem = resObj.filter(item => item.status === 'archived' );
    });
```

## Contributing
Pull requests & Improvement Suggestions are welcome

AppAgility Ltd https://appagility.co.nz

## License
[MIT](https://choosealicense.com/licenses/mit/)
