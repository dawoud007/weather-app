import React from 'react'
const Weather=(props)=>{


    return(
<div>

{
  props.tempreature&&<p>tempture:{props.tempreature}</p>
}
{
props.city&&<p>city: {props.city}</p>
}
{
props.country&&<p>country:{props.country}</p>
}
{
props.humidity&&<p>humidity:{props.humidity}</p>
}
{
props.description&&<p>description:{props.description}</p>
}

</div>


    )

}
export default Weather
