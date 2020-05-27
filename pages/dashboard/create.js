import React from "react";

import Layout from "layouts/layout"
import DashboardCreate from "components/page_views/dashboard/create"

function Create(props) {
  return (
    <div>
      <DashboardCreate></DashboardCreate>
    </div>
  );
}
Create.Layout = Layout;
export default Create;
