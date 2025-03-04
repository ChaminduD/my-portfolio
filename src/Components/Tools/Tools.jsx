import './Tools.css';
import Label from '../Label/Label.jsx';

function Tools(){
    return(
        <section className="tools-container">
            <h3>Tools I Use</h3>
            <section className="tools-type">
                <h5>Web Technologies</h5>
                <div className="tool-label-container">
                    <Label icon="html" label="HTML"/>
                    <Label icon="css" label="CSS"/>
                    <Label icon="javaScript" label="JavaScript"/>
                    <Label icon="python" label="Python"/>
                    <Label icon="react" label="React"/>
                    <Label icon="bootstrap" label="Bootstrap"/>
                    <Label icon="tailwind" label="Tailwind CSS"/>
                </div>
            </section>
            <section className="tools-type">
                <h5>Design Tools</h5>
                <div className="tool-label-container">
                    <Label icon="wordPress" label="WordPress"/>
                    <Label icon="webflow" label="Webflow"/>
                    <Label icon="figma" label="Figma"/>
                    <Label icon="canva" label="Canva"/>
                </div>
            </section>
            <section className="tools-type">
                <h5>Development Tools</h5>
                <div className="tool-label-container">
                    <Label icon="vsCode" label="VS Code"/>
                    <Label icon="git" label="Git"/>
                </div>
            </section>
        </section>
    );
}

export default Tools;