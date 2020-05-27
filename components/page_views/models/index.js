import Link from "next/link";
import Modal from 'react-modal';
import {DatasrcCard} from 'components/cards/ColorCard';
import {NormalButton} from "../../../styles/buttons"

// react boostrap
import { Form, Col, Row, Tab, Nav, FormCheck, InputGroup, Image } from "react-bootstrap";

// import global tags
import {SpanTag} from '../../../styles/gloabl';

// import global form input controllers
import {HeaderInput} from '../../input_controllers/index';
import {BasicButton} from '../../buttons';

// import datasource css classes
import {SearchInput} from '../../../styles/datasource/home';

// model popup 
import {DataSrcConnect} from '../../modals/data-src'

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

const DataSrcArray = [{"tittle":"Puma","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Facebook","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Mastercard","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Puma","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Facebook","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Mastercard","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Puma","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
]

const createBtn={"color":"#0076FF"};
const createButton={"text":"Create Datasource","onClick":"openModal"}
function Model(props) {

   

    

    return (
        <>
            
             <div>
                <SpanTag color="#0076FF">Modeling</SpanTag>
                <input className="input-field" name="" placeholder="search heare"></input>
                 Filter : <input name=""></input> Sort : <input name=""></input>
                 <Link href="/models/create" params={{ PageTittle: "Query" }}>
                     <NormalButton color="#FFFFFF" margin="-34px 63px 10px 78%" >Create a Model</NormalButton>
                     </Link>
                <hr></hr>
                <section className="hero">
                    <div className="row">
                    <div className="create-datasrc">
                        <img className="img" src="/static/images/create-img.png"></img>
                    <SpanTag margin="0px 0px 0px 20%" color="#0076FF">Connect a Model</SpanTag>
                    </div>
                    {DataSrcArray.map((item) => {
                    return <div className="col-md-3" className="">
                        <DatasrcCard tittle={item.tittle} data={item.data} date={item.date}></DatasrcCard>
                       </div>;
                    })}
                    </div>

                </section>
                <hr></hr>
                <section className="hero">
                    
                </section>
            </div>
            <style jsx global>{`
            .img{
                margin-left: 34%;
            }
            .input-field{
                margin-left:82px;
            }
            .config-connecter{
                margin-left : 40%;
                margin-top : 10%;
            }
            .create-btn{
                margin-left: 94%;
            }
            .card{
                position: absolute;
                width: 160px;
                height: 64px;
                //left: 334px;
                top: 140px;

                background: #FAFAFA;
                border: 0.318px solid #EDEEEF;
                box-sizing: border-box;
                border-radius: 2.544px;
            }
                .create-datasrc{
                    width: 21.2%;
                    border: 1px dashed #0076FF;
                    border-radius: 4px;
                    height: 110px;
                    margin-top: 0.5%;
                }
                
                .table{
                    table-layout: auto;
                     width: 89%;
                }
                .header{
                    color: #0076FF;
                }
                
                .hero {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    grid-gap: 1rem;
                  }
                  .hero > a {
                    display: block;
                    padding: 1rem;
                    text-align: left;
                    text-decoration: none;
                    background-color: #005af0;
                  }
                  
        `}</style>
        </>
    )
}
export default Model