const CustomIcon = ({ size = "3rem", color = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    {/* Example "diamond" icon */}
    <path d="/public/Icon.svg" />
  </svg>
);

export default CustomIcon;
