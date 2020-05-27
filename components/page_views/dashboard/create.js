import {SpanTag} from '../../../styles/gloabl';
import {DatasrcCard} from 'components/cards/ColorCard';
import {NormalButton} from "../../../styles/buttons";

const DataSrcArray = [{"tittle":"Puma","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Facebook","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Mastercard","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Puma","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Facebook","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Mastercard","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
{"tittle":"Puma","data":"Owner: Randall Nguyen","date":"Last Modified: September 23, 2016 10:10 PM"},
]

function DashboardCreate(props) {

    return (
        <>
            <div>
            <SpanTag color="#0076FF">Dashboard</SpanTag>
            <input className="input-field" name="" placeholder="search heare"></input>
                 Filter : <input name=""></input> Sort : <input name=""></input>
                 <hr></hr>
                <section className="hero">
                <div className="row">
                    <div className="create-datasrc">
                    <img className="img" src="/static/images/create-img.png"></img>
                    <SpanTag margin="0px 0px 0px 20%" color="#0076FF">Connect a Data Source</SpanTag>
                    </div>
                    {DataSrcArray.map((item) => {
                    return <div className="col-md-3" className="">
                        <DatasrcCard tittle={item.tittle} data={item.data} date={item.date}></DatasrcCard>
                       </div>;
                    })}
                    
                        
                    </div>
                </section>
             </div>
            <style jsx >{`
                .input-field{
                    margin-left:82px;
                }
                 .img{
                    margin-left: 34%;
                }
                .create-dsh{
                    position: absolute;
                    width: 287px;
                    height: 120px;
                    left: 126px;
                    top: 115px;

                    background: red;
                    border: 1px dashed #0076FF;
                    border-radius: 4px;
                }
                .create-btn{
                    margin-left: 16%;
                }
                .table{
                    table-layout: auto;
                     width: 89%;
                }
                .header{
                    color: #0076FF;
                }
                .search{
                    margin-left: 19%;
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
                  .hero h3 {
                    margin: 0;
                    color: #067df7;
                    color: #fff;
                  }
                  .hero p {
                    margin: 0;
                    color: #fff;
                  }
        `}</style>
        </>
    )
}
export default DashboardCreate