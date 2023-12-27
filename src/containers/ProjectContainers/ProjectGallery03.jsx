import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard04 from '../../components/ProjectElements/ProjectCard04';

const ProjectGallery03 = () => {
    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            },
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            // columnWidth: '.grid-sizer',
        })

        // cleanup
        return () => Isotope.current.destroy()

    }, []);

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? Isotope.current.arrange({ filter: `*` })
            : Isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey]);

    const handleFilterKeyChange = key => () => setFilterKey(key)

    return (
        <main className="wrapper">

            <section className="projects packery bg-transparent project-grid-list">
                <div className="container">
                    <div className="portfolio-filters-content">
                        <div className="filters-button-group">
                            <button className="button is-checked" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                            {/* <button className="button" onClick={handleFilterKeyChange('exterior')}>Exterior <sup className="filter-count"></sup></button> */}
                            <button className="button" onClick={handleFilterKeyChange('residences')}>Residences <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('interiors')}>Interiors <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('landscape')}>Landscape <sup className="filter-count"></sup></button>
                        </div>
                    </div>

                    <div className="grid gutter-20 grid-1 clearfix">
                        <div className="grid-sizer"></div>
                        <div className="grid-item residences">
                            <ProjectCard04 img='images/portfolio/grid-list/1.jpg' details='红木家居到艺术品转变的见证' />
                        </div>
                        <div className="grid-item interiors">
                            <ProjectCard04 img='images/portfolio/grid-list/2.jpg' details='红木家居到艺术品转变的见证' />
                        </div>
                        <div className="grid-item residences">
                            <ProjectCard04 img='images/portfolio/grid-list/3.jpg' details='红木家居到艺术品转变的见证' />
                        </div>
                        {/* <div className="grid-item exterior">
                            <ProjectCard04 img='images/portfolio/grid-list/4.jpg' details='Well decor house in Sydney' />
                        </div> */}
                        <div className="grid-item landscape">
                            <ProjectCard04 img='images/portfolio/grid-list/5.jpg' details='红木家居到艺术品转变的见证' />
                        </div>

                    </div>
                    {/* <div className="btn_group w-100 text-center">
                        <button id="load-more" className="btn gray">Load More</button>
                    </div> */}
                </div>
            </section>
        </main>
    );
};

export default ProjectGallery03;