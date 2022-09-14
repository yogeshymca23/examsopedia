// import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import "./home.css"
import "./searchbar.css"
import "./landingpage.css"
import "./home-bootstrap.css"
import ReactGA from "react-ga";
import LoadingSpinner from "./loader";
// import MyBackgroundImage from "../images/bg.jpg"


const Home = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);

    })

    const [isLoading, setIsLoading] = useState(false);

    const [Event, setEvent] = useState([])

    const [AllEvent, setAllEvent] = useState([])
    Axios.get('https://examsopedia.herokuapp.com/get_post').then(res => {
                setAllEvent(res.data)
                console.log(res.data)
            }).catch(function (error) {
                console.log(error);
            });

    const [keyword, setKeyword] = useState("");

    // const onKeyPressHandler = e => {
    //     e.eventDefault();
    //     if (e.key === 'Enter') {
    //       // do something
    //       console.log("hello");
    //     }
    // };

    // function handleKeyPress(e) {
    //     if (e.key === 'a') {
    //       // do whatever
    //       console.log("hello");
    //     }
    // };

    // function onEnter(e){

    //     if (e.keyCode == 13)
    //     {
    //         console.log("hello");

    //     }

    // }

    // function searchKeyPress(e) {
    //     // look for window.event in case event isn't passed in
    //     e = e || window.event;
    //     if (e.keyCode == 13) {
    //         document.getElementById('btnSearch').click();
    //         return false;
    //     }
    //     return true;
    // }

    const searchSubmitHandler = (e) => {

        ReactGA.event({
            category: "search",
            /** The type of interaction (e.g. 'play') */
            action: "seach words",
            /** Useful for categorizing events (e.g. 'Fall Campaign') */
            label: keyword,
            /** A numeric value associated with the event (e.g. 42) */
            // value?: number;
            /** Specifies that a hit be considered non-interactive. */
            // nonInteraction?: boolean;
        })
        e.preventDefault();
        if (keyword.trim()) {
            setIsLoading(true);

            Axios.get(`https://examsopedia.herokuapp.com/search/${keyword}`).then(res => {
                setEvent(res.data);
                setIsLoading(false);




            }).catch(function (error) {
                console.log(error);

            });

            // navigate(`/search/${keyword}`);
        } else {
            Axios.get('https://examsopedia.herokuapp.com/get_post').then(res => {
                setEvent(res.data)
                console.log(res.data)



            }).catch(function (error) {
                console.log(error);
            });

        }
    };

    // console.log(Event.length)
    // if (isLoading) {
    //     console.log("hello spinner");
    //     <LoadingSpinner />
    // }
    // {isLoading ? <LoadingSpinner /> : null }

    if (Event.length > 0) {
        if (isLoading) {
            console.log("hello spinner");
            <LoadingSpinner />
        }



        return (
            <div>
                {/* <!-- header section starts  --> */}


                <header class="header flex-wrap">
                    <a href="/" class="logo"> <i class="fas fa-book-reader"></i> ExamsOpedia </a>
                    <button >
                        <a href='/post' class="floating-btn" style={{ color: "white" }} >Upload New Paper</a>
                    </button>


                </header>

                {/* <!-- header section ends -->

                    

                    {/* <!-- bootstrap --!> */}
                <section class="masthead">
                    <div class="container px-4 px-lg-5 h-100">
                        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                            <div class="col-lg-8 align-self-end">
                                <h1 class="text-black font-weight-bold">Your Favorite Place for Previous Year Papers</h1>
                                {/* <hr class="divider" /> */}
                                <br />
                            </div>
                            <div class="col-lg-8 align-self-baseline">
                                <p class="text-white-75 mb-5">Done with Exam Preparation ? <br />Download Previous Year Papers & start  Practice now !</p>
                                <a class="btn  btn-xl" href="#yogesh">Search</a>
                            </div>
                        </div>
                    </div>
                </section>
                





                {/* <!-- about section starts  --> */}


                <section id="yogesh">

                    <div class="search-box d-md-flex">
                        <input class="search-input" type="text" placeholder="Search Previous Papers.." onChange={(e) => setKeyword(e.target.value)} />
                        {/* <a class="btn search-button btn-xl" href="#results" onClick={searchSubmitHandler}>Search</a> */}
                        <button class="btn  btn-xl mx-3  my-auto" id="btnSearch" onClick={searchSubmitHandler}>Search</button>
                    </div>



                </section>
                {isLoading ? <LoadingSpinner /> : null}


                {/* <!-- about section ends --> */}





                {/*  ab cards aaege */}
                <section id="results" >
                    {



                        Event.map((val, key) => {

                            // image url nikalne ka trika


                            // console.log(val.auther)
                            // let base64String;
                            // let imgaddress = "#";

                            // if (val.img) {
                            //     base64String = btoa(
                            //         String.fromCharCode(...new Uint8Array(val.img.data.data))
                            //     );

                            //     imgaddress = `data:image/png;base64,${base64String}`;
                            // }



                            // console.log(val.link);


                            return (

                                <div>

                                    <div class="courses-container">

                                        <div class="course row">
                                            <div class="col-12 col-md-3 py-4 d-flex flex-column align-items-center justify-content-center course-preview">
                                                <h6>{val.college}</h6>
                                                <h2>{val.branch}</h2>
                                                <a >Post by :- {val.auther} ({val.batch})</a>
                                            </div>

                                            <div class="col-12 col-md-9 course-info px-5">
                                                <div class="row pt-3">
                                                    <div class="col-6 ">
                                                        <h6>{val.year} Year</h6>
                                                    </div>
                                                    <div class="col-6 col-md-6  progress-container">
                                                        <div class="progress"></div>
                                                        <span class="progress-text">
                                                            {val.rating}/5 Ratings
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
                                                <div class="row offset-5">
                                                    <div class="col-12 col-md-12 py-2 ">
                                                        <h2 id="title">{val.title} </h2>
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col-12 align-items-start">
                                                        <h3 id="title">By :- {val.teacher} </h3>
                                                    </div>

                                                </div>

                                                {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
                                                <div class="row">
                                                    <div class=" col py-3">
                                                        <button class="btn-card" ><a style={{ color: "white" }} href={val.link}>Download Paper</a></button>
                                                        {/* ab popup aaega  */}
                                                        <div class="modal fade"
                                                            id="exampleModal"
                                                            tabindex="-1"
                                                            role="dialog"
                                                            aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true">

                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">

                                                                    {/* <!-- Add image inside the body of modal --> */}
                                                                    <div class="modal-body">
                                                                        <img id="image" src={val.link} width="100%"
                                                                            alt="No Data Found" />
                                                                    </div>

                                                                    <div class="modal-footer">
                                                                        <button type="button"
                                                                            class="btn-card"
                                                                            data-dismiss="modal">
                                                                            Close
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>



                                            {/* <div class="row course-info">
                                                <div class="col progress-container">
                                                    <div class="progress"></div>
                                                    <span class="progress-text">
                                                        {val.rating}/5 Ratings
                                                    </span>
                                                    <h6 class="col-4">{val.year} Year</h6>
                                                </div>

                                                <h2 class="col" id="title">{val.title} </h2>

                                                <h2 class="col"> (by {val.teacher})</h2>
                                                <button class="row btn-card" data-toggle="modal"
                                                    data-target="#exampleModal">View Paper</button>

                                                
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* <button class="floating-btn">
                                        <a href='/post' class="floating-btn" >Upload New Paper</a>
                                    </button> */}



                                </div>
                            )
                        })
                    }
                </section>
            </div >
        );

    }
    else {
        if (isLoading) {
            console.log("hello spinner");
            <LoadingSpinner />
        }
        return (
            <div>
                {/* ////////////////////////////////////////////////////////////////////////////////////// */}

                {/* <!-- header section starts  --> */}

                <header class="header flex-wrap">
                    <a href="/" class="logo"> <i class="fas fa-book-reader"></i> ExamsOpedia </a>
                    <button >
                        <a href='/post' class="floating-btn" style={{ color: "white" }} >Upload New Paper</a>
                    </button>


                </header>

                {/* <!-- header section ends -->

                    <!-- search form  --> */}

                {/* <div class="search-form">

                        <div id="close-search" class="fas fa-times"></div>

                        <form action="">
                            <input type="search" name="" placeholder="search here..." id="search-box" />
                            <label for="search-box" class="fas fa-search"></label>
                        </form>
                    </div> */}

                {/* <!-- home section starts  --> */}

                <section class="masthead">
                    <div class="container px-4 px-lg-5 h-100">
                        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                            <div class="col-lg-8 align-self-end">
                                <h1 class="text-black font-weight-bold">Your Favorite Place for Previous Year Papers</h1>
                                {/* <hr class="divider" /> */}
                                <br />
                            </div>
                            <div class="col-lg-8 align-self-baseline">
                                <p class="text-white-75 mb-5">Done with Exam Preparation ? <br />Download Previous Year Papers & start  Practice now !</p>
                                <a class="btn  btn-xl" href="#about">Search</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about">

                    <div class="search-box d-md-flex">
                        <input class="search-input" type="text" placeholder="Search Previous Papers.." onChange={(e) => setKeyword(e.target.value)} />
                        <button class="btn mx-3 btn-xl my-auto" id="btnSearch" onClick={searchSubmitHandler}>Search</button>
                    </div>


                </section>
                {isLoading ? <LoadingSpinner /> : null}



                {/* <!-- home section ends --> */}

                <section id="results" >
                    {



                        AllEvent.map((val, key) => {

                            // image url nikalne ka trika


                            // console.log(val.auther)
                            // let base64String;
                            // let imgaddress = "#";

                            // if (val.img) {
                            //     base64String = btoa(
                            //         String.fromCharCode(...new Uint8Array(val.img.data.data))
                            //     );

                            //     imgaddress = `data:image/png;base64,${base64String}`;
                            // }



                            // console.log(val.link);


                            return (

                                <div>

                                    <div class="courses-container">

                                        <div class="course row">
                                            <div class="col-12 col-md-3 py-4 d-flex flex-column align-items-center justify-content-center course-preview">
                                                <h6>{val.college}</h6>
                                                <h2>{val.branch}</h2>
                                                <a >Post by :- {val.auther} ({val.batch})</a>
                                            </div>

                                            <div class="col-12 col-md-9 course-info px-5">
                                                <div class="row pt-3">
                                                    <div class="col-6 ">
                                                        <h6>{val.year} Year</h6>
                                                    </div>
                                                    <div class="col-6 col-md-6  progress-container">
                                                        <div class="progress"></div>
                                                        <span class="progress-text">
                                                            {val.rating}/5 Ratings
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
                                                <div class="row offset-5">
                                                    <div class="col-12 col-md-12 py-2 ">
                                                        <h2 id="title">{val.title} </h2>
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col-12 align-items-start">
                                                        <h3 id="title">By :- {val.teacher} </h3>
                                                    </div>

                                                </div>

                                                {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
                                                <div class="row">
                                                    <div class=" col py-3">
                                                        <button class="btn-card" ><a style={{ color: "white" }} href={val.link}>Download Paper</a></button>
                                                        {/* ab popup aaega  */}
                                                        <div class="modal fade"
                                                            id="exampleModal"
                                                            tabindex="-1"
                                                            role="dialog"
                                                            aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true">

                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">

                                                                    {/* <!-- Add image inside the body of modal --> */}
                                                                    <div class="modal-body">
                                                                        <img id="image" src={val.link} width="100%"
                                                                            alt="No Data Found" />
                                                                    </div>

                                                                    <div class="modal-footer">
                                                                        <button type="button"
                                                                            class="btn-card"
                                                                            data-dismiss="modal">
                                                                            Close
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>



                                            {/* <div class="row course-info">
                                                <div class="col progress-container">
                                                    <div class="progress"></div>
                                                    <span class="progress-text">
                                                        {val.rating}/5 Ratings
                                                    </span>
                                                    <h6 class="col-4">{val.year} Year</h6>
                                                </div>

                                                <h2 class="col" id="title">{val.title} </h2>

                                                <h2 class="col"> (by {val.teacher})</h2>
                                                <button class="row btn-card" data-toggle="modal"
                                                    data-target="#exampleModal">View Paper</button>

                                                
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* <button class="floating-btn">
                                        <a href='/post' class="floating-btn" >Upload New Paper</a>
                                    </button> */}



                                </div>
                            )
                        })
                    }
                </section>



                {/* <!-- about section starts  --> */}

                


                {/* <!-- about section ends --> */}




                










                {/*  ab cards aaege */}





                {/* <div class="courses-container">
                    <div class="course">
                        

                        <div class="course-info">
                            <div class="row offset-5">
                                <div class="col-12 col-md-12 py-2 ">
                                    <h2 id="title">No Results till now </h2>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-12 align-items-start py-2">
                                    <h3 id="title">Search For more </h3>
                                </div>

                            </div>


                        </div>

                    </div>
                </div> */}
            </div >



        );

    }



};

export default Home;