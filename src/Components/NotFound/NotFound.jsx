import './NotFound.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';

function NotFound(){
    return(
        <div className="not-found-container">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <PrimaryButton text="Go Back to Home" link="/"/>
        </div>
    );
}

export default NotFound;