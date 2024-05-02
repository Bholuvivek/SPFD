// ParentComponent.js


import DisableActionButtonsDataGridPro from './DataGridFiltering';
import collegeListresult from './CollegeList.tsx'; // Change to correct import path

const ParentComponent = () => {
  return (
    <div>
      <h1>Your Data Grid</h1>
      <DisableActionButtonsDataGridPro collegeListresult={collegeListresult} /> {/* Make sure prop name matches */}
    </div>
  );
}

export default ParentComponent;
