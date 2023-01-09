import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'

import './robots.css'

const Robots = () => {
    return (
      <>
        <html>
         <Header title="Robots" image={HeaderImage}>
          View our different Robots over the years.
        </Header>
          <body>
          <script src="https://kit.fontawesome.com/95a02bd20d.js">
            </script>
<section className='Robots'>
<div class="container_Robots">
  <div class="card">
   <div class="face face1">
    <div class="content">
      <i class="fab fa-Robots"></i>
      <h3>Robots</h3>
      </div>
      </div>
      </div>
      </div>
      <div class="face face2">
      <div class="content">
      <a href="#" type="button">Read More</a>

      </div>
      </div>
      
     
      </section>
      <div class="container_Robots2">
      <div class="card">
       <div class="face face1">
         <div class="content">
      <i class="fab fa-Robot2"></i>               <h3>Robot 2</h3>
         </div>
       </div>
       <div class="face face2">
         <div class="content">
           
           <a href="#" type="button">Read More</a>
         </div>
       </div>
    </div>
    </div>

    <div class="container_Robots3">
    <div class="card">
       <div class="face face1">
         <div class="content">
           <i class="fab fa-Robot3"></i>
            <h3>Robot 3</h3>
         </div>
       </div>
       <div class="face face2">
         <div class="content">
           
           <a href="#" type="button">Read More</a>
         </div>
       </div>
    </div>
    </div>


          </body>
        </html>
        </>
        
    )
  }

  export default Robots