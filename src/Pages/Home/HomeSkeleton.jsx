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

import { Skeleton } from 'primereact/skeleton';

//components
import Journal from "../../components/organisms/Journal/Journal"

const HomeSkeleton = () => {
    const [lenguage, setLenguage] = useState('English');
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

    return (
        <div className='Home containerG'>
            <Skeleton height="400px" width="100%"></Skeleton>
            <div className="fields" id="fields">
                <Skeleton className="custom-carousel" height="100px"></Skeleton>
            </div>
            <fieldset>
                <legend><Skeleton height="20px" width="150px"></Skeleton></legend>

                <div className="lenguage">
                    <div className="options">
                        <Skeleton height="15px" width="100px"></Skeleton>
                    </div>
                    <div className="options">
                        <Skeleton height="15px" width="100px"></Skeleton>
                    </div>
                </div>
                {dataApi.length && (
                    <div className="journals">
                        {lenguage == 'English' ?
                            dataApi.map((e, index) => {
                                return (
                                    e.lenguage == 'English' &&
                                    <Journal key={index} index={index} journal={e} skeleton />
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
                        <Skeleton height="30px"></Skeleton>
                    </div>
                </div>
            </fieldset>

            <fieldset >
                <legend><Skeleton height="50px" width="250px"></Skeleton></legend>
                <div className="statistics">
                    <div className="metric">
                        <center><Skeleton height="50px" width="100px"></Skeleton></center>
                        <center style={{ marginTop: "10px" }}><Skeleton height="25px" width="110px"></Skeleton></center>
                    </div>
                    <div className="metric">
                        <center><Skeleton height="50px" width="100px"></Skeleton></center>
                        <center style={{ marginTop: "10px" }}><Skeleton height="25px" width="110px"></Skeleton></center>
                    </div>
                    <div className="metric">
                        <center><Skeleton height="50px" width="100px"></Skeleton></center>
                        <center style={{ marginTop: "10px" }}><Skeleton height="25px" width="110px"></Skeleton></center>
                    </div>
                    <div className="metric">
                        <center><Skeleton height="50px" width="100px"></Skeleton></center>
                        <center style={{ marginTop: "10px" }}><Skeleton height="25px" width="110px"></Skeleton></center>
                    </div>
                </div>
            </fieldset>


        </div>
    )
}

export default HomeSkeleton
