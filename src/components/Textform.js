import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
      // console.log('Uppercase was Clicked');
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase", "success");
    }

    const handleClearClick = ()=>{
      let newText = '';
      setText(newText);
      props.showAlert("Text Removed", "success ");

    }

    const handleOnChange = (event)=>{
      // console.log('On Changed');
      setText(event.target.value)
    }

    const handleLoClick = ()=>{
      // console.log('Uppercase was Clicked');
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase", "success ");
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Space Removed" , "success ");
    }

    
    const [text, setText] = useState('');
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white': '#042743'}}>
            <h1> {props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white': '#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}  >Convert to UpperCase</button>
    <button className="btn btn-primary mx-2 my-2 " onClick={handleLoClick} >Convert to LowerCase</button>
    <button className="btn btn-primary mx-2 my-2 " onClick={handleClearClick} >Clear</button>
    <button className="btn btn-primary mx-2 my-2 " onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white': '#042743'}} >
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p> {0.008 * text.split(" ").length } Minutes Read </p>
          <h2>Preview</h2>
          <p> {text.length>0?text:"Enter something in the Textbox above to preview it here"} </p>
        </div>
        {/* <hr /><hr /><hr /> */}
    </>
  )
}
