import PropTypes from 'prop-types';
import './ProjectDetails.css';
import Tag from '../Tag/Tag.jsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import SecondaryButton from '../SecondaryButton/SecondaryButton.jsx';

function ProjectDetails({
    image,
    imageRight,
    title,
    label,
    problem,
    solution,
    description1,
    description2,
    twoButtons = true,
    primaryBtnText = "Visit",
    secondaryBtnText = "Code",
    primaryBtnLink,
    secondaryBtnLink
}){
    return(
        <section className="project-details-container"
                 style={{ flexDirection: imageRight ? 'row-reverse' : 'row' }}
        >
            <div className="project-image-container">
                <img src={image} alt="Project Image" width={580} height={328}/>
            </div>
            <div className="project-details">
                <h3>{title}</h3>
                <Tag label={label}/>
                <p id="project-main-description">
                    {problem ? <span className="description-title">Problem: </span> : ''}
                    {description1}
                </p>
                <p>
                    {solution ? <span className="description-title">Solution: </span> : ''}
                    {description2}
                </p>

                <div className="btn-container">
                    {twoButtons ?
                        <>
                            <PrimaryButton text={primaryBtnText} link={primaryBtnLink}/>
                            <SecondaryButton text={secondaryBtnText} link={secondaryBtnLink}/>
                        </>
                        :
                        <PrimaryButton text={primaryBtnText} link={primaryBtnLink}/>
                    }
                </div>
            </div>
        </section>
    );
}

ProjectDetails.propTypes = {
    image: PropTypes.string.isRequired,
    imageRight: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    problem: PropTypes.bool.isRequired,
    solution: PropTypes.bool.isRequired,
    description1: PropTypes.string.isRequired,
    description2: PropTypes.string,
    twoButtons: PropTypes.bool,
    primaryBtnText: PropTypes.string,
    secondaryBtnText: PropTypes.string,
    primaryBtnLink: PropTypes.string.isRequired,
    secondaryBtnLink: PropTypes.string.isRequired,
}

export default ProjectDetails;