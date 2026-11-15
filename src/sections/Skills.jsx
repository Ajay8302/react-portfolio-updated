import { LinearGradient } from "react-text-gradients";
import SkillsSphere from "../components/SkillsSphere";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { skillGroups } from "../constants/data";
import SectionDivider from "../components/SectionDivider";

const Skills = ({ theme }) => {
  return (
    <>
      <section className="w-full flex justify-center px-4 pt-10 pb-24" id="skills">
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          <div className="w-full">
            <motion.h2
              className="mb-6 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                Skills & Technologies
              </LinearGradient>
            </motion.h2>
          </div>
          <div className="relative w-full flex items-center justify-center">
            <div className="skills-glow absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#fc0865]/20 blur-3xl" />
            <SkillsSphere theme={theme} />
          </div>
          <div className="skills-architecture w-full mt-6 rounded-3xl p-5 sm:p-7">
            <div className="skills-architecture-header">
              <span className="section-kicker">Technical toolkit</span>
              <div>
                <h3 className="theme-primary text-xl font-semibold">How I build and ship software</h3>
                <p className="theme-secondary text-sm mt-1">Capabilities grouped by the kind of engineering work they support.</p>
              </div>
            </div>
            <div className="skills-groups-grid mt-6">
              {skillGroups.map((group) => (
                <article key={group.title} className="skills-group glass-panel rounded-2xl p-5">
                  <h3 className="theme-primary text-base font-semibold">{group.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skills-group-chip">{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <SectionDivider />
        </div>
      </section>
    </>
  );
};

Skills.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]).isRequired,
};

export default Skills;
