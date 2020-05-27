import $ from 'jquery';

import {NormalButton} from "../../styles/buttons";


// data source form
import DataSourceForm from "../forms/data-source-form"


function DataSourceCreate(props){

    function testConnection(e){
        if(e.target.id=='test'){
        $("#"+e.target.id).hide();
        $("#success").show();
        $("#fail").hide();
        }else if(e.target.id=='success'){
            $("#"+e.target.id).hide();
            $("#fail").show();
            $("#test").hide();
        }else{
            $("#test").hide();
            $("#fail").show();
            $("#success").hide();
            }
      }

    return(
        <div>
            <div className="create-img"> <img src="/static/images/data-src-connecter.png"></img></div>
           <h3 className="h3-tags">Configure Connector </h3>
           <DataSourceForm/>
           <NormalButton color="#e5eaef" margin="1px 1px 1px 192px">Configure Connector </NormalButton>
            <div className="test-btn">
           <NormalButton color="#e5eaef" margin="3px 1px 1px 387px" id="test" onClick={testConnection}>Test Connection </NormalButton>
           <NormalButton color="#40DD7F" margin="1px 1px 1px 387px" id="success" display="none" onClick={testConnection}><img src="/static/images/suceess-btn.png"></img> </NormalButton>
           <NormalButton color="red" bgcolor="#FFF" margin="1px 1px 1px 387px" id="fail" display="none" onClick={testConnection}>Connection Failed </NormalButton>
           </div>
        <style jsx global>{`
        .test-btn{
            argin-left: 50%;
            margin-top: -6%;
        }
        .create-img{
            margin-left: 32%;
        }
        .h3-tags{
            margin-left:37%
        }
        `}</style>
        </div>
    )
}

export {DataSourceCreate};