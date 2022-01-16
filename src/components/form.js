import React from 'react'
const Form=(props)=>{

    return(


<form onSubmit={props.getWeather}>
<input type="text" name="city" placeholder="enter city"/>
<input type="text" name="country" placeholder="enter country"/>
<button className="btn" >Get weather</button>
</form>



    )

}
export default Form
