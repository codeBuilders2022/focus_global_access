//styles
import "./Search.scss"

//assets
import next from "../../assets/icons/next.svg"
import errorIcon from "../../assets/images/error_light.gif"
import errorIconDark from "../../assets/images/error_dark.gif"

//covers
import cover_0 from "../../assets/images/portadas/0.png"
import cover_1 from "../../assets/images/portadas/1.png"
import cover_2 from "../../assets/images/portadas/2.png"
import cover_3 from "../../assets/images/portadas/3.png"
import cover_4 from "../../assets/images/portadas/4.png"
import cover_5 from "../../assets/images/portadas/5.png"


//react
import { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { useStateContext } from "../../context/ContextProvider"

const Search = () => {

    const [mytheme, setMytheme] = useState()
    const { theme } = useStateContext()

    useEffect(() => {
        const themes = localStorage.getItem("theme")
        setMytheme(themes)
    }, [theme])

    //dataApi
    const dataApi = [
        {
            id: 0,
            lenguage: "English",
            name: "Nature",
            image: cover_0,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Exacts Sciences",
            impact: 2.13,
            citescore: 3.19,
            volume: 11,
        },
        {
            id: 1,
            lenguage: "English",
            name: "PNAS",
            image: cover_1,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Life Sciences",
            impact: 4.32,
            citescore: 4.19,
            volume: 7,
        },
        {
            id: 2,
            lenguage: "English",
            name: "Science",
            image: cover_2,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Health Sciences",
            impact: 7.73,
            citescore: 8.9,
            volume: 25,
        },
        {
            id: 3,
            lenguage: "English",
            name: "Astronomy & Astrophysics",
            image: cover_3,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Exacts Sciences",
            impact: 5.81,
            citescore: 8.29,
            volume: 24,
        },
        {
            id: 4,
            lenguage: "Spanish",
            name: "Revista de Cardiología",
            image: cover_4,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Health Sciences",
            impact: 7.81,
            citescore: 7.39,
            volume: 33,
        },
        {
            id: 5,
            lenguage: "Spanish",
            name: "Genética Médica y Genómica",
            image: cover_5,
            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis nec feugiat posuere. In sed ligula auctor, dictum justo at, hendrerit enim. Nullam sapien purus, finibus et erat at, fermentum gravida leo. Maecenas facilisis neque et lobortis pulvinar. Pellentesque molestie non est in rhoncus. Morbi sit amet vehicula odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac auctor felis, et pellentesque massa. Nullam risus erat, rhoncus ut turpis sit amet, pulvinar consequat nulla. Praesent faucibus dui et leo eleifend elementum. Donec a nibh orci. Suspendisse sit amet ante vel dui mollis dapibus.",
            fields: "Health Sciences",
            impact: 7.81,
            citescore: 7.39,
            volume: 33,
        },
    ]

    //states
    const [search, setSearch] = useState('')
    const [active, setActive] = useState(false)
    const [data, setData] = useState(dataApi)
    const numberJurnals = data.length

    //searcher
    useEffect(() => {

        // In this useEffect hook, the search process 
        // for journals by specialty is carried out and 
        const dataF = dataApi
        let ind = []
        if (search.length == 0) {
            setActive(false)
            setData(dataApi)
        } else {
            setActive(true)
            dataF.map((e, index) => {
                if (e.name.includes(search)) {
                    ind.push(dataF[index])
                } else {
                    setData([])
                }
            })

            if (ind.length > 0) {
                setData(ind)
            }
        }
    }, [search])

    const handleDelete = () => {
        setSearch('')
    }

    return (
        <div className='SearchC'>
            <div className='search'>
                <input type='text' placeholder='Article, journal or author' value={search} onChange={(e) => setSearch(e.target.value)} />
                {active && <button onClick={() => handleDelete()}>X</button>}
                <div className="avanced">
                    <p>Search for your content in our databases with {numberJurnals} journals and access to over {numberJurnals * 28} articles</p>
                    <div className='next'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#120f1d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                        <Link to={'/advanced-search'}>Advanced search</Link>
                    </div>
                </div>
            </div>

            <fieldset>
                <legend>Explore</legend>
                {data.length ? (
                    <div className="journals containerG">
                        {data.map((e, index) => {
                            return (
                                <div className="journalS" key={index}>
                                    <h3>{e.name}</h3>
                                    <img src={e.image} />
                                    <Link>
                                        <button>Explore</button>
                                    </Link>

                                </div>
                            )
                        })}
                    </div>
                ) : (<div className='error'>
                    Sorry, no results found for "{search}"
                    {mytheme === "light" ?
                        <img src={errorIcon} />
                        :
                        <img src={errorIconDark} />
                    }
                </div>)}
            </fieldset>
        </div>
    )
}

export default Search