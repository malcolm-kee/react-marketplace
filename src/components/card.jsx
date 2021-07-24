export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 ${className}`}
  >
    {children}
  </div>
);

export const CardHeading = ({ children, className = "" }) => (
  <div className={`px-4 py-5 sm:px-6 text-lg ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = "" }) => (
  <div className={`px-4 py-5 sm:p-6 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = "" }) => (
  <div className={`px-4 py-4 sm:px-6 ${className}`}>{children}</div>
);
