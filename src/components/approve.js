// import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import "./home.css"
import "./searchbar.css"
import "./landingpage.css"
import "./home-bootstrap.css"
import ReactGA from "react-ga";
// import MyBackgroundImage from "../images/bg.jpg"


const Approve = () => {

    const [Event, setEvent] = useState([])

    useEffect(()=>{
        ReactGA.pageview(window.location.pathname);

    })





    Axios.get('https://examsopedia.herokuapp.com/get_approve').then(res => {
        setEvent(res.data)
    }).catch(function (error) {
        console.log(error);
    });




    return (
        <div>

            <header class="header flex-wrap">
                <a href="/" class="logo"> <i class="fas fa-book-reader"></i> ExamsOpedia </a>
                <button >
                    <a href='/post' class="floating-btn" style={{ color: "white" }} >Upload New Paper</a>
                </button>
            </header>
            <section>


                {
                    Event.map((val, key) => {


                        return (
                            <ChildComponent id={val._id} title={val.title} auther={val.auther} batch={val.batch} semester={val.semester} year={val.year} branch={val.branch} teacher={val.teacher} college={val.college} link={val.link} />




                        )
                    }
                    )
                }





            </section>
        </div >


    )

};


const ChildComponent = ({ id, title, auther, batch, semester, year, branch, teacher, college, link }) => {

    

    const Post1 = async () => {
        console.log(link);

        Axios.post('https://examsopedia.herokuapp.com/approve', { title, auther, batch, semester, year, branch, teacher, college, link }, { headers: { "Content-Type": "application/json" } });
            


        Axios.delete(`https://examsopedia.herokuapp.com/delete/${id}`, { headers: { "Content-Type": "application/json" } });
            


        window.location.reload(false);
        alert("Paper Approved");


    };



    return (
        <div>


            <div class="courses-container">
                <div class="course row">
                    <div class="col-12 col-md-3 py-4 d-flex flex-column align-items-center justify-content-center course-preview">
                        <h6>{college}</h6>
                        <h2>{branch}</h2>
                        <a >Post by :- {auther} ({batch})</a>
                    </div>

                    <div class="col-12 col-md-9 course-info px-5">
                        <div class="row pt-3">
                            <div class="col-6 ">
                                <h6>{year} Year</h6>
                            </div>
                            <div class="col-6 col-md-6  progress-container">
                                <div class="progress"></div>
                                <span class="progress-text">
                                    3/5 Ratings
                                </span>
                            </div>
                        </div>

                        {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
                        <div class="row offset-5">
                            <div class="col-12 col-md-12 py-2 ">
                                <h2 id="title">{title} </h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-12 align-items-start">
                                <h3 id="title">By :- {teacher} </h3>
                            </div>

                        </div>

                        {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
                        <div class="row">
                            <div class=" col py-3">
                                <button class="btn-card" >
                                    <a href={link}>Download Paper</a></button>
                                
                            </div>
                            <button class="btn-card" onClick={Post1}>Approve</button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )


};


export default Approve;