export const Field = ({ children, label, controlId }) => (
  <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
    {label && (
      <label
        htmlFor={controlId}
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {label}
      </label>
    )}
    <div className="mt-1 sm:mt-0 sm:col-span-2">{children}</div>
  </div>
);
