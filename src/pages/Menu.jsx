import desktopLogo from '../assets/AtlasFlagLogo.png';
import tabletLogo from '../assets/AtlasFlagLogoTablet.png';
import mobileLogo from '../assets/AtlasFlagLogoMobile.png';
import '../index.css';
import Button from '../components/Button.jsx';

const Menu = () => (
  <div className="menu-container">
    <picture>
      <source srcSet={mobileLogo} media="(max-width: 480px)" />
      <source srcSet={tabletLogo} media="(max-width: 1024px)" />
      <img src={desktopLogo} alt="Atlas Flags Logo" className="header-logo" />
    </picture>

    <h1>Smash stages, know nations. The touring bands learning tool.</h1>

    <Button text="Learn Countries" link="/learn" />
    <Button text="Countries Collection" link="/collection" />
    <Button text="Quiz" link="/quiz" />
    <Button text="Quiz Leaderboard" link="/leaderboard" />
  </div>
);

export default Menu;