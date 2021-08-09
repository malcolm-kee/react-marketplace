import cn from "classnames";
import PropTypes from "prop-types";
import * as React from "react";
import { callAll } from "../lib/call-all";

/**
 * Unspecified props will be spreaded to the underlying `select` element.
 *
 * Provided ref will be forwarded to the underlying `select` element.
 */
export const Select = React.forwardRef(function Select(
  { onChangeValue, ...props },
  forwardedRef
) {
  return (
    <select
      {...props}
      className={cn(
        "block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md",
        props.className
      )}
      onChange={callAll(
        onChangeValue && ((ev) => onChangeValue(ev.target.value)),
        props.onChange
      )}
      ref={forwardedRef}
    />
  );
});

Select.propTypes = {
  onChangeValue: PropTypes.func,
};
