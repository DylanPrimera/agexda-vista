import React from 'react';
import Nav from '../components/navbar'
import Slider from '../components/slider'
import '../components/style/stylesP.css'
import Texto from '../components/texto'

class principal extends React.Component{
    render(){
        return( <div >
            <div><Nav /></div>
            <div><Slider /></div>
            <div><Texto /></div>
            </div>);   
        
    }
}
export default principal;