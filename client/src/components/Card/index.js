
import React from "react";



function Card(props) {

    // console.log(props);
    return (


        <div className="col-md-3">

            <div className="work-box" >
                <a href={props.link} target="_blank" rel="noreferrer">
                    <div className="work-img">
                        <img src={props.image} alt="description" width="250" height="250" className="img-responsive" />
                    </div>

                    <h2 className="w-title">{props.name}</h2>

                </a>
            </div>

        </div>


    )
}

export default Card;