import { Link, NavLink } from 'react-router-dom'
import "./Journal.scss"
import GeneralButton from '../../atoms/GeneralButton/GeneralButton'

const Journal = ({ newURL, journal, index }) => {
    return (
        <div className="journal" key={index}>
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
                    <GeneralButton/>
                </Link>
            </div>
        </div>
    )
}

export default Journal