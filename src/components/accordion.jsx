import * as React from "react";

export const Accordion = (props) => {
  const showContent = props.showContent;

  return (
    <div className="pt-6">
      <div className="text-lg">
        <button
          type="button"
          className="flex w-full items-center justify-between text-gray-400 focus:outline-none focus:ring focus:ring-offset-4"
          aria-expanded="false"
          onClick={props.onToggleShow}
        >
          <span className="font-medium text-gray-900">{props.title}</span>
          <span className="ml-6 h-7 flex items-center">
            <svg
              className={`h-6 w-6 transform ${
                showContent ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      {showContent && <div className="mt-2 pr-12">{props.children}</div>}
    </div>
  );
};
