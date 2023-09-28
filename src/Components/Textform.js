import React,{useState} from "react";

export default function Textform(props) {
    const handleUpChange = ()=>{
        // console.log("upper case clicked");
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    const handlelwChange = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext)
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        settext(event.target.value)
    }
    const[text,settext] = useState('Enter text here');
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpChange}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handlelwChange}>Convert to LowerCase</button>
    </div>
  );
}
