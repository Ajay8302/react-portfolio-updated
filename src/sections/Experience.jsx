import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperiences } from "../constants/data";
import PropTypes from "prop-types";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import SectionDivider from "../components/SectionDivider";

const ExperienceCard = ({ experience }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "var(--glass-fill)", color: "var(--text-primary)" }}
      contentArrowStyle={{ borderRight: "7px solid var(--glass-fill)" }}
      date={experience.duration}
      dateClassName="theme-secondary"
      iconStyle={{ background: "var(--glass-fill)", color: "var(--text-primary)", border: "1px solid var(--glass-border)" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company}
            className={`w-full h-full object-contain rounded-full p-0.5 ${
              experience.company === "Meritech" ? "meritech-logo-badge p-1.5" : ""
            }`}
          />
        </div>
      }
    >
      {/* Experience */}
      <div>
        <h3 className="theme-primary text-base font-bold">
          {experience.position}
        </h3>
        <p className="theme-secondary text-base font-mono" style={{ margin: 0 }}>
          {experience.company}
        </p>
        <p className="theme-secondary text-xs mt-1" style={{ margin: 0 }}>
          {experience.location}
        </p>
      </div>

      <p className="experience-summary theme-secondary text-sm leading-relaxed mt-4">
        {experience.summary}
      </p>

      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-[#7e3ff2] text-white text-xs md:text-sm px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Projects */}
      {experience.projects && experience.projects.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm theme-primary font-semibold mb-2">Projects:</h4>
          <div className="space-y-3">
            {experience.projects.map((project, i) => (
              <div
                key={`project-${i}`}
                className="experience-project rounded-xl"
              >
                <button
                  type="button"
                  className="experience-project-trigger w-full flex items-center justify-between gap-3 text-left"
                  onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                  aria-expanded={expandedProject === i}
                  aria-controls={`project-${experience.id}-${i}`}
                >
                  <span className="theme-primary text-sm font-semibold">{project.name}</span>
                  <span className="experience-project-toggle" aria-hidden="true">
                    {expandedProject === i ? "−" : "+"}
                  </span>
                </button>

                {expandedProject === i && (
                  <div id={`project-${experience.id}-${i}`} className="experience-project-content">
                    <p className="theme-secondary text-sm leading-relaxed">{project.context}</p>
                    <h5 className="theme-primary text-xs font-semibold uppercase tracking-wide mt-4 mb-2">Selected contributions</h5>
                    <ul className="experience-contributions theme-secondary text-xs md:text-sm space-y-2">
                      {project.contributions.map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="experience-project-tech">{technology}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <section
        className="w-full flex justify-center mb-20 px-4"
        id="experience"
      >
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          <SectionHeader
            eyebrow="Career timeline"
            title="Work Experience"
            description="Selected roles, products, and engineering contributions."
          />

          {/* Timeline */}
          <VerticalTimeline lineColor={"#fff"}>
            {workExperiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
              ></ExperienceCard>
            ))}
          </VerticalTimeline>
          <SectionDivider />
        </div>
      </section>
    </>
  );
};

export default Experience;

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,

    technologies: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        context: PropTypes.string.isRequired,
        contributions: PropTypes.arrayOf(PropTypes.string).isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ),
  }).isRequired,
};
