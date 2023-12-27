import React from 'react';
import AboutContainer from '../../containers/AboutContainers/AboutContainer';
import Blogs from '../../containers/Blogs';
import FormContainer from '../../containers/FormContainer';
import FunFacts from '../../containers/FunFacts/FunFacts';
import ProjectGallery from '../../containers/ProjectContainers/ProjectGallery';
import RunningProjects from '../../containers/RunningProjects';
import Services from '../../containers/Services';
import Sliders from '../../containers/SliderContainers/Sliders';
import Testimonials from '../../containers/Testimonials';
import TeamContainer02 from '../../containers/TeamContainers/TeamContainer02';
import ProjectGallery09 from '../../containers/ProjectContainers/ProjectGallery09';

const Home01 = () => {
    return (
        <div className="wrapper">
            <Sliders />
            {/* <Services /> */}
            <AboutContainer />
            {/* <TeamContainer02 /> */}
            <FunFacts className='funfacts bg_1' />
            {/* <RunningProjects /> */}
            {/* <ProjectGallery /> */}
            <ProjectGallery09 className='funfacts'/>
            {/* <Testimonials /> */}
            <Blogs />
           
            {/* <FormContainer /> */}
        </div>
    );
};

export default Home01;