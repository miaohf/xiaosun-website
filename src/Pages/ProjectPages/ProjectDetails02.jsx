import React from 'react';
import PageBanner from '../../containers/PageBanner';
import ProjectDetailsContainer02 from '../../containers/ProjectContainers/ProjectDetailsContainer02';

const ProjectDetails02 = () => {
    return (
        <main className="wrapper">
            <PageBanner pageTitle='Projects' title="Project Details" activePage="让手艺拥抱科技" />
            <ProjectDetailsContainer02 />
        </main>
    );
};

export default ProjectDetails02;