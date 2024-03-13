import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
        <p className="mb-4">Welcome to the profile page of Himpunan Teknik Informatika UIR!</p>
        <p className="mb-4">Here you can find information about our organization and its members.</p>
        <p className="mb-8">Feel free to explore and get to know us better!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="mb-8">Our vision is to become a superior student association in the field of information technology and to be able to make a positive contribution to society.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <ul className="list-disc list-inside mb-8">
              <li>To improve the quality and quantity of information technology students at the Islamic University of Riau.</li>
              <li>To develop the potential of students in the field of information technology through academic and non-academic activities.</li>
              <li>To establish cooperation with internal and external parties to improve the quality and relevance of the Information Technology study program.</li>
              <li>To hold activities that are oriented towards the development of soft skills and hard skills of Information Technology students.</li>
              <li>To develop creativity and innovation in the field of information technology.</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Our Divisions</h2>
            <p className="mb-4">Our organization is divided into 7 divisions, namely:</p>
            <ol className="list-decimal list-inside mb-8">
              <li>Kaderisasi</li>
              <li>Humas</li>
              <li>Kominfo</li>
              <li>Ristek</li>
              <li>Dispora</li>
              <li>Kewirausahaan</li>
              <li>Kerohanian</li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Our Members</h2>
            <p className="mb-4">Our members are students of the Information Technology study program at the Islamic University of Riau.</p>
            <p className="mb-4">They are passionate about technology and are eager to learn and innovate.</p>
            <p className="mb-8">They are also active in various activities and events, both academic and non-academic.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
            <ul className="list-disc list-inside mb-8">
              <li>Winning various competitions</li>
              <li>Organizing successful events</li>
              <li>Contributing to the community</li>
              <li>And many more!</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="mb-4">If you are interested in joining our organization, feel free to contact us!</p>
            <p className="mb-4">We are always open to new members and new ideas.</p>
            <p className="mb-8">Together, let's make a difference in the field of information technology!</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions or inquiries, don't hesitate to reach out to us.</p>
            <p className="mb-4">We are more than happy to assist you in any way we can.</p>
            <p className="mb-8">Thank you for your interest in Himpunan Teknik Informatika UIR!</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
            <p className="mb-4">Stay updated with our latest news and events by following us on social media.</p>
            <p className="mb-4">Feel free to reach out to us and connect with our members.</p>
            <p className="mb-8">We look forward to hearing from you!</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Contribute</h2>
            <p className="mb-4">If you are interested in contributing to our organization, we are open to collaborations and partnerships.</p>
            <p className="mb-4">Feel free to share your ideas and suggestions with us.</p>
            <p className="mb-8">Together, let's make a positive impact in the field of information technology!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
