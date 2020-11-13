
import Navbar from '../Home/Navbar/Navbar';
import React, { useState }from 'react';
import MultiImageInput from 'react-multiple-image-input';
const MultipleImage = () => {
    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
    };

    const [images, setImages] = useState({});
    return (
        <>
            <Navbar></Navbar>
            <div className="mt-5">
            <form action="#" method="">
            <MultiImageInput
            
                images={images}
                setImages={setImages}
                cropConfig={{ crop, ruleOfThirds: true }}
            />
        </form>
            </div>
        </>
    );
};

export default MultipleImage;