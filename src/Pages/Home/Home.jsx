//styles
import "./Home.scss"

// //assets
import img1 from "../../assets/images/adn2.jpg"
import img2 from "../../assets/images/ai.png"
import img4 from "../../assets/images/stethoscope.jpg"
import img5 from "../../assets/images/virus.jpg"
import img6 from "../../assets/images/ADN.jpg"
import virus from "../../assets/images/virus2.jpg"
import fisica from "../../assets/images/periodic-table.jpg"
import derecho from "../../assets/images/graphics.png"
import educacion from "../../assets/images/educacion.jpg"
import books from "../../assets/images/books.jpg"
import img8 from "../../assets/images/bacteria.jpg"
import img9 from "../../assets/images/earth.png"
import img10 from "../../assets/images/ai.png"
import next from "../../assets/icons/next.svg"


//covers
import cover_0 from "../../assets/images/portadas/0.png"
import cover_1 from "../../assets/images/portadas/1.png"
import cover_2 from "../../assets/images/portadas/2.png"
import cover_3 from "../../assets/images/portadas/3.png"
import cover_4 from "../../assets/images/portadas/4.png"
import cover_5 from "../../assets/images/portadas/5.png"


//react
import { Galleria } from "primereact/galleria"
import { Carousel } from "primereact/carousel"
import { RadioButton } from "primereact/radiobutton"
import { useState } from "react"
import { Link } from "react-router-dom"

//components
import Journal from "../../components/organisms/Journal/Journal"

const Home = () => {
    const fields = [
        { title: "Educational sciences", image: educacion },
        { title: "Life Sciences", image: virus },
        { title: "Health Sciences", image: img4 },
        { title: "Exacts Sciences", image: fisica },
        { title: "Social Sciences & Humanities", image: derecho },
        { title: "Journals & Books", image: books },
    ]
    const [products, setProducts] = useState(fields);
    const [lenguage, setLenguage] = useState('English');
    const [specialtySearch, setSpecialySearch] = useState('')

    // var months
    const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    // main gallery images
    const images = [
        { img: img1 },
        { img: img2 },
        { img: img5 },
        { img: img8 },
        { img: img9 },
        { img: img10 },
    ]

    // gallery templates
    const itemTemplate = (item) => {
        return <img src={item.img} alt={item} style={{ width: '100%', display: 'block' }} />;
    }

    // gallery templates
    const thumbnailTemplate = (item) => {
        return <img src={item.img} alt={item} style={{ display: 'block' }} />;
    }

    // current year
    let year = new Date().getFullYear()


    const responsiveOptions = [
        {
            breakpoint: '1280px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '660px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    //fuction scroll
    const handleClick = (id) => {
        document.getElementById('specialties')?.scrollIntoView({ behavior: "smooth" });
        setSpecialySearch(id)
    }

    // top specialty carousel templates
    const productTemplate = (e) => {
        return (
            <div className="card" onClick={() => handleClick(e.title)}>
                <button className="element">
                    <p>{e.title}</p>
                    <img src={e.image} />
                </button>
            </div>
        );
    };

    //dataApi
    const [dataApi, setDataApi] = useState([
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
    ])
    const numberJurnals = dataApi.length

    return (
        <div className='Home containerG'>
            <Galleria autoPlay={true} value={images} circular style={{ maxWidth: '100%' }} showItemNavigators
                showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} transitionInterval={5000} />
            <div className="fields" id="fields">
                <Carousel value={products} numVisible={4} numScroll={1} responsiveOptions={responsiveOptions} showIndicators={false} className="custom-carousel" circular
                    itemTemplate={productTemplate} />
            </div>
            <fieldset>
                <legend>Featured Journals</legend>
                <div className="lenguage">
                    <div className="options">
                        <RadioButton inputId="lenguage1" name="lenguage" value="Spanish" onChange={(e) => setLenguage(e.value)} checked={lenguage === 'Spanish'} />
                        <label htmlFor="lenguage1" className="ml-2">Spanish publications</label>
                    </div>
                    <div className="options">
                        <RadioButton inputId="lenguage2" name="lenguage" value="English" onChange={(e) => setLenguage(e.value)} checked={lenguage === 'English'} />
                        <label htmlFor="lenguage2" className="ml-2">English publications</label>
                    </div>
                </div>
                {dataApi.length && (
                    <div className="journals">
                        {lenguage == 'English' ?
                            dataApi.map((e, index) => {
                                return (
                                    e.lenguage == 'English' &&
                                    <Journal key={index} index={index} journal={e} />
                                )
                            }) : dataApi.map((e, index) => {
                                return (
                                    e.lenguage == 'Spanish' &&
                                    <Journal key={index} index={index} journal={e} />
                                )
                            })}
                    </div>
                )}
                <div className='next'>
                    <div className="int_next">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#120f1d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                        <Link to={'/advanced-search'}>Advanced search</Link>
                    </div>
                </div>
            </fieldset>

            <fieldset >
                <legend><span style={{ color: '#3e6d91', fontWeight: '700' }}>FOCUS G.A</span> statistics:</legend>
                <div className="statistics">
                    <div className="metric">
                        <p>{numberJurnals}</p>
                        <span>Journals</span>
                    </div>
                    <div className="metric">
                        <p>{numberJurnals * 28}</p>
                        <span>Articles</span>
                    </div>
                    <div className="metric">
                        <p>{4}</p>
                        <span>Open Access</span>
                    </div>
                    <div className="metric">
                        <p>{16}</p>
                        <span>Books</span>
                    </div>
                </div>
            </fieldset>


        </div>
    )
}

export default Home
