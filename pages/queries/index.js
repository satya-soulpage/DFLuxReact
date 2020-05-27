import React from "react";

// components
import Layout from "layouts/layout";
import Queries from '../../components/page_views/queries';

//import CSS
import { SectionHeading } from "styles/theme"

function QueriesPage(props) {
    return (
        <div>
            <Queries></Queries>
        </div>
    );
}

QueriesPage.Layout = Layout;

export default QueriesPage;
