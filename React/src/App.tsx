import { useCallback, useMemo, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DataGrid, {
  Column,
  FilterRow,
  Paging,
  Scrolling,
  Pager as GridPager,
} from 'devextreme-react/data-grid';
import Pagination from 'devextreme-react/pagination';
import { DataSource } from 'devextreme/common/data';
import generateData from './data.tsx';

const allowedPageSizes = [5, 10, 15];
const initialPageSize = 10;
const componentWidth = 800;

function App(): JSX.Element {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);
  const [itemCount, setItemCount] = useState(0);
  const dataSource = useMemo(
    () => new DataSource({
      store: {
        type: 'array',
        data: generateData(100000),
        key: 'id',
      },
      onLoadingChanged: (isLoading: boolean) => {
        if (!isLoading) {
          setItemCount(dataSource.totalCount());
        }
      },
    }),
    [],
  );

  const handlePaginationOptionChanged = useCallback((e: any) => {
    if (e.name === 'pageIndex') {
      setPageIndex(e.value);
    } else if (e.name === 'pageSize') {
      setPageIndex(1);
      setPageSize(e.value);
    }
  }, []);

  const handleGridOptionChanged = useCallback((e: { fullName?: string }) => {
    if (e.fullName?.includes('filterValue')) {
      setPageIndex(1);
    }
  }, []);

  return (
    <div className="main">
      <Pagination
        width={componentWidth}
        allowedPageSizes={allowedPageSizes}
        pageIndex={pageIndex}
        itemCount={itemCount}
        pageSize={pageSize}
        showNavigationButtons={true}
        showInfo={true}
        onOptionChanged={handlePaginationOptionChanged}
      />
      <div style={{ maxHeight: 800, marginTop: 16 }}>
        <DataGrid
          dataSource={dataSource}
          showBorders={true}
          width={componentWidth}
          onOptionChanged={handleGridOptionChanged}
        >
          <FilterRow visible={true} />
          <Scrolling rowRenderingMode="virtual" />
          <Paging pageSize={pageSize} pageIndex={pageIndex - 1} />
          <GridPager visible={false} />
          <Column dataField="firstName" caption="First Name" />
          <Column dataField="lastName" caption="Last Name" />
          <Column dataField="gender" caption="Gender" />
          <Column dataField="birthDate" caption="Birth Date" dataType="date" />
        </DataGrid>
      </div>
    </div>
  );
}

export default App;
