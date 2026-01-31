export const CircleIndicatorIcon = ({ isActive = false }) => {
  if (isActive)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="7.5" fill="#00245C" />
        <circle cx="12" cy="12" r="11.25" stroke="#00245C" strokeWidth="1.5" />
      </svg>
    );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="6.75" stroke="white" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="11.25" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};
