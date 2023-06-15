import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{
        opacity: match ? "0.7" : "1",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
