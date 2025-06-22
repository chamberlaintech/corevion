import React, { useEffect, useRef } from "react";
import "./About.css";
import team from "../../assets/team.jpg";

const About = () => {
  const contentRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    contentRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      contentRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about section-padding flex-center">
      <div className="about-heading">
        <h2 className="h2-text">Mission Protocol</h2>
        <p className="subheading-text">
          Corevion was built to surpass limits — not just to power the future,
          but to stabilize it
        </p>
      </div>
      <div className="about-content flex-center">
        <div className="about-content-upper flex-center">
          <div className="about-content-upper-img">
            <img src={team} alt="team" />
          </div>
          <div className="about-content-upper-text">
            <h4 className="h4-text">What Drives Us</h4>
            <p className="body-text">
              At the heart of Corevion Systems lies a single question: “What if
              limits didn't exist?” <br />
              <br />
              Our mission is to design technologies that don’t just function —
              they defy expectations. Every component we build is engineered to
              resonate with the unknown, drawing from theoretical physics,
              artificial intelligence, and quantum flux architecture
            </p>
          </div>
        </div>
        <div className="about-content-lower">
          <div className="about-content-lower-line" />
          <div className="timeline-event event-1">
            <div className="timeline-dot" />
            <div
              className="timeline-content-right"
              ref={(el) => (contentRefs.current[0] = el)}
            >
              <h6 className="h6-text">2043 — Initial Quantum Research</h6>
              <p className="body-text">
                Our earliest AI simulations hinted at quantum containment
                possibilities. We began prototyping with unstable field rings
              </p>
            </div>
          </div>
          <div className="timeline-event event-2">
            <div className="timeline-dot" />
            <div
              className="timeline-content-left"
              ref={(el) => (contentRefs.current[1] = el)}
            >
              <h6 className="h6-text">2051 — Field Stabilization Achieved</h6>
              <p className="body-text">
                After years of failures, our synthetic lattice finally held. For
                19.3 seconds, the core remained stable — a historic shift
              </p>
            </div>
          </div>
          <div className="timeline-event event-3">
            <div className="timeline-dot" />
            <div
              className="timeline-content-right"
              ref={(el) => (contentRefs.current[2] = el)}
            >
              <h6 className="h6-text">2064 — Core Protocol Unlocked</h6>
              <p className="body-text">
                The Q-Stabilizer array surpassed predictive models. Corevion
                Core entered private trials. Internal clearance rose to Level-7
              </p>
            </div>
          </div>
          <div className="timeline-event event-4">
            <div className="timeline-dot" />
            <div
              className="timeline-content-left"
              ref={(el) => (contentRefs.current[3] = el)}
            >
              <h6 className="h6-text">2072 — Public Release Prepared</h6>
              <p className="body-text">
                After years of failures, our synthetic lattice finally held. For
                19.3 seconds, the core remained stable — a historic shift
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
