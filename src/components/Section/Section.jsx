export const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <div>{children}</div>
    </div>
  );
};
