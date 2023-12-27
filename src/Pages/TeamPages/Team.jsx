import React from 'react';
import PageBanner from '../../containers/PageBanner';
import TeamContainer from '../../containers/TeamContainers/TeamContainer';

const Team = () => {
    return (
        <>
            <PageBanner pageTitle='Pages' title="关于我们" activePage="Team" />
            <main className="wrapper">
                <TeamContainer />
            </main>
        </>
    );
};

export default Team;