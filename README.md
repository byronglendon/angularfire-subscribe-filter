# AngularFire subscribe  & filter

angularfire-subscribe-filter is an example usage of filtering AngularFire results after subscribing to snapshotChanges() of a firebase collection 

## Installation

```bash
angularfire2
angular 6 +
```

## Usage

```
    this.yourService.getSnapshotChanges().subscribe((resObj: YourInterface[]) => { 
      this.activeItem = resObj.filter(item => item.status === 'active' );
      this.completedItem = resObj.filter(item => item.status === 'completed' );
      this.archivedItem = resObj.filter(item => item.status === 'archived' );
    });
```

## Contributing
Pull requests & Improvement Suggestions are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)
