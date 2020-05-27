import Modal from 'react-modal';

import {DatasrcCreateCard} from "../cards/ColorCard";
import {NormalButton} from "../../styles/buttons";

// create data source form 
import {DataSourceCreate} from "./data-src-create"

const dataSrcArray = [{"name":"PostgreSQL"},{"name":"PostgreSQL"},{"name":"PostgreSQL"},{"name":"PostgreSQL"},
{"name":"PostgreSQL"},{"name":"PostgreSQL"},{"name":"PostgreSQL"},{"name":"PostgreSQL"}];


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '85%',
        width: '60%'
    }
};

function DataSrcConnect(props){
// config connecter

const [modalIsOpen2, setIsOpen2] = React.useState(false);
function openModal2() { 
    setIsOpen2(true);
}

function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
}

function closeModal2() {
    setIsOpen2(false);
}

    return(
        <div>

<div>
                <Modal
                    isOpen={modalIsOpen2}
                    onAfterOpen={afterOpenModal2}
                    onRequestClose={closeModal2}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button className="create-btn" onClick={closeModal2}>close</button>
                    <h2 className="h2-tag">Create New Datasource </h2>
                    <hr></hr>
                    <DataSourceCreate></DataSourceCreate>
                    {/* <NormalButton className="config-connecter" color="#0076FF" >Configure Connecto2r </NormalButton> */}
                </Modal>
            </div>
           
            
           <div className="create-img"> <img src="/static/images/data-src-create.png"></img></div>
           <h3 className="h3-tag">Select Connector</h3>
           <p className="p-tag">Select your Database type & Quickly connect your data from data sources.</p>
          <div className="box">
           <img className="img-tag" src="/static/images/search-icon.png"></img>
           <input className="inputF" placeholder="Search for a connector"></input></div>
           <br></br>
            <div className="row">
            {dataSrcArray.map((row)=>{
               return <div className="col-md-3">
                   
                <DatasrcCreateCard img="/static/images/postgres.png" data="PostgreSQL"><img src="/static/images/postgres.png"></img></DatasrcCreateCard>
                </div>
            })}
         <NormalButton color="#FFFFF" margin="28px 43px 13px 38%" onClick={openModal2}>Configure Connector </NormalButton>

            </div>

        <style jsx global>{`
        img-tag{
            margin-left : 10px;
        }
        input:focus{
            outline: none;
        }
        .inputF{
            border:none;
            margin-left: 12px;
        }
        .create-btn{
            margin-left: 94%;
        }
        .create-img{
            margin-left: 32%;
        }
        .h3-tag{
            margin-left:37%;
            color:#0076FF;
        }
        .h2-tag{
            margin-left:30%
        }
        .p-tag{
            margin-left:22%
        }
        .box{
            
            border: 1px solid #0076FF;
            box-sizing: border-box;
            border-radius: 4px;
            width: 61%;
            margin-left: 26%;
            height: 39px;
        }
        `}</style>
        </div>
    )
}

export { DataSrcConnect}