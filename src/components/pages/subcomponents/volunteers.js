import React from 'react';
import './css/volunteers.css'; // Assuming you have a separate CSS file for styles
import JY from './img/JY.jpeg';
import JH from './img/JH.JPEG';
import DJ from './img/DJ.png';

const volunteersData = [
    {
        name: "Jackson Huish",
        about: "I love the water and riding my moped. I also play Halo and Forza, but I'm down to play anything.",
        console: "Xbox 1",
        gamertag: "@henryruggs",
        photo: JH
    },
    {
        name: "Josh Yeargin",
        about: "I enjoy sports and am studying to become a dentist. I like to play COD, Rocket League and Skyrim",
        console: "Xbox 1",
        gamertag: "@offthebeach",
        photo: JY
    },
    {
        name: "Drake Jackman",
        about: "I enjoy cooking food and being a beast. I also like to play Halo and Mindcraft.",
        console: "Xbox 1",
        gamertag: "@imgay",
        photo: DJ
    },
    // Add other volunteers here...
];

const Volunteers = () => {
    return (
        <div className="container volunteers-container text-center" id="volunteers-container">
            <h1>Gaming Guys</h1>
            <div className="row">
                {volunteersData.map(volunteer => (
                    <div className="col-md-4 mb-3" key={volunteer.name}>
                        <div className="card volunteers-card text-left">
                            <div className="card-body">
                                <h3 className="card-title text-center">{volunteer.name}</h3>
                                <div className="image-container">
                                    <img src={volunteer.photo} alt={volunteer.name} className="img-fluid" />
                                </div>
                                <p className="card-text about"><span style={{fontWeight:"bold"}}>About: </span>{volunteer.about}</p>
                                <p className="card-text"><span style={{fontWeight:"bold"}}>Consoles: </span> {volunteer.console}</p>
                                <p className="card-text"><span style={{fontWeight:"bold"}}>Gamertag: </span> {volunteer.gamertag}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Volunteers;
