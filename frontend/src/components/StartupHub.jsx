import React from 'react';

const ContentLibrary = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Content Library</h2>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Advocacy Content</h3>
          <div className="flex flex-wrap gap-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
              title="Advocacy Video 1"
              allow="autoplay; encrypted-media"
              className="w-full md:w-1/2"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
              title="Advocacy Video 2"
              allow="autoplay; encrypted-media"
              className="w-full md:w-1/2"
            ></iframe>
          </div>
          <p>
            Explore advocacy content that empowers women to make a difference in their communities. Learn about gender equality, women's rights, and how to become an advocate for positive change.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Mentorship Content</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
            title="Mentorship Video 1"
            allow="autoplay; encrypted-media"
            className="w-full"
          ></iframe>
          <p>
            Discover mentorship content that connects aspiring women with experienced leaders. Learn from successful women in various fields and gain insights into career growth and leadership.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <p>
            Explore our features, including Sakhii chatbot and AR/VR learning, designed to educate and empower girls and women on critical topics such as gender equality, self-advocacy, and leadership. Our platform is dedicated to fostering awareness and empowerment among women worldwide.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ContentLibrary;
