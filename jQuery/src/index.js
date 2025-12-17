$(() => {
  let allowedPageSizes = [5, 10, 15];
  let pageSize = 10;
  let componentWidth = 800;
  
  const dataSource = new DevExpress.data.DataSource({
    store: generateData(100000),
    paginate: true,
    onLoadingChanged: (e) => {
      if(!e){
        pager.option("itemCount", dataGrid.totalCount());
      }
    }
  });
  
  const pager = $("#pager").dxPagination({
    width: componentWidth,
    allowedPageSizes: allowedPageSizes,
    pageIndex: 1,
    pageSize: pageSize,
    showNavigationButtons: true,
    showInfo: true,
    onOptionChanged: (e) => {     
      if(e.name == "pageIndex"){
        dataGrid.pageIndex(e.value-1);
      }else if(e.name == "pageSize"){
        dataGrid.pageSize(e.value);
      }
    }
  }).dxPagination("instance");
  
  const dataGrid = $('#gridContainer').dxDataGrid({
    onOptionChanged: (e) => {            
      if(e.fullName.includes("filterValue")){
        pager.option("pageIndex", 1);
      }
    },
    width: componentWidth,
    dataSource: dataSource,
    keyExpr: 'id',
    showBorders: true,
    filterRow:{
      visible: true
    },
    scrolling: {
      rowRenderingMode: 'virtual',
    },
    paging: {
      pageSize: pageSize,
    },
    pager: {
      visible: false,
      showInfo: true
    },
  }).dxDataGrid('instance');
});


let s = 123456789;
function random() {
  s = (1103515245 * s + 12345) % 2147483647;
  return s % (10 - 1);
}

function generateData(count) {
  let i;
  const surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Harris', 'Clark', 'Allen', 'Scott', 'Carter'];
  const names = ['James', 'John', 'Robert', 'Christopher', 'George', 'Mary', 'Nancy', 'Sandra', 'Michelle', 'Betty'];
  const gender = ['Male', 'Female'];
  const items = [];
  const startBirthDate = Date.parse('1/1/1975');
  const endBirthDate = Date.parse('1/1/1992');

  for (i = 0; i < count; i += 1) {
    const birthDate = new Date(startBirthDate + Math.floor(
      (random() * (endBirthDate - startBirthDate)) / 10,
    ));
    birthDate.setHours(12);

    const nameIndex = random();
    const item = {
      id: i + 1,
      firstName: names[nameIndex],
      lastName: surnames[random()],
      gender: gender[Math.floor(nameIndex / 5)],
      birthDate,
    };
    items.push(item);
  }  
  return items;
}
