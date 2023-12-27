import React from 'react';
import Video from "../components/Video";
import FormContainer from "../containers/FormContainer";
import FunFacts from '../containers/FunFacts/FunFacts';
import MissionContainer from "../containers/MissionContainer";
import ServiceContainer01 from '../containers/ServiceContainer';
import TeamContainer02 from '../containers/TeamContainers/TeamContainer02';
import Testimonials from '../containers/Testimonials';
import TextAbout from './TextAbout';

const AboutUs = () => {
    const TeamData = [
        {
            id: '1',
            img: 'images/team/1.jpg',
            name: '张师傅',
            designation: '木工',
        },
        {
            id: '2',
            img: 'images/team/2.jpg',
            name: '李师傅',
            designation: '木工',
        },
        {
            id: '3',
            img: 'images/team/3.jpg',
            name: '王师傅',
            designation: '木工',
        },
        {
            id: '4',
            img: 'images/team/4.jpg',
            name: '赵师傅',
            designation: '木工',
        },
        {
            id: '5',
            img: 'images/team/5.jpg',
            name: '苗苗',
            designation: '美术设计',
        },
        {
            id: '6',
            img: 'images/team/6.jpg',
            name: '小青',
            designation: '设计',
        },
        {
            id: '7',
            img: 'images/team/7.jpg',
            name: '小张',
            designation: '机械师',
        },
        {
            id: '8',
            img: 'images/team/8.jpg',
            name: '小卢',
            designation: '木工',
        },
        {
            id: '9',
            img: 'images/team/9.jpg',
            name: '小肖',
            designation: '木工',
        },
    ]

    return (
        <main className="wrapper">
            <MissionContainer />

            <div className="video-block" >
                <Video />
            </div>

            <FunFacts className='funfacts pd-top-lg bg_2' />
            <ServiceContainer01 />
            {/* <TextAbout /> */}
            <TeamContainer02 />
            {/* <Testimonials /> */}
            {/* <FormContainer /> */}
        </main>
    );
};

export default AboutUs;