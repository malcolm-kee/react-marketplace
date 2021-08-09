import cn from "classnames";
import PropTypes from "prop-types";
import * as React from "react";

/**
 * Unspecified props will be spreaded to the underlying `input` element.
 *
 * Provided ref will be forwarded to the underlying `input` element.
 */
export const TextInput = React.forwardRef(function TextInput(
  { type = "text", onChangeValue, ...props },
  forwardedRef
) {
  return (
    <input
      type={type}
      {...props}
      className={cn(
        "block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md",
        props.className
      )}
      onChange={(ev) => onChangeValue(ev.target.value)}
      ref={forwardedRef}
    />
  );
});

TextInput.propTypes = {
  onChangeValue: PropTypes.func,
};
