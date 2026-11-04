import { motion } from "framer-motion";
import PropTypes from "prop-types";

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      className="glass-card w-[200px] sm:w-[240px] md:w-[260px] flex flex-col gap-4 relative rounded-2xl p-4 transition-all duration-300 select-none hover:shadow-xl group"
      whileHover={{ y: -5 }}
    >
      <div className="w-full h-[120px] rounded-lg overflow-hidden bg-white/5 flex items-center justify-center p-2 group-hover:bg-white/10 transition-colors">
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-1.5 mt-1">
        <h2 className="text-sm md:text-base font-bold theme-primary font-generalsans leading-tight line-clamp-2">
          {certification.title}
        </h2>
        <div className="flex flex-col gap-0.5">
          <p className="theme-secondary text-xs font-generalsans font-medium">
            {certification.issuer}
          </p>
          <p className="theme-secondary text-[10px] font-generalsans opacity-80">
            Issued: {certification.date}
          </p>
        </div>
      </div>

      <div className="flex justify-end items-center w-full mt-auto pt-2">
        <motion.a
          className="flex items-center gap-1.5 cursor-pointer theme-secondary hover:text-[#ff9720] transition-colors group/link"
          href={certification.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">View Certificate</p>
          <img src="arrow-up.png" alt="arrow" className="w-2.5 h-2.5 opacity-70 group-hover/link:opacity-100 transition-opacity" />
        </motion.a>
      </div>
    </motion.div>
  );
};

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CertificationCard;
