import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";
import { myCertifications } from "../constants/data";
import CertificationCard from "../components/CertificationCard";

const Certifications = () => {
  return (
    <section className="w-full flex justify-center mb-20 px-4" id="certifications">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full">
          <motion.h2
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Certifications
            </LinearGradient>
          </motion.h2>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-5 mt-10">
          {myCertifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
