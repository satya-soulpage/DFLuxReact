import {NormalButton} from "../../../styles/buttons";

const allDatabaseArray =  ['Hugo',"Fashopi","Qualetics","FLA","Carpaints"]
function ModelCreate(props){
    return(
        <div>
            <span>Untitled-1</span>
            <div className="btns">
            <NormalButton color="#FFFFFF" margin="1px 1px 1px 315px" id="test" >Share </NormalButton>
           <NormalButton color="#FFFFFF" margin="-44px 1px 1px 29%" id="success" >Save </NormalButton>
           <NormalButton color="#FFFFFF" margin="-44px 1px 1px 52%" id="fail" >Cancel </NormalButton>
           </div>
           <hr></hr>
           <div className="row">
               <div className="col-md-3">
                   <span>Search For Database file</span>
                   <input></input>
                   <hr></hr>
                   <span>Database</span>
                   <ul>
                   {allDatabaseArray.map((row)=>{
                     return <li>{row}</li>
                   })}
                       
                   </ul>
               </div>
               <div className="col-md-9">
                   <div className="query-edit"></div>
               </div>
           </div>
           <style jsx global>{`
           .btns{
               margin-left:60%;
           }
           .query-edit{
            position: absolute;
            width: 96%;
            height: 370px;
            background: #FFFFFF;
            border: 5.5px solid #DBDDE0;
            box-sizing: border-box;
           }
           `}</style>
        </div>
    )
}

export default ModelCreate;