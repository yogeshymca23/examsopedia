
import React, { useState ,  useEffect} from 'react';
import Axios from 'axios'
import "./post.css"
import ReactGA from "react-ga";
import LoadingSpinner from "./loader";



function Post() {
    const [isLoading, setIsLoading] = useState(false);


    const [title, settitle] = useState('')
    const [auther, setauther] = useState('')
    const [batch, setbatch] = useState('')
    const [semester, setsemester] = useState('')
    const [year, setyear] = useState('')
    const [branch, setbranch] = useState('')
    const [teacher, setteacher] = useState('')
    const [college, setcollege] = useState('')
    const [file, setfile] = useState([])
    // const [link , setlink] = useState('')
    /// image k aaega yaha ek 
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);

    })





    const Post1 = async () => {
        
        if(auther==='')
        {
            alert("Enter Your Name");
            return;
        }
        else if(title==='')
        {
            alert("Enter Subject Name");
            return;
        }
        else if(teacher==='')
        {
            alert("Enter Teacher Name ( NA if not available) ");
            return;
        }
       
        else if(semester==='')
        {
            alert("Select semester");
            return;
        }
        else if(year==='')
        {
            alert("Select year");
            return;
        }
        else if(branch==='')
        {
            alert("Select Branch");
            return;
        }
        
        else if(college==='')
        {
            alert("Select college");
            return;
        }
        else if(batch==='')
        {
            alert("Select Batch");
            return;
        }
        else if(file==='')
        {
            alert("Submit Any File");
            return;
        }
        setIsLoading(true);


        ReactGA.event({
            category: "post",
            /** The type of interaction (e.g. 'play') */
            action: "post button clicked",
            /** Useful for categorizing events (e.g. 'Fall Campaign') */
            label: year,
            /** A numeric value associated with the event (e.g. 42) */
            // value?: number;
            /** Specifies that a hit be considered non-interactive. */
            // nonInteraction?: boolean;
        })
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", 'tcy4cwvj');

        const res = await fetch(
            `https://api.cloudinary.com/v1_1/dokr750ql/image/upload`,
            {
                method: "POST",
                body: data,
            }
        );
        const img = await res.json();

        const link2 = img.secure_url;  // ye link bhi aaega

        // console.log(img.secure_url);
        // setlink(img.secure_url);

        var link3 = `${link2}`;
        var en = 'fl_attachment/';
        var position = link3.indexOf('upload') + 7;
        var link = link3.substr(0, position) + en + link3.substr(position);
        // console.log(link);



        Axios.post('https://examsopedia.herokuapp.com/post', { title, auther, batch, semester, year, branch, teacher, college, link }, { headers: { "Content-Type": "application/json" } })


        setIsLoading(false);
        // window.location.reload(false);
        alert("Uploaded Successfully ( wait for approval from admin )");


        // uploadFile(url, file);
    };

    // const uploadFile = (url, file) => {
    //     let formData = new FormData();

    //     formData.append("title", title);
    //     formData.append("auther", auther);
    //     formData.append("batch", batch);
    //     formData.append("semester", semester);
    //     formData.append("year", year);
    //     formData.append("branch", branch);
    //     formData.append("teacher", teacher);
    //     formData.append("college", college);
    //     formData.append("testImage", file);


    //     Axios.post(url, formData, {

    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     }).then((response) => {
    //         console.log(response);
    //         console.log("frontend mei post button dbgya")
    //     }).catch((error) => {
    //         console.log(error);
    //         console.log("not pressed button in frontend ")
    //     });
    //     alert("Paper Uploaded Succesfully");

    //     window.location.reload(false);
    // };



    // const post1 = () => {
    //     console.log("post function called");
    //     // setdebug("hello");
    //     Axios.post('http://localhost:4000/post', { title, auther, batch, semester, year, branch, teacher, driveLink, college })
    //     // .then(res => {
    //     //     return res.json()
    //     // })


    //     window.location.reload(false);

    // }


    return (

        <div>
            <header class="header">
                <a href="/" class="logo"> <i class="fas fa-book-reader"></i> ExamsOpedia </a>

                <nav class="navbar">
                    <div id="nav-close" class="fas fa-times"></div>

                    {/* 
                    <a href="#about">SEARCH</a>

                    <a href="#shop">CONTACT US</a> */}


                </nav>

            </header>

            <section>



                <div class="form form-body">
                    <div class="title">Welcome</div>
                    <div class="subtitle">Upload Your PYQ!</div>

                    <div class="input-container ic2">
                        <input id="lastname" class="input" type="text" placeholder=" " onChange={(e) => setauther(e.target.value)} required />
                        <div class="cut"></div>
                        <h4 for="lastname" class="placeholder">YOUR NAME</h4>
                    </div>
                    {/* <div class="input-container ic2">
            <input id="email" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">Email</label>
        </div>  */}
                    <div class="input-container ic2">
                        <input id="lastname" class="input" type="text" placeholder=" " onChange={(e) => settitle(e.target.value)} />
                        <div class="cut"></div>
                        <h4 for="lastname" class="placeholder">SUBJECT</h4>
                    </div>
                    <div class="input-container ic2">
                        <input id="lastname" class="input" type="text" placeholder=" " onChange={(e) => setteacher(e.target.value)} />
                        <div class="cut"></div>
                        <h4 for="lastname" class="placeholder">TEACHER</h4>
                    </div>
                    <h4 for="myfile " class="ic2" style={{ color: "white" }}>Select atleast one option from each</h4>




                    <div class="input-container ic2">
                        <select class="input placeholder2" onChange={(e) => setsemester(e.target.value)} searchable="Search here.." >
                            <option value='' selected>Not Selected</option>
                            <option value='1st'>1st</option>
                            <option value='2nd'>2nd</option>
                            <option value='3rd'>3rd</option>
                            <option value='4th'>4th</option>
                            <option value='5th'>5th</option>
                            <option value='6th'>6th</option>
                            <option value='7th'>7th</option>
                            <option value='8th'>8th</option>
                        </select>
                        <div class="cut"></div>
                        <h4 for="lastname" class="placeholder">SEMESTER</h4>
                    </div>

                    <div class="input-container ic2">
                        <select class="input placeholder2" onChange={(e) => setyear(e.target.value)} searchable="Search here.." >
                            <option value='' selected>Not Selected</option>
                            <option value='1st'>1st</option>
                            <option value='2nd'>2nd</option>
                            <option value='3rd'>3rd</option>
                            <option value='4th'>4th</option>
                        </select>
                        <div class="cut"></div>
                        <h4 for="lastname" class="placeholder">YEAR</h4>
                    </div>

                    <div class="input-container ic2">
                        <select class="input placeholder2" onChange={(e) => setbranch(e.target.value)}  >
                            <option value='' selected>Not Selected</option>
                            <option value='CE'>CE</option>
                            <option value='CSDS'>CSDS</option>
                            <option value='EEIOT'>EEIOT</option>
                            <option value='RAI'>RAI</option>
                            <option value='ENC'>ENC</option>
                            <option value='ECE'>ECE</option>
                            <option value='IT'>IT</option>
                            <option value='EIC'>EIC</option>
                            <option value='MECHANICAL'>MECHANICAL</option>
                            <option value='CIVIL'>CIVIL</option>
                            <option value='ELECTRICAL'>ELECTRICAL</option>

                        </select>
                        <div class="cut"></div>
                        <h4 for="lastname" class="placeholder">BRANCH</h4>
                    </div>

                    <div class="input-container ic2">
                        <select class="input placeholder2" onChange={(e) => setcollege(e.target.value)} >
                            <option value='' selected>Not Selected</option>
                            <option value='YMCA'>YMCA</option>
                            <option value='ACEM Faridabad'>ACEM Faridabad</option>
                            <option value='Echelon Institute of Technology, Faridabad'>Echelon Institute of Technology, Faridabad</option>
                            <option value='NGF College of Engineering and Technology, Palwal'>NGF College of Engineering and Technology, Palwal</option>
                            <option value='SRCEM Palwal'>SRCEM Palwal</option>
                            <option value='BS Anangpuria Institute of Technology and Management, Faridabad'>BS Anangpuria Institute of Technology and Management, Faridabad</option>
                            <option value='AITM Palwal'>AITM Palwal</option>
                            <option value='ACTM Palwal'>ACTM Palwal</option>
                            <option value='Satyug Darshan Institute of Engineering and Technology, Faridabad'>Satyug Darshan Institute of Engineering and Technology, Faridabad</option>

                        </select>
                        <div class="cut"></div>
                        <h4 for="lastname" class="placeholder">COLLEGE</h4>
                    </div>

                    <div class="input-container ic2">
                        <select class="input placeholder2" placeholder=" " onChange={(e) => setbatch(e.target.value)}>

                            <option value='' selected>Not Selected</option>

                            <option value='2016-20' >2016-20</option>
                            <option value='2017-21'>2017-21</option>
                            <option value='2018-22'>2018-22</option>
                            <option value='2019-23'>2019-23</option>
                            <option value='2020-24'>2020-24</option>
                            <option value='2021-25'>2021-25</option>
                            <option value='2022-26'>2022-26</option>

                        </select>
                        <div class="cut"></div>
                        <h4 for="lastname" class="placeholder">BATCH</h4>
                    </div>



                    <div class="input-container ic2">
                        <h4 for="myfile " style={{ color: "white", paddingBottom: "15px" }}>Upload a file</h4>
                        <input class="input placeholder2" style={{ paddingTop: "15px" }} type="file" id="myfile" onChange={(e) => setfile(e.target.files[0])} accept="image/*,application/pdf" />
                    </div>
                    
                    {isLoading ? <LoadingSpinner /> : null }
                    <div class="ic2">
                        
                        <button type="text" class="submit ic2"  onClick={Post1}>submit</button>
                    </div>

                </div>

            </section>





        </div>

    );
}

export default Post;