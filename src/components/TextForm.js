import React, {useState} from 'react'


export default function TextForm(props) {

    const handkeUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }

    const handkedownClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }

    const handkeclearClick=()=>{
        let newText=''
        setText(newText)
        props.showAlert("Text is cleared", "success");
    }

    const handkecapClick=()=>{
        let newText = text.split(" ").map((e)=>{
            let newText = e[0].toUpperCase() + e.slice(1);
            return newText
        })
        setText(newText.join(" "));
        props.showAlert("Captalized", "success");
    }

    const handkeextra=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", "success");
    }


    const handleOnChange=(event)=>{
        setText(event.target.value)
    }


    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color : props.mode === 'dark'? 'white' : 'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-dark" onClick={handkeUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-3 my-1" onClick={handkedownClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-3 my-1" onClick={handkeclearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-3 my-1" onClick={handkecapClick}>Capitalize Text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-3 my-1" onClick={handkeextra}>Remove Extra Text</button>
            
        </div>

        <div className="container my-4" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p><strong>{text.split(" ").filter((a)=>{return a.length!==0}).length} words and {text.length} characters</strong></p>
            <p><strong>{0.008 * text.split(" ").filter((a)=>{return a.length!==0}).length} minutes to read</strong></p>
            <h2>Preview</h2>
            <p><strong>{text.length>0?text:"Enter something in the above textbox to preview"}</strong></p>
        </div>
        </>
    )
}
