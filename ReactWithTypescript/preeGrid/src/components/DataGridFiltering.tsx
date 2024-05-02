// DataGridFiltering.js

import { DataGrid, GridToolbar } from '@mui/x-data-grid'

export default function DisableActionButtonsDataGridPro({ collegeListresult }) { // Fix prop name here
 console.log(collegeListresult);
 
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={collegeListresult}
        columns={[
          { field: 'Institute', headerName: 'Institute' },
          { field: 'AcademicProgramName', headerName: 'Academic Program Name' },
          { field: 'Quota', headerName: 'Quota' },
          { field: 'Gender', headerName: 'Gender' },
          { field: 'ClosingRank', headerName: 'Closing Rank' },
          { field: 'CourseTime', headerName: 'Course Time' },
          { field: 'DegreeType', headerName: 'Degree Type' },
          { field: 'State', headerName: 'State' },
        ]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          filterPanel: {
            disableAddFilterButton: true,
            disableRemoveAllButton: true,
          },
        }}
      />
    </div>
  );
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

// export default function QuickFilteringGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Employee',
//     visibleFields: VISIBLE_FIELDS,
//     rowLength: 100,
//   });

  // Otherwise filter will be applied on fields such as the hidden column id
//   const columns = React.useMemo(
//     () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
//     [data.columns],
//   );

//   return (
//     <Box sx={{ height: 400, width: 1 }}>
//       <DataGrid
//         {...data}
//         disableColumnFilter
//         disableColumnSelector
//         disableDensitySelector
//         columns={columns}
//         slots={{ toolbar: GridToolbar }}
//         slotProps={{
//           toolbar: {
//             showQuickFilter: true,
//           },
//         }}
//       />
//     </Box>
//   );
// }

