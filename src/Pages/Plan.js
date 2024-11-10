import { Link } from 'react-router-dom';
import logo from '../Components/IMg/—Pngtree—how to e learning_6555189.png';
import { useState } from 'react';
import React from 'react';
 
 
const ProgramBox = ({ title, year1, year2, image1, image2 }) => {
    const [show, setShow] = useState(false);
    const [isRotated, setIsRotated] = useState(false);
    const [bgColor, setBgColor] = useState("transparent");

    const handleToggle = () => {
        setShow(!show);
        setIsRotated(!isRotated);
        setBgColor(show ? "transparent" : "NULL");
    };

    return (
        <div className="box1">
            <h1>{title}</h1>
            <span 
                onClick={handleToggle} 
                style={{ 
                    backgroundColor: bgColor, 
                    transform: isRotated ? "rotate(180deg)" : "rotate(90deg)", 
                    transition: "transform 0.3s ease" 
                }}
            >
            </span>
            <div className="material-symbols-outlined">
                {show && (
                    <div> 
                     
                        <div className='C2018'>
                            <a href={image1} download={`${title}-${year1}.png`}>تحميل</a>
                            <h2>{title} {year1}</h2>
                        </div>
                     
                        <div className='C2018'>
                            <a href={image2} download={`${title}-${year2}.png`}>تحميل</a>
                            <h2>{title} {year2}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Main Plan Component
export default function Plan() {
    return (
        <div>
            <div className="Plan">
                <Link to="/Home">
                    <img src={logo} alt="Plans Icon" width={"100px"} />
                </Link>
                <h1 dir='rtl'>الخطط الدراسية <h3>يمكنك الاطلاع على الخطط الدراسية</h3></h1>
            </div>
            <div>
                <ProgramBox title="CS" year1="2018" year2="2022"   />  
                <ProgramBox title="CIS" year1="2018" year2="2022"   />
                <ProgramBox title="BIT" year1="2018" year2="2022"   />
                <ProgramBox title="AI" year1="2020" year2="2022" />
                <ProgramBox title="DS" year1="2020" year2="2022"   />
                <ProgramBox title="CYS" year1="2021" year2="2022"  />
            </div>
        </div>
    );
}