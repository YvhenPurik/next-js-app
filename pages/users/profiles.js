import React from 'react'
import Nav from '../../components/nav'
import axios from 'axios'

class Home extends React.Component  {
  static async getInitialProps({pathname,query,asPth,req,res}){
    let userData;
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    
    try {
      userData = response.data
      //console.log('userData',userData)
    } catch (error) {
       console.error('error',error)
    }
    console.log('context',pathname)
    return{
         user:{
           firasname:'jenya',
           lastName:"Purik"
         }
    }
    
  }
  constructor(props){
    super(props)
     
  }
  render(){
  //  let res = this.props.userData.map((el)=>{
  //     return el
  //   })
   //console.log('props',this.props)
    return(
      <div>
      <Nav/>
    <p>{"res"}</p>
    <h>Helo world users profale 1231231</h>
  </div>
    )
  }
  
}

export default Home
