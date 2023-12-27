import React from 'react';

const SliderCard = ({ bgImage }) => {
    return (
        <div className="slider" style={{ backgroundImage: `url(${bgImage})`, height: '560px' }}>
        </div>
    );
};

export default SliderCard;