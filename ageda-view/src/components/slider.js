import React from 'react'
import uno from './img/sonrie.jpg'
import dos from './img/estu2.jpg'
import tre from './img/estu1.jpg'
import { Carousel} from 'react-bootstrap';
import './style/slider.css'
class slider extends React.Component{
    render(){
        return <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={uno}
                    alt="First slide"
                    id="slider"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={dos}
                    alt="Second slide"
                    id="slider"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={tre}
                    alt="Third slide"
                    id="slider"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    }
}
export default slider;