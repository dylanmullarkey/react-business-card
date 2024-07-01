import React from "react"

export default function Info(){
    return(
        <div className="info-container">
            <img src="../images/headshot.jpg"/>
            <h1 className="info-name">Dylan Mullarkey</h1>
            <h2 className="info-job">Frontend Developer</h2>
            <h3 className="info-uni">University of Cincinnati </h3>
            <div className="info-btn-container">
                <a href= "mailto: mullardt@mail.uc.edu" className="btn-email" target="_blank">Email</a>
                <a href="https://www.linkedin.com/in/dylanmullarkey/" className="btn-linkedIn" target="_blank">LinkedIn</a>
            </div>
            
        </div>
    )
}