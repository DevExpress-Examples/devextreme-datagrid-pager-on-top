<script setup lang="ts">
import { ref } from 'vue';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DataSource from 'devextreme/data/data_source';
import DxPagination from 'devextreme-vue/pagination';
import DxDataGrid, {
  DxColumn,
  DxFilterRow,
  DxScrolling,
  DxPaging,
  DxPager,
  type DxDataGridTypes,
} from 'devextreme-vue/data-grid';
import generateData from '../data';


const componentWidth = 800;
const allowedPageSizes = [5, 10, 15];

const pageIndex = ref(1);
const pageSize = ref(10);
const itemCount = ref(0);

const dataSource = new DataSource({
  store: {
    type: 'array',
    data: generateData(100000),
    key: 'id',
  },
  onLoadingChanged(isLoading) {
    if (!isLoading) {
      itemCount.value = dataSource.totalCount();
    }
  },
});

function onPaginationOptionChanged(e:any) {
  if (e.name === 'pageIndex' && typeof e.value === 'number') {
    pageIndex.value = e.value;
  } else if (e.name === 'pageSize' && typeof e.value === 'number') {
    pageIndex.value = 1;
    pageSize.value = e.value;
  }
}

function onGridOptionChanged(e:DxDataGridTypes.OptionChangedEvent) {
  if (e.fullName && e.fullName.includes('filterValue')) {
    pageIndex.value = 1;
  }
}
</script>

<template>
  <div class="main">
    <DxPagination
      :width="componentWidth"
      :allowed-page-sizes="allowedPageSizes"
      :page-index="pageIndex"
      :item-count="itemCount"
      :page-size="pageSize"
      :show-navigation-buttons="true"
      :show-info="true"
      @option-changed="onPaginationOptionChanged"
    />

    <div style="max-height: 800px; margin-top: 16px;">
      <DxDataGrid
        :data-source="dataSource"
        :show-borders="true"
        :width="componentWidth"
        @option-changed="onGridOptionChanged"
      >
        <DxFilterRow :visible="true"/>
        <DxScrolling row-rendering-mode="virtual"/>
        <DxPaging
          :page-size="pageSize"
          :page-index="pageIndex - 1"
        />
        <DxPager :visible="false"/>

        <DxColumn
          data-field="firstName"
          caption="First Name"
        />
        <DxColumn
          data-field="lastName"
          caption="Last Name"
        />
        <DxColumn
          data-field="gender"
          caption="Gender"
        />
        <DxColumn
          data-field="birthDate"
          caption="Birth Date"
          data-type="date"
        />
      </DxDataGrid>
    </div>
  </div>
</template>
