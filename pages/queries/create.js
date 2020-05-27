import React from "react";

// components
import Layout from "layouts/layout";
import QueryCreate from "../../components/page_views/queries/create"

function QueryCreatePage(props){
    return (
        <div>
        <QueryCreate></QueryCreate>
        </div>
    )
}

QueryCreatePage.Layout = Layout;
export default QueryCreatePage;