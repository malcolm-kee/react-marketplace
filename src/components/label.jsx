import cn from "classnames";

export const Label = (props) => {
  return (
    <label
      {...props}
      className={cn("block text-sm font-medium text-gray-900", props.className)}
    />
  );
};
