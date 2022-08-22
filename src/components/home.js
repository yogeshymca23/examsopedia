import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import "./home.css"
import "./searchbar.css"
import "./landingpage.css"
import "./home-bootstrap.css"
import MyBackgroundImage from "../images/bg.jpg"


const Home = () => {
    let navigate = useNavigate()

    const [Event, setEvent] = useState([])

    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            Axios.get(`https://examsopedia.herokuapp.com/search/${keyword}`).then(res => {
                setEvent(res.data)
                console.log(res.data)



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

    {
        if (Event.length > 0) {
            return (
                <div>
                    {/* <!-- header section starts  --> */}

                    <header class="header">
                        <a href="/" class="logo"> <i class="fas fa-book-reader"></i> ExamsOpedia </a>

                        <nav class="navbar">
                            <div id="nav-close" class="fas fa-times"></div>


                            {/* <a href="#about">SEARCH</a>

                            <a href="#shop">CONTACT US</a> */}


                        </nav>

                    </header>

                    {/* <!-- header section ends -->

                    

                    {/* <!-- bootstrap --!> */}
                    <section class="masthead">
                        <div class="container px-4 px-lg-5 h-100">
                            <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                                <div class="col-lg-8 align-self-end">
                                    <h1 class="text-black font-weight-bold">Your Favorite Place for Previous Year Papers</h1>
                                    {/* <hr class="divider" /> */}
                                    <br/>
                                </div>
                                <div class="col-lg-8 align-self-baseline">
                                    <p class="text-white-75 mb-5">Done with Exam Preparation ? <br/>Download Previous Year Papers & start  Practice now !</p>
                                    <a class="btn  btn-xl" href="#about">Search</a>
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

                    <section class="about " id="about">

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
                            console.log(val.auther)
                            let base64String;
                            let imgaddress = "#";

                            if (val.img) {
                                base64String = btoa(
                                    String.fromCharCode(...new Uint8Array(val.img.data.data))
                                );

                                imgaddress = `data:image/png;base64,${base64String}`;
                            }






                            return (
                                <div>

                                    <div class="courses-container">
                                        <div class="course">
                                            <div class="course-preview">
                                                <h6>{val.college}</h6>
                                                <h2>{val.branch}</h2>
                                                <a href="#">Post by :- {val.auther} ({val.batch})</a>
                                            </div>
                                            <div class="course-info">
                                                <div class="progress-container">
                                                    <div class="progress"></div>
                                                    <span class="progress-text">
                                                        {val.rating}/5 Ratings
                                                    </span>
                                                </div>
                                                <h6>{val.year} Year</h6>
                                                <h2 id="title">{val.title} ({val.semester} Semester)</h2>

                                                <h2>by {val.teacher}</h2>
                                                <button class="btn-card" data-toggle="modal"
                                                    data-target="#exampleModal">View Paper</button>

                                                {/* ab button popup aaega     */}
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
                                                                <img id="image" src={imgaddress} width="100%"
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

                                    <button class="floating-btn">
                                        <a href='/post' class="floating-btn" >Upload New Paper</a>
                                    </button>



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

                    <header class="header">
                        <a href="/" class="logo"> <i class="fas fa-book-reader"></i> ExamsOpedia </a>

                        <nav class="navbar">
                            <div id="nav-close" class="fas fa-times"></div>


                            {/* <a href="#about">SEARCH</a>

                            <a href="#shop">CONTACT US</a> */}


                        </nav>

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
                                    <br/>
                                </div>
                                <div class="col-lg-8 align-self-baseline">
                                    <p class="text-white-75 mb-5">Done with Exam Preparation ? <br/>Download Previous Year Papers & start  Practice now !</p>
                                    <a class="btn  btn-xl" href="#about">Search</a>
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* <!-- home section ends --> */}



                    {/* <!-- about section starts  --> */}

                    <section class="about" id="about">

                        <div class="search-box">
                            <input class="search-input" type="text" placeholder="Search Previous Papers.." onChange={(e) => setKeyword(e.target.value)} />
                            <button class="search-btn"><i class="fas fa-search" onClick={searchSubmitHandler}></i></button>
                        </div>


                    </section>

                    {/* <!-- about section ends --> */}










                    {/*  ab cards aaege */}




                    <div class="courses-container">
                        <div class="course">
                            <div class="course-preview">

                                <h2>-----</h2>
                                <a href="#">Post by :- None</a>
                            </div>
                            <div class="course-info">
                                <div class="progress-container">
                                    <div class="progress"></div>
                                    <span class="progress-text">
                                        -/5 Ratings
                                    </span>
                                </div>
                                <h6>20XX Year</h6>
                                <h2>No Records Found <br /> ( try with different Words )</h2>
                                {/* <button class="btn-card" data-toggle="modal"
                                    data-target="#exampleModal">View Paper</button> */}
                                <button  >
                                    <a href='/post' class="floating-btn" >Upload New Paper</a>
                                </button>



                            </div>
                        </div>
                    </div>
                </div >



            );
        }
    }

    return


};

export default Home;