import $ from 'jquery';
import React, { useEffect } from 'react';
import FunFact from '../../components/FunFactElements/FunFact';

const FunFacts = (props) => {
    const FunFactData = [
        // {
        //     id: '1',
        //     contentName: '餐厅组合',
        //     contentNumber: '76',
        //     img: 'images/fact-1.png'
        // },
        // {
        //     id: '2',
        //     contentName: '卧室组合',
        //     contentNumber: '110',
        //     plus: '+',
        //     img: 'images/fact-2.png'
        // },
        // {
        //     id: '3',
        //     contentName: '书房组合',
        //     contentNumber: '15',
        //     img: 'images/fact-3.png'
        // },
        // {
        //     id: '4',
        //     contentName: '大厅组合',
        //     contentNumber: '63',
        //     img: 'images/fact-4.png'
        // },
    ];

    useEffect(() => {
        var a = 0;
        $(window).on("scroll", function () {

            var oTop = $('#funfacts').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.fun-number').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1;
            }
        });
    }, []);
    return (
        <div className={props.className} id="funfacts">
            {/* <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="funfacts_inner">
                            {
                                FunFactData.map(data =>
                                    <FunFact
                                        key={data.id}
                                        data={data}
                                    />)
                            }

                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default FunFacts;