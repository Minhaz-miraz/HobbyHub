const Slider = () => {
  return (
    <section className="md:-ml-9 lg:ml-[450px] lg:max-w-prose bg-white border-b-2 lg:grid lg:h-screen lg:place-content-center w-[343px]  mx-auto">
      <div
        className="mx-auto w-screen max-w-screen-xl px-4  sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
      >
        <div className=" mt-28 md:mt-0 lg:max-w-prose lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            🌟 Discover Your <strong className="text-indigo-60 animate-pulse"> People</strong>,<br /> Share Your <strong className="text-green-600 animate-pulse"> Passion</strong>

          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            HobbyHub connects you with local groups that share your interests—whether it's painting, hiking, reading, or anything in between.
            Join existing communities or create your own. Because hobbies are better together.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">

          <a   
    href="#featured"
    className="hover:shadow-2xl transform duration-300 hover:-translate-y-2 p-4 hover:bg-gradient-to-r from-green-600 to-green-700 scroll-smooth inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 hover:text-black hover:font-bold"
    onClick={(e)=>{
      e.preventDefault();
      document.getElementById('featured').scrollIntoView({
        behavior:'smooth',
        block: 'start'
      })
    }}
>
    Explore
</a>


          </div>
        </div>

        <div className="carousel lg:w-full h-[400px] rounded-2xl w-[343px] lg:max-w-prose mt-10">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.postimg.cc/1z8wN8Y6/1706447614752.jpg"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a onClick="window.scrollTo({ top: 0, behavior: 'Smooth' })" href="#slide4" className="btn btn-circle">❮</a>
              <a onClick="window.scrollTo({ top: 0, behavior: 'Smooth' })" href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.postimg.cc/X7NZCZrJ/WXZQn-Tc-QHyt2igzrwh-NUy-W-1280-80-jpg.webp" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.postimg.cc/L5x8TTJs/photographers.jpg" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.postimg.cc/yN065BDt/be-your-containt-writter.webp" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;