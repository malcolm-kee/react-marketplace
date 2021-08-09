import { useId } from "hooks/use-id";
import PropTypes from "prop-types";
import * as React from "react";
import { Label } from "./label";
import { TextInput } from "./text-input";

/**
 * `<TextField />` composed of `<Label />` and `<TextInput />` component.
 *
 * Unspecified props will be forwarded to the underlying `<TextInput />` element.
 *
 * `ref` will be forwarded to `<TextInput />` element.
 */
export const TextField = React.forwardRef(function TextField(
  { label, id, ...inputProps },
  ref
) {
  const ensuredId = useId(id);

  return (
    <div className="space-y-1">
      {label && <Label htmlFor={ensuredId}>{label}</Label>}
      <TextInput {...inputProps} id={ensuredId} ref={ref} />
    </div>
  );
});

TextField.propTypes = {
  label: PropTypes.node,
};
