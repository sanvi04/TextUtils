import React, {useState} from 'react'


export default function TextForm(props) {
  
    
    const [text, setText] = useState('');

    const handleOnChange=(event)=>{
      setText(event.target.value)
    }

    const handleUpClick=()=>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to upper case", "success");
    }

    const handleLoClick=()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case", "success");
    }

    const handleClear=()=>{
      
      setText("");
      props.showAlert("Text cleared", "success");
    }

    const handleCopy=()=>{
      var text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");
    }

    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="mb-3" >
      <label htmlFor="mybox" className="form-label"><h2>{props.title}</h2></label>
      <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }}></textarea>
</div>
<button className="btn btn-success mx-3 " onClick={handleUpClick}>Convert to Upper case</button>
<button className="btn btn-success mx-3 " onClick={handleLoClick}>Convert to Lower case</button>
<button className="btn btn-success mx-3 " onClick={handleClear}>Clear Text</button>
<button className="btn btn-success mx-3 " onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2> Your text summary</h2>
      <p> {text.split(" ").length-1} words, {text.length} characters</p>
      <p>{(text.split(" ").length-1)*0.008} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to preview here"}</p>
    </div>
    </>
  )
}
