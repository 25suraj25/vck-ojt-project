import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const AboutPage = () => {
  return (
    <>
      <div className="body">
        <Header />
        <div className="inner-body">
          <h1 className="about-title fade-in-up">About Vivekanand College</h1>
          <p className="about-text">
            Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering
            transformative education since its inception in 1980. Located in the bustling heart of
            Chembur, Mumbai, our college has consistently strived to uphold the highest standards of academic rigor and ethical values.
          </p>

          <p className="about-text2">
            Our vision is to empower students with critical thinking skills, a global perspective, and
            a strong sense of social responsibility. We aim to nurture individuals who are not only
            successful in their careers but also contributing members of society.
          </p>

          <h2 className="section-title">Our Mission</h2>
          <ul className="about-text">
            <li>To provide high-quality, accessible education across various disciplines.</li>
            <li>To foster research, innovation, and creativity among students and faculty.</li>
            <li>To cultivate a diverse and inclusive learning environment.</li>
            <li>To instill strong ethical values and leadership qualities.</li>
          </ul>

          <h2 className="section-title">Our Values</h2>
          <p id="our-values">Integrity, Excellence, Innovation, Community, and Respect are the pillars upon
            which Vivekanand College is built. We encourage open dialogue, intellectual
            curiosity, and a relentless pursuit of knowledge.</p>

          <h2 id="history">Our History</h2>
          <p id="history-text">[Briefly describe the college's history - e.g., how it started, key milestones,
            growth over the years, famous alumni if any]. Our journey began with a vision to
            make quality education available to all, and we continue that legacy today.</p>
        </div>
        <Footer />
      </div>
    </>
  );
};


export default AboutPage;