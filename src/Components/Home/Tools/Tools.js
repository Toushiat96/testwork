import React from 'react';
import react from '../../../images/react.png'
import es6 from '../../../images/es6.png'
import js from '../../../images/js.png'
import node from '../../../images/node.png'
import mongo from '../../../images/mongodb.png'
import bootstrap from '../../../images/bootstrap.png'
import html from '../../../images/html.png'
import css from '../../../images/css.png'
import php from '../../../images/php.png'
import ToolUse from '../ToolUse/ToolUse';
import java from '../../../images/java2.png'
import sass from '../../../images/sass.png'
import wordpress from '../../../images/wordpress.png'

const tools = [
    {
        id:"1",
        img: react,
        title: "React.js"
    },
    {
        id:"2",
        img: es6,
        title: "Es6"
    },
    {
        id:"3",
        img: js,
        title: "JavasCript"
    },
    {
        id:"4",
        img: node,
        title: "Node.js"
    },
    {
        id:"5",
        img: mongo,
        title: "MongoDB"
    },
    {
        id:"6",
        img: bootstrap,
        title: "Bootstrap"
    },
    {
        id:"7",
        img: html,
        title: "HTML"
    },
    {
        id:"8",
        img: css,
        title: "CSS"
    },
    {
        id:"9",
        img: php,
        title: "php"
    },
    {
        id:"10",
        img: java,
        title: "Java"
    },
    {
        id:"11",
        img: wordpress,
        title: "Wordpress"
    },
    {
        id:"12",
        img: sass,
        title: "SASS"
    },
    
];
const Tools = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">The Tools We Use</h1>
            <p className="text-center mt-3">We associate with various platforms and apply a massive number of tools from<br/> our arsenal to make sure we deliver the best.</p>
            <div className="row shadow-none p-3 mb-5 bg-light rounded">
            {
              tools.map(tools => <ToolUse tools={tools}></ToolUse>)
            }
            </div>
        </div>
    );
};

export default Tools;
