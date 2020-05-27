import Link from "next/link";
import {NormalButton} from "../../../styles/buttons";

import DataTable from "react-data-table-component";
const columns = [

    {
        name: "Name",
        selector: "product_name",
        sortable: true,
        right: true,
    },
    {
        name: "Created By",
        selector: "quantity",
        sortable: true,
        right: true,
    },
    {
        name: "Last Modified",
        selector: "price",
        sortable: true,
        right: true,
    },
    {
        name: "Sharing",
        selector: "total",
        sortable: true,
        right: true,
    },

];

const data = [
    {

        product_name: "Satya",
        quantity: 'Satya',
        price: '20-05-2020',
        total: "$ 23,000",
    },
    {

        product_name: "Satya",
        quantity: 'Satya',
        price: '20-05-2020',
        total: "$ 23,000",
    },

];


function DashboardHome(props) {
    return (
        <>

            <div>
                <span className="header">Dashboard</span><input className="search" name="" placeholder="search heare"></input> Filter : <input name=""></input> Sort : <input name=""></input>
                <Link href="/dashboard/create" params={{ PageTittle: "Dashboard" }}>
                    {/* <button className="create-dash">Create Dashboard</button> */}
                    <NormalButton margin="-35px 43px 10px 79%">Create Dashboard</NormalButton>
                    </Link>
                <hr></hr>
                <div>
                    <DataTable title="Dashboards" columns={columns} data={data} />
                </div>
            </div>
            <style jsx global>{`
            .create-dash{
                margin-left: 6px;
            }
            tbody td{
                padding: 5px;
                border: 0.5px solid #DBDDE0;
              }
              
              tbody tr:nth-child(odd){
                // background-color: #efeeeeeb;
               // color: #fff;
              }
                .table-m{
                    table-layout: auto;
                    width: 89%;
                    background-color:#FFFFFF;
                }
                .t-body{
                    text-align:center
                }
                .create-btn{
                    margin-left: 16%;
                }
               
                .header{
                    color: #0076FF;
                }
                .search{
                    margin-left: 8%;
                }
        `}</style>
        </>
    )
}
export default DashboardHome