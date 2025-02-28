import PropTypes from 'prop-types';
import './WorkingStep.css';

function WorkingStep({ step, title, description }){
    return(
        <div className="working-step-container">
            <span className="number-background">
                <span className="step-number">{step}</span>
            </span>
            <div className="step-content">
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
}

WorkingStep.propTypes = {
    step: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default WorkingStep;