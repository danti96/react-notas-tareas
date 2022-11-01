import freeCodeCampLogo from "../images/freecodecamp-logo.png";
import "../stylesheets/LogoFreeCodeCamp.css";

export const LogoFreeCodeCamp = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        className="feecodecamp-logo"
        alt="feecodecamp-logo"
      />
    </div>
  );
};
