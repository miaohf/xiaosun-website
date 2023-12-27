import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {

    return (
        <section className="services bg-dark-100 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4" >
                        <ServiceCard number="01" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="精细木作技艺" text="江苏工美红木文化艺术研究所被列为国家级非遗项目“精细木作技艺”传承示范基地，保护、传承和发展传统文化技艺" />
                    </div>
                    <div className="col-lg-4" >
                        <ServiceCard number="02" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="红木文化艺术" text="红木，作为中华传统文化大树的一个重要分枝，作为木文化中最具代表性的门类，有着崇高的地位和美好的形象，且数百年来长盛不衰" />
                    </div>
                    <div className="col-lg-4" >
                        <ServiceCard number="03" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="传承与发展的平衡" text="在传承和发展之间的博奕和平衡，融入不同时代的特点，才是真正的传承和发展，建立一套完整的工艺体系、传承体系和审美体系，最大限度的发挥人、工具、机械、科技和材料等元素各自的独特价值" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;