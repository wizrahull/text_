import { render } from "@testing-library/react";
import  React , { useState } from "react";




export default function TextForm(){


const [text, setText] = useState("")
  
 
const change = (event)=>{

  setText(event.target.value)

 }
   
 const toUpperCase = () => {

      setText(text.toLocaleUpperCase())

 }

 const finder = () => {

   

}

 const toLowerCase = () => {

  setText(text.toLocaleLowerCase())
  

}
const textcol= () =>{

  render (
     <input  class="mb-4 " type="color" name="color1" id="" />
     
  )

}

const reset = ()=>{

  setText("")

}

    return (
      
      <>

     
        <div class="mb-4 container   ">
          <label for="exampleFormControlTextarea1" class="form-label my-5"><b>Enter Your Text</b></label>
          <textarea onChange={change} value={text} style={{height: "300px"}}class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>

        <button  onClick={toUpperCase} className="btn "> Upper Case</button>
        <button  onClick={toLowerCase} className="btn "> Lower Case</button>
        <button  onClick={textcol} className="btn "> Change Color </button>
        <button  onClick={reset} className="btn "> Clear </button>
          Character  : {(text.length)} Word :  {(text.split(" ").length)-1}

        
         <h3>  Preview :  </h3>

         <div>  {text}  </div>
        </div>



    




     </>

    )
}

