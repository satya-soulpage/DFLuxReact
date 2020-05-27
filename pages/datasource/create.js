import React from "react";

import Layout from "layouts/layout";
import DatasourceCreate from '../../components/page_views/datasource/create'
function Create(props) {
    return (
        <div>
            <DatasourceCreate></DatasourceCreate>
        </div>
    );
}

Create.Layout = Layout;

export default Create;
