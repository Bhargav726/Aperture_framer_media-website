const Feedback = () => {
    return (
      <section className="text-center mt-20 px-4">
        <div className="flex justify-center space-x-2">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-10 h-10 rounded-full" />
          <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-10 h-10 rounded-full" />
          <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-10 h-10 rounded-full" />
        </div>
        <div className="text-orange-500 text-2xl mt-2">★★★★★</div>
        <h1 className="text-2xl font-semibold mt-2">Trusted by brands & creatives worldwide</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Over 100 brands and creatives trust me to capture their stories through bold, refined imagery.
        </p>
      </section>
    );
  };
  
  export default Feedback;