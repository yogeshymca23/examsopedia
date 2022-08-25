// import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Axios from 'axios'
import "./home.css"
import "./searchbar.css"
import "./landingpage.css"
import "./home-bootstrap.css"
// import MyBackgroundImage from "../images/bg.jpg"


const Home = () => {

    const [Event, setEvent] = useState([])

    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            Axios.get(`https://examsopedia.herokuapp.com/search/${keyword}`).then(res => {
                setEvent(res.data)



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

    console.log(Event.length)

    if (Event.length > 0) {

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



                {/* <!-- home section starts  --> */}

                {/* <section class="home" id="home">

                        <div class="swiper home-slider">

                            <div class="swiper-wrapper">

                                <div class="swiper-slide">
                                    <div class="box bg-image" style={{ background: `url(${MyBackgroundImage})` }}>
                                        <div class="content">
                                            <span>
                                                <h1 style={{ color: "black" }}>Search Previous Year Papers</h1>
                                            </span>
                                            <a href="#about" class="btn">SEARCH</a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section> */}

                {/* <!-- home section ends --> */}



                {/* <!-- about section starts  --> */}

                <section id="yogesh">

                    <div class="search-box ">
                        <input class="search-input" type="text" placeholder="Search Previous Papers.." onChange={(e) => setKeyword(e.target.value)} />
                        <button class="search-btn"><i class="fas fa-search" onClick={searchSubmitHandler} ></i></button>
                    </div>



                </section>

                {/* <!-- about section ends --> */}





                {/*  ab cards aaege */}

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
                                                    <button class="btn-card" data-toggle="modal"
                                                        data-target="#exampleModal">View Paper</button>
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
            </div >
        );

    }
    else {
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



                {/* <!-- home section ends --> */}



                {/* <!-- about section starts  --> */}

                <section id="about">

                    <div class="search-box">
                        <input class="search-input" type="text" placeholder="Search Previous Papers.." onChange={(e) => setKeyword(e.target.value)} />
                        <button class="search-btn"><i class="fas fa-search" onClick={searchSubmitHandler}></i></button>
                    </div>


                </section>

                {/* <!-- about section ends --> */}










                {/*  ab cards aaege */}





                <div class="courses-container">
                    <div class="course">
                        {/* <div class="course-preview">
                            <h6>---</h6>
                            <h2>---</h2>
                            <a >Post by :-Nonw</a>
                        </div> */}

                        <div class="course-info">
                            {/* <div class="row ">
                                <div class="col-6 ">
                                    <h6>XXXX Year</h6>
                                </div>
                                <div class="col-6 col-md-6 col-sm-12 col-xs-12 progress-container">
                                    <div class="progress"></div>
                                    <span class="progress-text">
                                        -/5 Ratings
                                    </span>
                                </div>
                            </div> */}

                            {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
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

                            {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}


                        </div>

                    </div>
                </div>
            </div >



        );

    }



};

export default Home;