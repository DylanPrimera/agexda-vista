import React from 'react';
import cuatro from './img/estud.jpeg';
import './style/texto.css'

class texto extends React.Component{
    render(){
        return <div>
            
      <main>
        <div className="principal">
          <div className="contenedor">
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque maximus faucibus convallis. Duis dictum enim vitae mi vehicula finibus. 
                Suspendisse est ex, feugiat sed augue sed, egestas tempor turpis. Fusce in feugiat elit, at fermentum mauris. 
                Quisque sodales, odio facilisis venenatis ornare, nisi est pretium nibh, eu rutrum tortor libero mattis nunc. 
                Morbi eros ante, tempus quis sapien at, egestas mattis velit. Etiam augue tortor, vestibulum vel laoreet eu, tempus eget ante. 
                Donec maximus blandit porta. Praesent pulvinar purus vel lobortis sodales.</p>
            </article>
          </div>
        </div>
        
        <div className= "img-texto">
          <img src= {cuatro} alt="" width="100%"/>
        </div>
        
        <div className="secundario">
          <div className="sub-contenedor">
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Pellentesque maximus faucibus convallis. Duis dictum enim vitae mi vehicula finibus. 
                  Suspendisse est ex, feugiat sed augue sed, egestas tempor turpis. Fusce in feugiat elit, at fermentum mauris. 
                  Quisque sodales, odio facilisis venenatis ornare, nisi est pretium nibh, eu rutrum tortor libero mattis nunc. 
                  Morbi eros ante, tempus quis sapien at, egestas mattis velit. Etiam augue tortor, vestibulum vel laoreet eu, tempus eget ante. 
                  Donec maximus blandit porta. Praesent pulvinar purus vel lobortis sodales.
                </p>
              </div>
          </div>
        </div>

      </main>
        </div>
        
    }
}
export default texto;