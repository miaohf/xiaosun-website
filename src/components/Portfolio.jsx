import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectElements/ProjectCard';
import SectionGridLines from '../components/SectionGridLines';

const Portfolio = () => {
    const ProductData = [
        {
            id: '1',
            img: 'images/portfolio/packery/1.jpg',
            title: '双月洞对料吉字花格架子床',
            details: '该作品使用2042个榫卯',
            tag: 'beds'
        },
        {
            id: '2',
            img: 'images/portfolio/packery/2.jpg',
            title: '杨氏第六代素圈椅套组',
            details: '材料：黑黄檀 Dalbergia cultrata Benth.）',
            tag: 'zuhe'
        },
        {
            id: '3',
            img: 'images/portfolio/packery/3.jpg',
            title: '杨氏第七代素圈椅套组',
            details: '材料：东非黑黄檀 Dalbergi a melanoxylon Guill. & Perr.',
            tag: 'zuhe'
        },
        {
            id: '4',
            img: 'images/portfolio/packery/4.jpg',
            title: '仿竹节圈椅',
            details: '杨金荣老师自创作品',
            tag: 'chairs'
        },
        {
            id: '5',
            img: 'images/portfolio/packery/5.jpg',
            title: '镂空雕麒麟背交椅',
            details: '吴学忠大师作品',
            tag: 'chairs'
        },
        {
            id: '6',
            img: 'images/portfolio/packery/6.jpg',
            title: '同图案双面镂空雕吉祥花鸟屏风',
            details: '',
            tag: 'pingfeng'
        },
        {
            id: '7',
            img: 'images/portfolio/packery/7.jpg',
            title: '镂空绞藤纹茶橱',
            details: '',
            tag: 'chu'
        },
        {
            id: '8',
            img: 'images/portfolio/packery/8.jpg',
            title: '五足圆花架',
            details: '',
            tag: 'huajia'
        },
        {
            id: '9',
            img: 'images/portfolio/packery/9.jpg',
            title: '禹门洞高圆花架',
            details: '',
            tag: 'huajia'
        },
        {
            id: '10',
            img: 'images/portfolio/packery/10.jpg',
            title: '雕绳纹琴桌',
            details: '',
            tag: 'tables'
        },
        {
            id: '11',
            img: 'images/portfolio/packery/11.jpg',
            title: '云纹插角绷藤面茶台',
            details: '',
            tag: 'tables'
        },
        {
            id: '12',
            img: 'images/portfolio/packery/12.jpg',
            title: '一腿三牙裹足条案',
            details: '',
            tag: 'tables'
        },
        {
            id: '13',
            img: 'images/portfolio/packery/13.jpg',
            title: '云纹小条凳',
            details: '',
            tag: 'dengzi'
        },
        {
            id: '14',
            img: 'images/portfolio/packery/14.jpg',
            title: '东非黑黄檀都承盘',
            details: '',
            tag: 'chengpan'
        },
        {
            id: '15',
            img: 'images/portfolio/packery/15.jpg',
            title: '汉风小茶橱',
            details: '',
            tag: 'chu'
        },
        {
            id: '16',
            img: 'images/portfolio/packery/16.jpg',
            title: '凹线条禹门洞鼓型圆桌凳',
            details: '',
            tag: 'zuhe'
        },

    ];

    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            transformsEnabled: true,
            transitionDuration: "600ms",
            resize: true,
            fitWidth: true,
            columnWidth: '.grid-sizer',
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
        <section className="projects packery">
            <SectionGridLines />
            <div className="container">

                <div className="portfolio-filters-content">
                    <div className="filters-button-group">
                        <button className="button" onClick={handleFilterKeyChange('*')}>全部 <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('pingfeng')}>屏风 <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('chairs')}>圈椅 <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('beds')}>架子床 <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('chu')}>橱 <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('huajia')}>花架 <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('tables')}>桌台案 <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('dengzi')}>凳 <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('chengpan')}>承盘 <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('zuhe')}>组合 <sup className="filter-count"></sup></button>
                    </div>
                </div>
                <div className="grid gutter-20 clearfix">
                    <div className="grid-sizer"></div>
                    {
                        ProductData.map(data => <ProjectCard
                            key={data.id}
                            data={data}
                        />)
                    }

                </div>
                {/* <LoadmoreBtn text='Discover All Projects' className='btn olive w-100' /> */}
            </div>
        </section>
    );
};

export default Portfolio;