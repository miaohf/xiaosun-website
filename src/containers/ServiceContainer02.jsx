import React from 'react';
import ServiceCard02 from '../components/ServiceCard02';

const ServiceContainer02 = () => {
    return (
        <main className="wrapper">
            <section className="services inner in-service pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" >
                            <ServiceCard02 img01='images/icon_box/bg-1.jpg' img02="images/icon_box/1.png" title="红木1" text="让手艺拥抱科技" />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard02 img01="images/icon_box/bg-2.jpg" img02="images/icon_box/2.png" title="红木2" text="让手艺拥抱科技" />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard02 img01="images/icon_box/bg-3.jpg" img02="images/icon_box/3.png" title="红木3" text="让手艺拥抱科技" />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard02 img01="images/icon_box/bg-4.jpg" img02="images/icon_box/4.png" title="红木4" text="让手艺拥抱科技" />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard02 img01="images/icon_box/bg-5.jpg" img02="images/icon_box/5.png" title="红木5" text="让手艺拥抱科技" />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard02 img01="images/icon_box/bg-6.jpg" img02="images/icon_box/6.png" title="红木6" text="让手艺拥抱科技" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default ServiceContainer02;