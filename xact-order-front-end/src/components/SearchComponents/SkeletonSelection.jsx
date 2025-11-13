import { useState } from "react";
import SkeletonSvg from "./SkeletonSvg.jsx";


function SkeletonSelection(props) {

    const [ selected, setSelected ] = useState(null);
    const [ hoveredRegion, setHoveredRegion ] = useState(null);
    const [ activeRegion, setActiveRegion ] = useState(null);

    const displayOptions = (choice) => {
        setSelected(choice);
    }

    const toggleActiveRegion = (regionKey) => {
        // if already active, clear; otherwise set
        setActiveRegion((prev) => (prev === regionKey ? null : regionKey));
    }


    return (
        <div className="skeleton-selection">
            <div className="skeleton-list">
                <button
                    className="anatomy-button"
                    type="button"
                    onMouseEnter={() => setHoveredRegion('head')}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => { displayOptions("HEAD"); toggleActiveRegion('head'); }}
                > HEAD </button>

                <button
                    className="anatomy-button"
                    type="button"
                    onMouseEnter={() => setHoveredRegion('chest-abd-pel')}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => { displayOptions("CHEST/ABD/PEL"); toggleActiveRegion('chest-abd-pel'); }}
                > CHEST / ABD / PELVIS </button>

                <button
                    className="anatomy-button"
                    type="button"
                    onMouseEnter={() => setHoveredRegion('upper-extremity')}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => { displayOptions("UPPER EXTREMITY"); toggleActiveRegion('upper-extremity'); }}
                > UPPER EXTREMITY </button>

                <button
                    className="anatomy-button"
                    type="button"
                    onMouseEnter={() => setHoveredRegion('spine')}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => { displayOptions("SPINE"); toggleActiveRegion('spine'); }}
                > SPINE </button>

                <button
                    className="anatomy-button"
                    type="button"
                    onMouseEnter={() => setHoveredRegion('lower-extremity')}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => { displayOptions("LOWER EXTREMITY"); toggleActiveRegion('lower-extremity'); }}
                > LOWER EXTREMITY </button>
            </div>

            <picture className="human-skeleton">
                <SkeletonSvg className="skeleton-svg" hoveredRegion={hoveredRegion} activeRegion={activeRegion} />
            </picture>
            <div>
                { selected === "HEAD" && <div className="skeleton-list">
                    <button className="anatomy-button" type="button" onClick={() => props.click("Skull")}> Skull </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Facial/ENT")}> Facial/ENT </button>
                    </div>
                }
                { selected === "CHEST/ABD/PEL" && <div className="skeleton-list">
                    <button className="anatomy-button" type="button" onClick={() => props.click("Chest")}> Chest </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Ribs/Sternum/SC Joint")}> Ribs/Sternum/SC Joint </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Abdomen")}> Abdomen </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Pelvis/Hips")}> Pelvis/Hips </button>
                    </div>
                }
                { selected === "UPPER EXTREMITY" && <div className="skeleton-list">
                    <button className="anatomy-button" type="button" onClick={() => props.click("Shoulder/Clavicle/Scapula")}> Shoulder/Clavicle/Scapula </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Humerus")}> Humerus </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Elbow/Forearm")}> Elbow/Forearm </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Wrist/Hand/Fingers")}> Wrist/Hand/Fingers </button>
                    </div>
                }
                { selected === "SPINE" && <div className="skeleton-list">
                    <button className="anatomy-button" type="button" onClick={() => props.click("Cervical Spine")}> Cervical Spine </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Thoracic Spine")}> Thoracic Spine </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Lumbar Spine")}> Lumbar Spine </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Sacrum/Other")}> Sacrum/Other </button>
                    </div>
                }
                { selected === "LOWER EXTREMITY" && <div className="skeleton-list">
                    <button className="anatomy-button" type="button" onClick={() => props.click("Femur")}> Femur </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Knee")}> Knee </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("TibFib/Ankle")}> TibFib/Ankle </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Foot/Toes")}> Foot/Toes </button>
                    </div>
                }
            </div>
        </div>
    )
}


export default SkeletonSelection;