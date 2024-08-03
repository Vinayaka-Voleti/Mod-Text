import React ,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextArea(props) {
  const [text,setText] = useState("");
  const OnClickBtnUpper = ()=> {
    // console.log("Ayy Hottie! React umm.. " + text);
    let newTextUpper = text.toUpperCase();
    setText(newTextUpper);
    text.length===0?props.showAlert("Enter somthing in the textArea!!","danger"):props.showAlert("Enabled Text to UpperCase!","success");
  }
  const OnClickBtnLower = ()=>{
    let newTexLower = text.toLowerCase();
    setText(newTexLower);
    text.length===0?props.showAlert("Enter somthing in the textArea!!","danger"):props.showAlert("Enabled Text to LowerCase!","success");
  }
  const OnClickBtnClear = ()=>{
    let TextClear = "";
    setText(TextClear);
    text.length===0?props.showAlert("Enter somthing in the textArea!!","danger"):props.showAlert("Enabled Text to null!","warning");
  }
  const OnClickBtnSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    text.length===0?props.showAlert("Enter somthing in the textArea!!","danger"):props.showAlert("Enabled Text to Speak!","warning");
  }
  const ReverseText = ()=>{
    let revText ="";
    for(let i = text.length-1 ; i>=0; i--){
      revText += text[i];
    }
    setText(revText);
    text.length===0?props.showAlert("Enter somthing in the textArea!!","danger"):props.showAlert("Enabled Text to ReverseText!","success");
  }
  const OnClickBtnRemoveExtraSpace =()=>{
    let trim=text.trim().split(" ");
    const trim1= trim.filter(trim=>trim.length!==0).join(" ");
    setText(trim1);
    text.length===0?props.showAlert("Enter somthing in the textArea!!","danger"):props.showAlert("Enabled Text to Remove Extra Space!","success");
  }



  const OnChange = (event)=> {
    // console.log("OnChange");
    setText(event.target.value);
  }
  
  
  return (
    <>
    {/* <div> */}
        {/* <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{props.emailAddress}</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div> */}
    <div className="mb-3"  >
        <h1>{props.label}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" onChange={OnChange}  value={text} placeholder='Enter a text here' style={{backgroundColor: props.mode==='dark'?'#212529':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={OnClickBtnUpper} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" id='BtnSpace' onClick={OnClickBtnLower}>Convert to LowerCase</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={OnClickBtnSpeak}>Speak</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ReverseText}>Text Reverse</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={OnClickBtnClear}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={OnClickBtnRemoveExtraSpace}>Remove Extra Spaces</button>
        {/* <button className="btn btn-primary mx-2" >Undo</button> */}


    </div>
      
    <div className="container my-3 ">
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((blank)=>{return blank.length !==0 }).length} words and {text.length} characters</p>
      <p>Read in {0.008*text.split(/\s+/).filter((blank)=>{return blank.length !==0 }).length} Minutes</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Nothing to Preview!'}</p>
    </div>
    </>
  )
}

// TextArea.propTypes ={
//   emailAddress: PropTypes.string,
//   label: PropTypes.string,

// }
