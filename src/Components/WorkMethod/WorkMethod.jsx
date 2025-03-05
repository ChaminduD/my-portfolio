import './WorkMethod.css';
import WorkingStep from '../WorkingStep/WorkingStep.jsx';

function WorkMethod(){
    return(
        <section className="work-method-container">
            <h3>How I Work</h3>
            <div className="working-steps-container">
                <WorkingStep
                    step="01"
                    title="Planning & Strategy"
                    description="Every successful project starts with a solid plan. I begin by identifying the type of website needed, the goals it aims to achieve, and the target audience. Through conversations and research, I uncover what the audience hopes to accomplish and how success will be measured. This process results in a clear project brief that serves as a guiding compass for the entire journey."
                />
                <WorkingStep
                    step="02"
                    title="Structure"
                    description="Next, I outline the website’s structure, deciding on the necessary pages and the content for each. This stage includes creating wireframes that organize content and prioritize functionality to ensure an optimal user experience."
                />
                <WorkingStep
                    step="03"
                    title="Design"
                    description="With the foundation set, I bring the project to life with visually engaging designs. From selecting colors and fonts that convey the right message to integrating images, illustrations, and icons, I focus on creating a design that evokes emotion and ensures clarity."
                />
                <WorkingStep
                    step="04"
                    title="Development"
                    description="The final step is turning the design into a functional website. Whether coding or using no-code tools based on client needs, I ensure the design is responsive, accessible, and enriched with interactions and animations for a polished, professional finish."
                />
            </div>
        </section>
    );
}

export default WorkMethod;