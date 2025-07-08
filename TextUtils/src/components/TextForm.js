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
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard", "success");
    }

    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="mb-3" >
      <label htmlFor="mybox" className="form-label"><h2>{props.title}</h2></label>
      <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(46 94 27 / 17%)':'white', color: props.mode==='dark'?'white':'black' }}></textarea>
</div>
<button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handleUpClick}>Convert to Upper case</button>
<button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handleLoClick}>Convert to Lower case</button>
<button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handleClear}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2> Your text summary</h2>
      <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length)*0.008} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
