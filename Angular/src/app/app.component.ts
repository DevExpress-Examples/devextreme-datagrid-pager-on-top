import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import generateData from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';

  allowedPageSizes: number[] = [5, 10, 15];

  pageIndex = 1;

  pageSize = 10;

  itemCount = 0;

  componentWidth = 800;

  dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource({
      store: {
        type: 'array',
        data: generateData(100000),
        key: 'id',
      },
      onLoadingChanged: (isLoading: boolean) => {
        if (!isLoading) {
          this.itemCount = this.dataSource.totalCount();
        }
      },
    });
  }

  onPaginationOptionChanged(e: any): void {
    if (e.name === 'pageIndex' && typeof e.value === 'number') {
      this.pageIndex = e.value;
    } else if (e.name === 'pageSize' && typeof e.value === 'number') {
      this.pageIndex = 1;
      this.pageSize = e.value;
    }
  }

  onGridOptionChanged(e: any): void {
    if (e.fullName && e.fullName.includes('filterValue')) {
      this.pageIndex = 1;
    }
  }
}
