import React from 'react';
import Portfolio from '../../components/Portfolio';
import PageBanner03 from '../../containers/PageBanner03';

const Project01 = () => {
    return (
        <>
            <PageBanner03 title="主要藏品" activePage="Projects" />
            <Portfolio text='Load More' className='btn gray' />
        </>
    );
};

export default Project01;