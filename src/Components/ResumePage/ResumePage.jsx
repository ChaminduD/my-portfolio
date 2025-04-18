import './ResumePage.css';
import ScrollToTopBtn from '../ScrollToTopBtn/ScrollToTopBtn.jsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';

function ResumePage(){
    const images = [
        "/my-portfolio/images/resume/Chamindu_Dahanayaka_CV_page1.jpg",
        "/my-portfolio/images/resume/Chamindu_Dahanayaka_CV_page2.jpg",
    ];

    return(
        <div className="resume-container">
            <PrimaryButton
                text="Download PDF"
                link="Chamindu_Dahanayaka_CV.pdf"
            />
            
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Resume Page ${index + 1}`}
                    className="resume-image"
                />
            ))}
            
            <ScrollToTopBtn/>
        </div>
    );
}

export default ResumePage;