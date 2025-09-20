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
        <div className="text-center">
          <img 
            src={profilePhoto}
            alt="Terence Richardson - Full-Stack Developer"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-8 shadow-2xl border-4 border-crimson/30 glow-crimson"
            data-testid="img-profile-photo"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-name">
            Hey there, I'm Terence Richardson
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-light-gray" data-testid="text-hero-title">
            Full-Stack Developer
          </p>
          <p className="text-lg sm:text-xl mb-12 text-light-gray max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
            Passionate about creating clean, efficient code and building meaningful digital experiences. 
            Currently enrolled in Pursuit AI Native coding bootcamp, transitioning into tech as an AI-first developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-crimson text-white px-8 py-3 rounded-lg font-medium magnetic"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-crimson text-crimson px-8 py-3 rounded-lg font-medium hover:bg-crimson hover:text-white transition-all magnetic"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
