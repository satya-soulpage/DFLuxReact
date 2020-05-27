import React from "react";

// components
import Layout from "layouts/layout";
import Datasource from '../../components/page_views/datasource';

//import CSS
import { SectionHeading } from "styles/theme"

function DatasourcePage(props) {
    return (
        <div>
            <Datasource></Datasource>
        </div>
    );
}

DatasourcePage.Layout = Layout;

export default DatasourcePage;
