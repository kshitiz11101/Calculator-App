export const Button=({val,input,fn})=>{
   const show=()=>{
      fn(val);
console.log('Click Happen',val);

   }
   let button_style = "btn btn-outline-secondary m-3 btn-lg";
    if(val == '='){
        button_style = "btn btn-outline-primary m-3 btn-lg";
    }
    if(val=='Back'){
        button_style = "btn btn-outline-success m-3 btn-lg";

    }
    if(val=='AC'){
        button_style = "btn btn-danger m-3 btn-lg";
    }
   return(
      <>
      <button onClick={show} className={button_style}>{val}</button>
      </>
     )
      
}