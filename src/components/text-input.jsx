import cn from "classnames";
import PropTypes from "prop-types";

/**
 * Unspecified props will be spreaded to the underlying `input` element.
 */
export const TextInput = ({ type = "text", onChangeValue, ...props }) => {
  return (
    <input
      type={type}
      {...props}
      className={cn(
        "block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md",
        props.className
      )}
      onChange={(ev) => onChangeValue(ev.target.value)}
    />
  );
};

TextInput.propTypes = {
  onChangeValue: PropTypes.func,
};
