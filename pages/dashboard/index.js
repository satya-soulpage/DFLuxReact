import React from "react";
// layouts
import Layout from "layouts/layout";
import DashboardHome from '../../components/page_views/dashboard'
function DashboardPage(props) {
  return (
    <div>
      <DashboardHome></DashboardHome>
    </div>
  );
}

DashboardPage.Layout = Layout;

export default DashboardPage;
