//react import
import React from 'react';
//css import
import './home.css'
//component import
import { Link } from 'react-router-dom';

const FakeData = [
    {
        id: 1,
        name: 'Child support',
        img: './childSupport.png'
    },
    {
        id: 2,
        name: 'Refuge shelter',
        img: './refuseShelter.png'
    },
    {
        id: 3,
        name: 'Food charity',
        img: './foodCharity.png'
    },
    {
        id: 4,
        name: 'Host clothing swap',
        img: './clothSwap.png'
    },
    {
        id: 5,
        name: 'Host river clean',
        img: './riverClean.png'
    },
    {
        id: 6,
        name: 'Clean water',
        img: './cleanWater.png'
    },
    {
        id: 7,
        name: 'Good education',
        img: './goodEducation.png'
    },
    {
        id: 8,
        name: 'New books for children',
        img: './newBooks.png'
    },
    {
        id: 9,
        name: 'Organize books at library',
        img: './libraryBooks.png'
    },
    {
        id: 10,
        name: 'Seminar on driving safety',
        img: './driveSafety.png'
    },
    {
        id: 11,
        name: 'Host study group',
        img: './studyGroup.png'
    },
    {
        id: 12,
        name: 'Build bird house',
        img: './birdHouse.png'
    },
    {
        id: 13,
        name: 'Free music lessons',
        img: './musicLessons.png'
    },
    {
        id: 14,
        name: 'Teach people vote registration',
        img: './voteRegister.png'
    },
    {
        id: 15,
        name: 'Foster a Shelter animal',
        img: './animalShelter.png'
    },
    {
        id: 16,
        name: 'Babysit during PTA meetings',
        img: './babySit.png'
    },
    {
        id: 17,
        name: 'Clean up local park',
        img: './cleanPark.png'
    },
    {
        id: 18,
        name: 'Give IT help to local adults',
        img: './ITHelp.png'
    },
    {
        id: 19,
        name: 'Collect stuffed animals',
        img: './stuffedAnimals.png'
    },
    {
        id: 20,
        name: 'Collect school supplies',
        img: './schoolSupplies.png'
    },
];


const home = () => {
    return (
        <div>
            <div className="d-flex row">
                {
                    FakeData.map(data => 
                        <div className="simple-card">
                            <img src={require(`${data.img}`)} alt="" className="simple-card-img" />
                            <Link to={`/register/${data.name}`}>
                            <button className="reset-btn">
                                <div className="simple-card-text"><h2>{data.name}</h2></div>
                            </button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default home;