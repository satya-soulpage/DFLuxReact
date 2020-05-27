import Link from 'next/link'
import Home from '../components/page_views'

function Sidemenu(props) {
    return (
        <div>
            <Link href="/">
                <a><img className="logo" src="/static/images/header-icon.png"></img></a>
            </Link>
            <hr></hr>
            <div>
                <div className="event">

                    <Link href="/dashboard" params={{ pageName: "Dashboards" }}>
                        <a><img className="event-img" src="/static/images/dashboards.png"></img></a>
                        {/* <span className="link"> Dashboards</span> */}
                    </Link>
                </div>
                <div className="event">
                    <Link href="/datasource">
                        <a><img className="event-img" src="/static/images/data-src.png"></img></a>
                    </Link>
                </div>
                <div className="event">
                    <Link href="/queries">
                        <a><img className="event-img" src="/static/images/qry.png"></img></a>
                    </Link>
                </div>
                <div className="event">
                    <Link href="/models">
                        <a><img className="event-img" src="/static/images/modeling.png"></img></a>
                    </Link>
                </div>
                <div className="event">
                    <Link href="#">
                        <a><img className="event-img" src="/static/images/scheduels.png"></img></a>
                    </Link>
                </div>
                <div className="event">
                    <Link href="#">
                        <a><img className="event-img" src="/static/images/settings.png"></img></a>
                    </Link>
                </div>
                {/* <Home></Home> */}
            </div>
            <style jsx global>{`
                .link{
                    font-size: smaller;
                }
                .logo{
                    width:67px
                }
                .event{
                    margin-top:30px
                }
                .event-img{
                    width:40px
                }
            `}</style>
        </div>
    )
}

export default Sidemenu