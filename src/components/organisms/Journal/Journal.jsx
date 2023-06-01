import { Link, NavLink } from 'react-router-dom'
import "./Journal.scss"
import GeneralButton from '../../atoms/GeneralButton/GeneralButton'
import { Skeleton } from 'primereact/skeleton'

const Journal = ({ newURL, journal, index, skeleton }) => {
    return (
        <div className="journal" key={index}>
            {
                !skeleton ?
                    <>
                        <Link>
                            <img src={journal.image} />
                        </Link>
                        <div className="info">
                            <h3>{journal.name}</h3>
                            <div className='data'>
                                <p>Volume {journal.volume}</p>
                                <p>|</p>
                                <p>ISNN 1638-0915</p>
                                <p>|</p>
                                <Link to={"#"}>Journal website</Link>
                            </div>
                            <p>{journal.abstract}</p>
                            <p className='p_impact'>Impact: <span className="impact">{journal.impact}</span></p>
                            <Link>
                                <GeneralButton />
                            </Link>
                        </div>
                    </> :
                    <>
                        <Skeleton height='350px'></Skeleton>
                        <div className="info">
                            <h3><Skeleton height='20px' width='100px'></Skeleton></h3>
                            <div className='data'>
                                <p><Skeleton height='20px' width='100px'></Skeleton></p>
                                <p>|</p>
                                <p><Skeleton height='20px' width='150px'></Skeleton></p>
                                <p>|</p>
                                <Link to={"#"}><Skeleton height='20px' width='100px'></Skeleton></Link>
                            </div>
                            <p><Skeleton height='120px'></Skeleton></p>
                            <p className='p_impact' style={{ marginTop: "15px" }}><Skeleton height='30px' width='200px'></Skeleton></p>
                            <Link>
                                <div style={{ marginTop: "24px",width:"100%" }}>
                                    <Skeleton height='40px' ></Skeleton>
                                </div>
                            </Link>
                        </div>
                    </>
            }

        </div>
    )
}

export default Journal