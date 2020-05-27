import React from "react";

// components
import Layout from "layouts/layout";
import Model from '../../components/page_views/models';

//import CSS
import { SectionHeading } from "styles/theme"

function ModelPage(props) {
    return (
        <div>
            <Model></Model>
        </div>
    );
}

ModelPage.Layout = Layout;

export default ModelPage;
