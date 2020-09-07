import React, { Component } from 'react'
import axios from 'axios'
export default  class WeatherApp extends Component
{

    constructor(props){
        super(props)
        this.state={
            city : '' ,
            apikey : '85a9290dac37771c709a50abe671f71f',
            data : '',
            temp : '',
            feelsLike : '',
            lat : '',
            long : '' ,
            des : ''
        

    }

}
    handler=(evt)=>
    {
        this.setState({
            city : evt.target.value
        })
        console.log(this.state.city)
    }


    submitHandler=(evt)=>
    {

        evt.preventDefault();
        axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${this.state.apikey}`).then((Response)=>{
            console.log(Response.data)

            this.setState({
                data : Response.data

            })
            
            for (const [key, value] of Object.entries(this.state.data)) {
                console.log(`key: ${key}, value: ${value}`)
                if(key==='main')
                {
                    console.log("Got it ")
                    console.log(value.temp)
                            this.setState({temp : value.temp})
                            this.setState({
                                feelsLike : value.feels_like
                            })
                }
                if(key==='coord')
                {
                    this.setState({
                        lat : value.lat,
                        long : value.lon
                    })
                }
                if(key==='weather')
                {

                    this.setState({
                        des : value[0].description
                    })
                }
               
              }
        }).catch((error)=>
        {
            console.log(error)
        })
    }

    componentDidMount()
    {

      
    }
    render()
    {
      return(
         
<div id="banner">
  <div id="cloud-scroll">



  <div className="app">
  <div class="card container">
  <div class="card-body">

  <form class="form-inline" onSubmit={this.submitHandler}>
  <div class="form-group">
    <input type="text" id="inputPassword6" class="form-control mx-sm-3" placeholder="City"  className="form-control" onChange={this.handler} />
    <button type="submit" className="btn" value="Search"  >Search</button>
   
  </div>
</form>


      </div> </div>
  <div class="card b">
  <div class="card-header"> <h3>{this.state.data.name} </h3></div>
  <text>TimeZone : {this.state.data.timezone}</text>
      <div class="card-block special-card">
         <text> Temperature : {this.state.temp} </text> <br></br>
         <text> Description : {this.state.des} </text> <br></br>

     <text> Feels Like : {this.state.feelsLike} </text> <br></br>

     <text> Latitude : {this.state.lat} </text>
     <br></br>
     <text> Longitutde : {this.state.long} </text> <br></br>

      </div>
      
  <div class="card-footer"></div>
</div>
</div>

                
  </div>
</div>

          ) 
        }
}