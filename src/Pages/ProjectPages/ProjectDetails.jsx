import React from 'react';
import PageBanner from '../../containers/PageBanner';
import ProjectDetailsContainer from '../../containers/ProjectContainers/ProjectDetailsContainer';

const ProjectDetails = () => {
    return (
        <main className="wrapper">
            <PageBanner pageTitle='Projects' title="项目详情" activePage="让手艺拥抱科技" />
            <ProjectDetailsContainer />

        </main>
    );
};

export default ProjectDetails;