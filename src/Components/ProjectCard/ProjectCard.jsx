import PropTypes from 'prop-types';
import './ProjectCard.css';
import Tag from '../Tag/Tag.jsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import SecondaryButton from '../SecondaryButton/SecondaryButton.jsx';

function ProjectCard({ title, label, description, image, primaryBtnLink, secondaryBtnLink, imageRight }){
    return(
        <div className="project-card-container">
            <div className="title-container">
                <h4>{title}</h4>
                <Tag label={label}/>
            </div>
            <div className="content-container" style={{ flexDirection: imageRight ? 'row-reverse' : 'row' }}>
                <div className='image-container'>
                    <img src={image} alt="Project" />
                </div>
                <div className="details-container">
                    <p>{description}</p>
                    <div className="button-container">
                        <PrimaryButton text="Visit" link={primaryBtnLink}/>
                        <SecondaryButton text="Code" link={secondaryBtnLink}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    primaryBtnLink: PropTypes.string.isRequired, // Visit website
    secondaryBtnLink: PropTypes.string.isRequired, // Open code github repo
    imageRight: PropTypes.bool.isRequired, // Image side set
}

export default ProjectCard;