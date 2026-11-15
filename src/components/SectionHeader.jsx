import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";

const SectionHeader = ({ eyebrow, title, description }) => (
  <motion.div
    className="section-header w-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {eyebrow && <span className="section-kicker">{eyebrow}</span>}
    <h2 className="section-header-title xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal">
      <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>{title}</LinearGradient>
    </h2>
    {description && <p className="section-header-description theme-secondary text-sm md:text-base">{description}</p>}
  </motion.div>
);

SectionHeader.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SectionHeader;
