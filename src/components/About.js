import React, { useState } from 'react'

export default function
    () {

    const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btntext, setbtntext] = useState("Enable Dark Mode")


    const togglestyle = () => {
        if (mystyle.color === 'black') {
            setmystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setbtntext("Enable light Mode")
        }
        else {
            setmystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable Dark Mode")
        }
    }

    return (
        <div classNameName='container' style={mystyle}>
            <div className="accordion" id="accordionExample">
                <h2 classNameName='my-3'>About us</h2>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                            Intro
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Hy, Amaan this side.</strong> I am intern in GlobalLogic and also pursuing my Btech from Amity University    
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                            Technology used 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>I have used : </strong> Reactjs to build this project.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                            About this project
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Text Manipulation App</strong> It is used to manipulate the text like convert to uppercase, lowercase, capitalized, remove extra spaces and clear text. It also contains different background color themes.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <button onClick={togglestyle} type='button' className='btn btn-dark'>{btntext}</button>
            </div>
        </div>
    )
}
