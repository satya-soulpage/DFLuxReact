import NextHead from 'next/head';
import Sidemenu from './sidemenu';
import Head from 'next/head';
import DashboardHome from '../components/page_views/dashboard'

function Layout(props) {
    return (
        <div>
            <Head>
                <title>DFlux</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-1 sidemenu"><Sidemenu></Sidemenu></div>
                    <div className="col-11 main-body">
                        {/* <DashboardHome></DashboardHome> */}
                        <main>{props.children}</main>
                    </div>
                </div>
            </div>
            <style jsx global>{`
            .container{
                background-color: #f8f9fb;
            }
                .sidemenu{
                margin-left: -103px;
                }
                .main-body{
                    margin-top: 60px;
                    margin-left:3%;
                    //background-color: #f8f9fb;
                }
            `}</style>
        </div>
    );
}
export default Layout;