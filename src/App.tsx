import { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  CheckCircle, 
  Calendar, 
  Users, 
  Award, 
  Phone, 
  MapPin, 
  Clock 
} from 'lucide-react';
import './App.css';

// Curriculum Types & Data
interface CurriculumItem {
  id: string;
  goal: 'muscle-gain' | 'fat-loss' | 'athletics';
  title: string;
  tag: string;
  desc: string;
  duration: string;
  intensity: string;
  image: string;
}

const CURRICULUM_DATA: CurriculumItem[] = [
  {
    id: 'c1',
    goal: 'muscle-gain',
    title: 'Hypertrophy Protocol',
    tag: 'Strength',
    desc: 'Scientific, progressive overload system focused on mechanical tension and metabolic stress to stimulate maximum muscle fiber recruitment and clean mass gain.',
    duration: '12 Weeks',
    intensity: 'High Intensity',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'c2',
    goal: 'muscle-gain',
    title: 'Olympic Weightlifting',
    tag: 'Power',
    desc: 'Master the snatch, clean & jerk. Focuses on explosive power, speed, core rigidity, and neurological adaptation under heavy loads.',
    duration: '8 Weeks',
    intensity: 'Extreme',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'c3',
    goal: 'fat-loss',
    title: 'Metabolic Conditioning',
    tag: 'Endurance',
    desc: 'High-density, short-rest interval training engineered to elevate the post-exercise oxygen consumption (EPOC) curve, turning your body into a fat-burning furnace.',
    duration: '6 Weeks',
    intensity: 'Extreme',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'c4',
    goal: 'fat-loss',
    title: 'High-Intensity Athletic Intervals',
    tag: 'Conditioning',
    desc: 'Combines rowing, assault bikes, and structural load carries to test mental threshold and strip body fat while preserving lean muscle mass.',
    duration: '10 Weeks',
    intensity: 'High Intensity',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'c5',
    goal: 'athletics',
    title: 'Tactical Performance Grid',
    tag: 'Athletics',
    desc: 'Developed for high-level performers. Focuses on agility, multi-directional speed, deceleration mastery, and violent power output.',
    duration: '12 Weeks',
    intensity: 'Extreme',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'c6',
    goal: 'athletics',
    title: 'Functional Joint Bulletproofing',
    tag: 'Mobility',
    desc: 'Strengthen connective tissues, improve active range of motion, and neutralize kinetic imbalances. Build resilience against injuries under high mechanical load.',
    duration: 'Ongoing',
    intensity: 'Medium',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop'
  }
];

// Coach Type & Data
interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  certs: string[];
  workout: string;
  image: string;
}

const COACHES: Coach[] = [
  {
    id: 'coach1',
    name: 'Marcus Vance',
    role: 'Head Strength Coach',
    bio: 'Former competitive weightlifter. Specializes in structural hypertrophy and biomechanical re-alignment. Marcus has trained over 50 national-level athletes.',
    certs: ['CSCS *D', 'USAW Level 2', 'B.S. Kinesiology'],
    workout: 'Barbell Romanian Deadlift & Heavy Squats',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'coach2',
    name: 'Elena Rostova',
    role: 'Conditioning Director',
    bio: 'Elena spent 8 years coaching collegiate track and field. She specializes in energy system development (ESD) and mental resilience conditioning.',
    certs: ['PES (Performance Enhancement Specialist)', 'EXOS Phase II', 'M.S. Exercise Science'],
    workout: 'Assault Bike Tabata Intervals & Kettlebell Snatches',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'coach3',
    name: 'Devon Cole',
    role: 'Tactical Performance Lead',
    bio: 'Devon is a former military physical training specialist. He works primarily with tactical athletes and first responders preparing for high-stakes roles.',
    certs: ['CSCS', 'TSAC-F (Tactical Strength)', 'CF-L3 Trainer'],
    workout: 'Heavy Sandbag Carries & Weighted Pull-ups',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
  }
];

// Testimonial Type & Data
interface Story {
  id: string;
  name: string;
  age: number;
  stats: string;
  statLabel: string;
  quote: string;
  badge: string;
  image: string;
}

const STORIES: Story[] = [
  {
    id: 'story1',
    name: 'David K.',
    age: 34,
    stats: '+14kg Muscle / -8% BF',
    statLabel: 'Body Composition Shift',
    quote: '"APEX GRID is not a gym, it is an engineering lab for the human body. The coaches stripped away the generic fitness noise and gave me a calculated protocol. The community kept me accountable."',
    badge: 'Hardcore Lifter',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'story2',
    name: 'Sarah M.',
    age: 29,
    stats: '2.5x Deadlift Bodyweight',
    statLabel: 'Absolute Strength Gain',
    quote: '"I thought high-end meant soft. I was wrong. The conditioning is unforgiving, but the technical guidance is flawless. I overcame a chronic back injury and built real, functional power."',
    badge: 'Powerlifter',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'story3',
    name: 'Chris L.',
    age: 41,
    stats: '-18kg Fat / 12:40 Min 3K Run',
    statLabel: 'Endurance Recovery',
    quote: '"At 40, I felt my athletic days were behind me. The programming here restructured my mobility, fixed my joints, and brought my metabolic performance back to what it was in my early twenties."',
    badge: 'Tactical Competitor',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop'
  }
];

function App() {
  const [videoMuted, setVideoMuted] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'muscle-gain' | 'fat-loss' | 'athletics'>('all');
  const [ctaVisible, setCtaVisible] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Video Ref
  const videoRef = useRef<HTMLVideoElement>(null);

  // Carousel Drag State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startDragX = useRef(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // Parallax / Scroll Reveals
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      document.documentElement.style.setProperty('--scroll-top', `${scrollTop}px`);

      // Toggle Sticky Bottom CTA bar
      // Visible once the user scrolls past the hero section (which is 100vh)
      const heroHeight = window.innerHeight;
      if (scrollTop > heroHeight - 100) {
        setCtaVisible(true);
      } else {
        setCtaVisible(false);
      }

      // Check reveal-on-scroll elements
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.88) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial trigger for load state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video Unmute handler
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVideoMuted(videoRef.current.muted);
    }
  };

  // Carousel Auto-Advance
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % STORIES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isDragging]);

  // Drag Carousel Handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    startDragX.current = clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startDragX.current;
    
    // Rubber-band bounding box logic
    const isAtStart = currentSlideIndex === 0;
    const isAtEnd = currentSlideIndex === STORIES.length - 1;
    
    if ((isAtStart && diff > 0) || (isAtEnd && diff < 0)) {
      // Damping the drag offset if attempting to swipe past limits
      setDragOffset(diff * 0.28);
    } else {
      setDragOffset(diff);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 75; // Swipe distance threshold
    if (dragOffset < -threshold && currentSlideIndex < STORIES.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    } else if (dragOffset > threshold && currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
    setDragOffset(0);
  };

  // Handle Mouse Events
  const onMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const onMouseUp = () => {
    handleDragEnd();
  };

  // Handle Touch Events
  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  // Form Submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  // Filters Curriculum
  const filteredCurriculum = CURRICULUM_DATA.filter(
    (item) => activeFilter === 'all' || item.goal === activeFilter
  );

  // Slide width calculations
  const getTransformStyle = () => {
    const slideOffset = -currentSlideIndex * 100;
    // Inject the real-time drag offset into transition transform
    if (isDragging) {
      return {
        transform: `translateX(calc(${slideOffset}% + ${dragOffset}px))`,
        transition: 'none'
      };
    }
    return {
      transform: `translateX(${slideOffset}%)`,
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    };
  };

  return (
    <>
      {/* Grain texture parallax layer */}
      <div className="grain-overlay" />

      {/* Header */}
      <header className="site-header">
        <div className="container header-container">
          <a href="#" className="brand-logo">
            <span className="logo-accent">APEX</span> GRID
          </a>
          <nav>
            <ul className="nav-menu">
              <li><a href="#curriculum" className="nav-link">Curriculum</a></li>
              <li><a href="#coaches" className="nav-link">Coaches</a></li>
              <li><a href="#stories" className="nav-link">Stories</a></li>
              <li><a href="#booking" className="nav-link">Trial Class</a></li>
            </ul>
          </nav>
          <div className="header-cta">
            <a href="#booking" className="btn btn-secondary" style={{ padding: '8px 20px', fontSize: '1.1rem' }}>
              JOIN GRID
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-video-wrapper">
          <video 
            ref={videoRef}
            className="hero-video"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source 
              src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054ba208d85f67b3e16b677093cdcfc&profile_id=139&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-content">
            <div className="hero-tagline">STRENGTH IS AN ENGINEERED PROPERTY</div>
            <h1 className="hero-title">
              HIGH-PERFORMANCE <br />
              <span className="text-orange">ATHLETIC LAB</span>
            </h1>
            <p className="hero-description">
              Professional training programming. High-contrast discipline. 
              No filters. No soft margins. A hardcore fitness community engineered 
              for absolute physical dominance.
            </p>
            <div className="hero-actions">
              <a href="#booking" className="btn btn-primary cta-pulse">
                Book a Trial Class
                <ArrowRight style={{ marginLeft: '10px', width: 20, height: 20 }} />
              </a>
              <button 
                onClick={toggleMute} 
                className="video-control-btn"
                title={videoMuted ? "Unmute reel" : "Mute reel"}
                aria-label={videoMuted ? "Unmute training reel" : "Mute training reel"}
              >
                {videoMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="section-padding" style={{ backgroundColor: 'var(--color-dark-gray)' }}>
        <div className="container">
          <div className="section-title-wrapper reveal-on-scroll">
            <div>
              <span className="section-subtitle">THE BLUEPRINTS</span>
              <h2 className="section-title">TRAINING CURRICULUM</h2>
            </div>
            <p style={{ maxWidth: '400px', color: 'var(--color-silver)', textAlign: 'right' }} className="reveal-on-scroll delay-1">
              Select your trajectory. Every curriculum has been rigorously structured to ensure biological output matches kinetic load.
            </p>
          </div>

          <div className="curriculum-filters reveal-on-scroll delay-1">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Trajectories
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'muscle-gain' ? 'active' : ''}`}
              onClick={() => setActiveFilter('muscle-gain')}
            >
              Muscle Gain
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'fat-loss' ? 'active' : ''}`}
              onClick={() => setActiveFilter('fat-loss')}
            >
              Fat Loss
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'athletics' ? 'active' : ''}`}
              onClick={() => setActiveFilter('athletics')}
            >
              Athletic Performance
            </button>
          </div>

          <div className="curriculum-grid">
            {filteredCurriculum.map((item, index) => (
              <div 
                key={item.id} 
                className={`curriculum-card reveal-on-scroll delay-${(index % 3) + 1}`}
              >
                <div className="curriculum-card-img-wrapper">
                  <span className="curriculum-tag">{item.tag}</span>
                  <img src={item.image} alt={item.title} className="curriculum-card-img" />
                </div>
                <div className="curriculum-card-content">
                  <div>
                    <h3 className="curriculum-card-title">{item.title}</h3>
                    <p className="curriculum-card-desc">{item.desc}</p>
                  </div>
                  <div className="curriculum-details">
                    <div className="curriculum-metric">
                      <span>DURATION:</span>{item.duration}
                    </div>
                    <div className="curriculum-metric">
                      <span>INTENSITY:</span>{item.intensity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="section-padding" style={{ backgroundColor: 'var(--color-black)' }}>
        <div className="container">
          <div className="section-title-wrapper reveal-on-scroll">
            <div>
              <span className="section-subtitle">THE DIRECTORS</span>
              <h2 className="section-title">PROFESSIONAL STRENGTH TEAM</h2>
            </div>
            <p style={{ maxWidth: '400px', color: 'var(--color-silver)', textAlign: 'right' }} className="reveal-on-scroll delay-1">
              Hover over cards to view full athletic certifications, performance background, and signature workouts.
            </p>
          </div>

          <div className="coaches-grid">
            {COACHES.map((coach, index) => (
              <div key={coach.id} className={`coach-card reveal-on-scroll delay-${index + 1}`}>
                <div className="coach-card-inner">
                  {/* Front Card Face */}
                  <div className="coach-card-front">
                    <div className="coach-img-wrapper">
                      <img src={coach.image} alt={coach.name} className="coach-img" />
                    </div>
                    <div className="coach-info">
                      <h3 className="coach-name">{coach.name}</h3>
                      <span className="coach-role">{coach.role}</span>
                    </div>
                  </div>

                  {/* Back Card Face */}
                  <div className="coach-card-back">
                    <div style={{ width: '100%' }}>
                      <h3>{coach.name}</h3>
                      <p className="coach-bio">{coach.bio}</p>
                    </div>
                    <div className="coach-back-details">
                      <span className="coach-back-title">Certifications</span>
                      <ul className="coach-certs">
                        {coach.certs.map((cert) => (
                          <li key={cert}>{cert}</li>
                        ))}
                      </ul>
                      <span className="coach-back-title">Signature Training Focus</span>
                      <div className="coach-workout">{coach.workout}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Stories Section */}
      <section id="stories" className="section-padding" style={{ backgroundColor: 'var(--color-dark-gray)' }}>
        <div className="container">
          <div className="section-title-wrapper reveal-on-scroll">
            <div>
              <span className="section-subtitle">BIOLOGICAL EVIDENCE</span>
              <h2 className="section-title">REAL MEMBER TRANSFORMATIONS</h2>
            </div>
            <p style={{ maxWidth: '400px', color: 'var(--color-silver)', textAlign: 'right' }} className="reveal-on-scroll delay-1">
              Drag or swipe the cards to read stories of structural realignment, metabolic rebuilding, and grit.
            </p>
          </div>

          <div 
            className="carousel-outer"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              ref={carouselTrackRef}
              className="carousel-track" 
              style={getTransformStyle()}
            >
              {STORIES.map((story) => (
                <div key={story.id} className="carousel-slide">
                  <div className="story-img-wrapper">
                    <img src={story.image} alt={story.name} className="story-img" />
                  </div>
                  <div className="story-content">
                    <div className="story-header">
                      <div>
                        <h3 className="story-name">{story.name}</h3>
                        <span className="story-age">AGE {story.age}</span>
                      </div>
                      <div className="story-stats">
                        <div className="story-stat-val">{story.stats}</div>
                        <div className="story-stat-lbl">{story.statLabel}</div>
                      </div>
                    </div>
                    <p className="story-quote">{story.quote}</p>
                    <span className="story-badge">{story.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-indicators">
            {STORIES.map((_, idx) => (
              <button 
                key={idx}
                className={`indicator-dot ${currentSlideIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Book a Trial Section */}
      <section id="booking" className="section-padding" style={{ backgroundColor: 'var(--color-black)' }}>
        <div className="container">
          <div className="booking-container">
            <div className="booking-info reveal-on-scroll">
              <span className="section-subtitle" style={{ color: 'var(--color-neon-orange)' }}>TEST METRICS</span>
              <h2 className="booking-title">BOOK A TRIAL CLASS</h2>
              <p style={{ marginBottom: '30px' }}>
                Initiate your integration into the grid. Fill out the matrix coordinates below, choose your primary athletic objective, and our performance director will contact you to align your evaluation.
              </p>
              
              <ul className="booking-benefits">
                <li>
                  <div className="benefit-icon-wrapper">
                    <Award size={22} />
                  </div>
                  <div>
                    <h4 className="benefit-title">Individual Assessment</h4>
                    <p className="benefit-desc">30-minute metabolic testing and range-of-motion scan before scheduling your training session.</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon-wrapper">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 className="benefit-title">Hardcore Collective</h4>
                    <p className="benefit-desc">Join 6-8 disciplined athletes operating under professional, structured workout parameters.</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon-wrapper">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <h4 className="benefit-title">Dynamic Scheduling</h4>
                    <p className="benefit-desc">Over 24 available training blocks per week across hypertrophy, speed, and endurance protocols.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="booking-form-wrapper reveal-on-scroll delay-1">
              {bookingSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <CheckCircle size={60} style={{ color: 'var(--color-neon-orange)', marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>COORDINATES STORED</h3>
                  <p>Our training directory has received your metrics. We will contact you to initiate evaluation protocols within 12 cycles (hours).</p>
                </div>
              ) : (
                <form className="booking-form" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="input-group">
                      <label htmlFor="first-name">First Name</label>
                      <input type="text" id="first-name" required className="form-input" placeholder="Marcus" />
                    </div>
                    <div className="input-group">
                      <label htmlFor="last-name">Last Name</label>
                      <input type="text" id="last-name" required className="form-input" placeholder="Vance" />
                    </div>
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="email">Email Coordinates</label>
                    <input type="email" id="email" required className="form-input" placeholder="mvance@apexgrid.com" />
                  </div>

                  <div className="input-group">
                    <label htmlFor="phone">Phone Vector</label>
                    <input type="tel" id="phone" required className="form-input" placeholder="555-0199" />
                  </div>

                  <div className="input-group">
                    <label htmlFor="objective">Athletic Objective</label>
                    <select id="objective" className="form-select">
                      <option value="mass">Hypertrophy & Mass (Muscle Gain)</option>
                      <option value="cut">High-Density Cond (Fat Loss)</option>
                      <option value="tactical">Tactical Athletic Agility</option>
                      <option value="joint">Joint Performance Recovery</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn cta-pulse">
                    Submit Metrics
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA bar */}
      <div className={`sticky-cta-bar ${ctaVisible ? 'visible' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontFamily: 'var(--font-headings)', fontSize: '1.25rem', letterSpacing: '0.05em', color: '#ffffff' }}>
            READY TO JOIN THE GRID?
          </span>
          <span style={{ color: 'var(--color-silver)', fontSize: '0.9rem', textTransform: 'uppercase' }} className="hide-mobile">
            | ASSESSMENT PROTOCOL READY
          </span>
        </div>
        <a href="#booking" className="btn btn-primary cta-pulse" style={{ padding: '8px 22px', fontSize: '1.1rem' }}>
          Book a Trial Class
        </a>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="#" className="brand-logo" style={{ marginBottom: '15px' }}>
                <span className="logo-accent">APEX</span> GRID
              </a>
              <p style={{ fontSize: '0.95rem' }}>
                APEX GRID is a high-performance training collective. We reject generic fitness marketing and prioritize scientific programming, hardcore execution, and absolute results.
              </p>
            </div>
            <div className="footer-col">
              <h4>TRAJECTORIES</h4>
              <ul className="footer-links">
                <li><a href="#curriculum">Hypertrophy (Muscle)</a></li>
                <li><a href="#curriculum">Metabolic (Conditioning)</a></li>
                <li><a href="#curriculum">Tactical (Performance)</a></li>
                <li><a href="#curriculum">Bulletproofing (Joints)</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>NAV</h4>
              <ul className="footer-links">
                <li><a href="#curriculum">Blueprints</a></li>
                <li><a href="#coaches">Directors</a></li>
                <li><a href="#stories">Evidence</a></li>
                <li><a href="#booking">Trial Class</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>GRID HQ</h4>
              <ul className="footer-contact-info">
                <li>
                  <MapPin size={18} />
                  <span>304 Industrial Boulevard, Sector 8, Grid City</span>
                </li>
                <li>
                  <Clock size={18} />
                  <span>Mon - Fri: 05:00 - 22:00<br />Sat - Sun: 06:00 - 18:00</span>
                </li>
                <li>
                  <Phone size={18} />
                  <span>+1 (888) 555-0100</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © {new Date().getFullYear()} APEX GRID PERFORMANCE. ALL RIGHTS RESERVED. NO ORNAMENT, ALL METRIC.
            </div>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Youtube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
