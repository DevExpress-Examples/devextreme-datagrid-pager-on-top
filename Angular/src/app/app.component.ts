import { Component, ChangeDetectionStrategy } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import generateData from './data';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxPaginationModule } from 'devextreme-angular/ui/pagination';

@Component({
  selector: 'app-root',
  imports: [DxDataGridModule, DxPaginationModule],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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

  onPageSizeChange(value: number): void {
    this.pageIndex = 1;
    this.pageSize = value;
  }

  onPageIndexChange(value: number): void {
    this.pageIndex = value;
  }

  onGridOptionChanged(e: { fullName?: string }): void {
    if (e.fullName && e.fullName.includes('filterValue')) {
      this.pageIndex = 1;
    }
  }
}
