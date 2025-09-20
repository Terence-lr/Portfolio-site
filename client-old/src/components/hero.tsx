import profilePhoto from "@assets/IMG_1903_Original_1757873321619.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="gradient-bg text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <img 
              src={profilePhoto}
              alt="Terence Richardson - Full-Stack Developer"
              className="w-64 h-64 max-w-[90vw] max-h-[90vw] rounded-full shadow-2xl border-4 border-crimson-30 glow-crimson"
              data-testid="img-profile-photo"
            />
          </div>
          
          {/* Hero Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-name">
              Hey there, I'm Terence Richardson
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-light-gray" data-testid="text-hero-title">
              Full-Stack Developer
            </p>
            <p className="text-lg sm:text-xl mb-12 text-light-gray max-w-2xl mx-auto lg:mx-0 leading-relaxed" data-testid="text-hero-description">
              Passionate about creating clean, efficient code and building meaningful digital experiences. 
              Currently enrolled in Pursuit AI Native coding bootcamp, transitioning into tech as an AI-first developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-crimson text-white px-6 py-3 rounded-lg font-medium magnetic"
                data-testid="button-view-work"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-crimson text-crimson px-6 py-3 rounded-lg font-medium hover:bg-crimson hover:text-white transition-all magnetic"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
