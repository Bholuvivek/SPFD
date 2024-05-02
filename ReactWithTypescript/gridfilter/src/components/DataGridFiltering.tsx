// DataGridFiltering.js

import { DataGridPro, GridToolbar } from "@mui/x-data-grid-pro";

export default function DisableActionButtonsDataGridPro({ collegeListresult }) { // Fix prop name here
 console.log(collegeListresult);
 
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
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
