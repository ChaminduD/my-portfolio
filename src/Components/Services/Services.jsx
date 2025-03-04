import './Services.css';
import ServicesCard from '../ServicesCard/ServicesCard.jsx';

function Services(){
    return(
        <section className="services-container">
            <h3>Services I Offer</h3>
            <div className="services-card-container">
                <ServicesCard
                    icon="frontend"
                    title="Frontend Development"
                    description="Developing responsive and interactive user interfaces with clean, efficient code to ensure seamless experiences."
                />
                <ServicesCard
                    icon="webDesign"
                    title="Web Design"
                    description="Designing visually appealing and user-friendly websites that align with brand identity and achieve business goals."
                />
                <ServicesCard
                    icon="uiUx"
                    title="UI/UX Design"
                    description="Creating intuitive and engaging designs by focusing on user behavior, accessibility, and seamless navigation."
                />
                <ServicesCard
                    icon="extension"
                    title="WordPress Development"
                    description="Building dynamic and customizable websites using WordPress to provide flexible and scalable solutions."
                />
                <ServicesCard
                    icon="cursor"
                    title="Webflow Development"
                    description="Designing and building responsive websites using Webflow's platform for rapid and scalable deployment."
                />
                <ServicesCard
                    icon="responsive"
                    title="Responsive Design"
                    description="Ensuring websites look great and function flawlessly across all devices, providing an optimal user experience everywhere."
                />
            </div>
        </section>
    );
}

export default Services;