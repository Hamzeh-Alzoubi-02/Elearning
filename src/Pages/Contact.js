import { useState } from "react";

export default function Contact() {
    const [activeDepartment, setActiveDepartment] = useState("CS");

    const  CSData = {
        CS: [
            { name: "حمزة الزعبي",
                 email: "hmz@ju.edu.jo",
                  department: "CS" 

            },
        ],
    };

    const  CISData = {
        CIS: [
            { name: "حمزة الزعبي",
                 email: "hmz@ju.edu.jo",
                  department: "CIS" 

            },
        ],
    };
   const  BITData = {
       BIT: [
           {
               name: "رضوان",
               email: "	rodwan@gmail.com",
               department: "BIT",
           }   
        ]
   } 
   const AIData={
    AI:[
        {
            name: "علي الجراح",
            email: "ali@gmail.com",
            department: "AI",
        }
    ]
   }
   const renderData = () => {
    switch (activeDepartment) {
        case "CS":
            return CSData.CS.map((item, index) => (
                <tr key={index}>
                    <td>{item.department}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                </tr>
            ));
        case "CIS":
            return CISData.CIS.map((item, index) => (
                <tr key={index}>
                    <td>{item.department}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                </tr>
            ));
        case "BIT":
            return BITData.BIT.map((item, index) => (
                <tr key={index}>
                    <td>{item.department}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                </tr>
            ));
        case "AI":
            return AIData.AI.map((item, index) => (
                <tr key={index}>
                    <td>{item.department}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                </tr>
            ));
        default:
            return null;
    }
};

    return (
        <div className="contactForm">
            <h1 dir="rtl">تواصل مع معلمك</h1>
            <div className="department"> 
            <button onClick={() => setActiveDepartment("CS")}>CS</button>
                <button onClick={() => setActiveDepartment("CIS")}>CIS</button>
                <button onClick={() => setActiveDepartment("BIT")}>BIT</button>
                <button onClick={() => setActiveDepartment("AI")}>AI</button>
            </div>
            <div className="Contact">
                <div className="tableForm">
                    <table>
                        <thead>
                            <tr>
                                <th>القسم</th>
                                <th>البريد الالكتروني</th>
                                <th>الاسم</th>
                            </tr>
                        </thead>
                        <tbody>
                        {renderData()}
                           
                        </tbody>
                    </table>
                </div>
            </div>
            
         
        </div>
    );
}
