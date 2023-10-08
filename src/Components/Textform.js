import React,{useState} from "react";

export default function Textform(props) {
    const handleUpChange = ()=>{
        // console.log("upper case clicked");
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("Converted to UpperCase","success");
    }
    const handlelwChange = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("Converted to LowerCase","success");

    }
    const handleClearChange = ()=>{
        let newtext = '';
        settext(newtext);
        props.showalert("Cleared","success");

    }
    const handleCopyChange = ()=>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert("Copied To Clipboard","success");
    }
    const handleextraspace = ()=>{
      let newtext = text.split(/[ ]+/);
      settext(newtext.join(" "))
      props.showalert("Extraspaces Removed ","success");
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        settext(event.target.value)
    }
    const[text,settext] = useState('');
  return (
    <>
      <div className="container my-3" style = {{color:props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" style = {{backgroundColor:props.mode === 'dark' ? '#212121' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-success mx-1 my-1" onClick={handleUpChange}>Convert to UpperCase</button>
      <button className="btn btn-success mx-1 my-1" onClick={handlelwChange}>Convert to LowerCase</button>
      <button className="btn btn-success mx-1 my-1" onClick={handleClearChange}>Clear text</button>
      <button className="btn btn-success mx-1 my-1" onClick={handleCopyChange}>Copy text</button>
      <button className="btn btn-success mx-1 my-1" onClick={handleextraspace}>Remove Extra space</button>
      </div>
      <div className={`container my-3 text-${(props.mode==="light"?"dark":"light")}`}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length*0.008}mins to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to analyze"}</p>
      </div>
    </>
  );
}
