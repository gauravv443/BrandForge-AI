import {
  FaRobot,
  FaLightbulb,
  FaGlobe
} from "react-icons/fa";

function Features() {
  return (
    <div className="features">

      <div className="feature">
        <FaRobot />
        <span>AI Generated Names</span>
      </div>

      <div className="feature">
        <FaLightbulb />
        <span>Unique Taglines</span>
      </div>

      <div className="feature">
        <FaGlobe />
        <span>Domain Suggestions</span>
      </div>

    </div>
  );
}

export default Features;