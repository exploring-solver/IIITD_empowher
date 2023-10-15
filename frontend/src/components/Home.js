import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import news1 from "../assets/news1_kapil.jpg"
import news2 from "../assets/news2_reserve.jpg"
import { Link } from 'react-router-dom'; // Import the Link component

const Home = () => {
  // Example news items for the carousel
  const newsItems = [
    {
      id: 1,
      title: 'Womens Reservation Bill is like post-dated cheque, says BRS MLC Kavitha calling it tokenism',
      // content: 'Lorem ipsum door sit amet, consectetur adipiscing elit.',
      imageUrl: news1,
    },
    {
      id: 2,
      title: 'Kapil Sibal`s stern reply to PM Modi over his Women’s Reservation Bill jab',
      // content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: news2,
    },
    // Add more news items as needed
  ];

  return (
    <div className='bg-gray-300 p-2 '>
      <div className="carousel-container rounded shadow w-[500px] m-auto">
        <Carousel>
          {newsItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.imageUrl}
                alt={item.title}
              />
              <Carousel.Caption>
                <h3 className=''></h3>
                <p>{item.content}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="features-container bg-zinc-50 p-2 rounded shadow m-2">
        <div className="feature">
          <h2>Sakhee Chatbot</h2>
          <p>
            Interact with our AI-powered chatbot, Sakhee, for personalized
            assistance and support in your learning journey.
          </p>
          <Link to={'https://creator.voiceflow.com/prototype/652ad8e763f99a99d1c33680'}><button className="try-button bg-green-300 p-2 rounded shadow">Try It Out</button></Link>
        </div>
        <div className="feature">
          <h2>Metaverse Learning</h2>
          <p>
            Explore our innovative Metaverse Learning platform, where you can
            experience immersive and interactive education.
          </p>
          <button className="try-button bg-green-300 p-2 rounded shadow">Try It Out</button>
        </div>
        {/* Add more features as needed */}
      </div>
    </div>
  );
};

export default Home;
