import { motion } from "framer-motion";
import PropTypes from "prop-types";

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      className="w-[200px] sm:w-[240px] md:w-[260px] flex flex-col gap-4 relative rounded-xl p-4 shadow-lg shadow-black-200 bg-[#32303a] transition-all duration-300 select-none hover:bg-[#3a3842] hover:shadow-xl group"
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
        <h2 className="text-sm md:text-base font-bold text-white font-generalsans leading-tight line-clamp-2">
          {certification.title}
        </h2>
        <div className="flex flex-col gap-0.5">
          <p className="text-[#afb0b6] text-xs font-generalsans font-medium">
            {certification.issuer}
          </p>
          <p className="text-[#8e8f93] text-[10px] font-generalsans">
            Issued: {certification.date}
          </p>
        </div>
      </div>

      <div className="flex justify-end items-center w-full mt-auto pt-2">
        <motion.a
          className="flex items-center gap-1.5 cursor-pointer text-[#c4c5c9] hover:text-white transition-colors group/link"
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
