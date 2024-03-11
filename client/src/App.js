
import './App.css';
import image from './images/dedan-kimath.jpg'
import image2 from './images/dedankimathi3.webp'


function App() {
  return (
    <div className="container  mt-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-center text-decoration-underline" id='header'>Dedan Kimathi</h1>
            <div className="row">
            <div className="col-sm-6 ">
              <div className="mt-3">
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img src={image} className="d-block w-100 rounded img-fluid" alt="loading"/>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img  src={image2} className="d-block w-100 img-thumbnail rounded img-fluid" alt="..."/>
                  </div>
                  
                  
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              </div>
            </div>
            <div className="col-sm-6" id="about">
              <div className="mt-3">
                <div className="card-body">
                  
                  <p className="card-text">Dedan Kimathi, a pivotal figure in Kenyan history, was a courageous leader of the Mau Mau Uprising during the 1950s. He dedicated his life to the fight against British colonial rule, seeking independence for Kenya. Kimathi's unwavering commitment to the cause made him a symbol of resistance and national hero. Captured in 1956, he faced execution in 1957, leaving an indelible mark on Kenya's journey to independence.</p>
                  
                </div>
              </div>
            </div>
          </div>
          <hr/>

          {/* TIMELINE */}
          
          <div className='container' id="timeline">
            <p className="text-center text-decoration-underline">Timeline of Dedan Kimathi's Contributions:</p>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>1920:</strong> Dedan Kimathi is born in Nyeri, Kenya. Growing up in a period of British colonial rule, he witnesses firsthand the socio-economic challenges faced by his people.
              </li>
              <li className="list-group-item">
                <strong>1940s:</strong> Kimathi actively participates in anti-colonial activities, advocating for Kenyan independence and raising awareness about the exploitation of natural resources by the British colonial administration.
              </li>
              <li className="list-group-item">
                <strong>1950:</strong> The Mau Mau Uprising begins as a response to oppressive British policies. Dedan Kimathi becomes a charismatic leader, organizing Mau Mau fighters to resist British rule and demand land and freedom for the Kenyan people.
              </li>
              <li className="list-group-item">
                <strong>1952:</strong> British authorities declare a state of emergency in response to the Mau Mau Uprising, leading to widespread atrocities. Kimathi, a key strategist, develops guerrilla warfare tactics to counter British forces.
              </li>
              <li className="list-group-item">
                <strong>1953:</strong> Dedan Kimathi establishes the Kenya Defence Council, a military arm of the Mau Mau movement. The council coordinates attacks against British forces and collaborates with other anti-colonial groups.
              </li>
              <li className="list-group-item">
                <strong>1956:</strong> Despite being one of the most wanted individuals by British forces, Kimathi is captured after months of evading capture. His arrest marks a turning point in the Mau Mau Uprising.
              </li>
              <li className="list-group-item">
                <strong>1957:</strong> Dedan Kimathi is sentenced to death and executed by the British colonial authorities. His courageous stand and sacrifice solidify his legacy as a national hero and a symbol of the Kenyan people's struggle for independence.
              </li>
              <li className="list-group-item">
                <strong>2003:</strong> In recognition of his contributions, Dedan Kimathi is posthumously awarded the Order of the Golden Heart of Kenya (OGH) by the Kenyan government, acknowledging his pivotal role in the fight for independence.
              </li>
              <li className="list-group-item">
                <strong>2007:</strong> Dedan Kimathi University of Technology is established in Nyeri, Kenya, aiming to commemorate his legacy and provide quality education to future generations.
              </li>
              <li className="list-group-item">
                <strong>2013:</strong> The Dedan Kimathi Foundation is founded, dedicated to preserving the historical memory of Kimathi's struggle, promoting education, and supporting community development initiatives in Kenya.
              </li>
              <li className="list-group-item">
                <strong>2021:</strong> The Dedan Kimathi Memorial, a national monument, is unveiled in Nairobi to honor and remember his sacrifice and the resilience of the Mau Mau fighters.
              </li>
              {/* Add more timeline events as needed */}
            </ul>
            <p className="mt-3">
              Dedan Kimathi's leadership and sacrifice played a critical role in shaping the narrative of Kenya's independence. His legacy continues to inspire generations, symbolizing the resilience and determination of the Kenyan people in the face of colonial oppression.
            </p>
          </div>

          {/* Footer */}
          <div className='container' id='footer'> 
            <p>For more information about Dedan Kimathi, check out his wikipedia page:<a href='https://en.wikipedia.org/wiki/Dedan_Kimathi'>Dedan Kimathi</a></p>
          </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;
