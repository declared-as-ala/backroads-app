import { services } from "../data";
import Title from "./Title";
import Service from "./Service";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((ser) => {
          return <Service key={ser.id} {...ser} />;
        })}
      </div>
    </section>
  );
};
export default Services;
