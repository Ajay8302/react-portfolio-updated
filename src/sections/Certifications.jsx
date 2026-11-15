import { myCertifications } from "../constants/data";
import CertificationCard from "../components/CertificationCard";
import SectionHeader from "../components/SectionHeader";
import SectionDivider from "../components/SectionDivider";

const Certifications = () => {
  return (
    <section className="w-full flex justify-center mb-20 px-4" id="certifications">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications"
          description="Industry credentials supporting cloud, architecture, and engineering practice."
        />

        <div className="w-full flex flex-wrap justify-center gap-5 mt-10">
          {myCertifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
        <SectionDivider />
      </div>
    </section>
  );
};

export default Certifications;
