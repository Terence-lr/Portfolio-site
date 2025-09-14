import profilePhoto from "@assets/IMG_1903_Original_1757873321619.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="gradient-bg text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <img 
            src={profilePhoto}
            alt="Terence Richardson - Junior Developer"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-8 shadow-2xl border-4 border-white/20"
            data-testid="img-profile-photo"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-name">
            Hi, I'm Terence Richardson
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90" data-testid="text-hero-title">
            Junior Developer
          </p>
          <p className="text-lg sm:text-xl mb-12 opacity-80 max-w-2xl mx-auto" data-testid="text-hero-description">
            Passionate about creating clean, efficient code and building meaningful digital experiences. 
            Currently enrolled in Pursuit AI Native coding bootcamp, transitioning into tech as an AI-first developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-card text-primary px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-card text-card px-8 py-3 rounded-lg font-medium hover:bg-card hover:text-primary transition-all"
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
