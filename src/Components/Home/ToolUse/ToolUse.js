import React from 'react';

const ToolUse = ({tools}) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="skill-icon text-center  m-4  py-5 px-4 card shadow-none">
                <img className="img-fluid" src={tools.img} alt="" />
                <h3>{tools.title}</h3>
            </div>
        </div>
    );
};

export default ToolUse;