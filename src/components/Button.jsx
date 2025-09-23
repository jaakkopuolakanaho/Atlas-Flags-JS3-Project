import { useNavigate } from 'react-router-dom';

const Button = ({ text, link, onClick, className = '' }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (link) navigate(link);
    if (onClick) onClick(e);
  };

  return (
    <button className={`menu-button ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
