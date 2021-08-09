import { useId } from "hooks/use-id";
import PropTypes from "prop-types";
import * as React from "react";
import { Label } from "./label";
import { Select } from "./select";

/**
 * `<SelectField />` composed of `<Label />` and `<Select />` component.
 *
 * Unspecified props will be forwarded to the underlying `<Select />` element.
 *
 * `ref` will be forwarded to `<Select />` element.
 */
export const SelectField = React.forwardRef(function SelectField(
  { label, id, ...selectProps },
  ref
) {
  const ensuredId = useId(id);

  return (
    <div className="space-y-1">
      {label && <Label htmlFor={ensuredId}>{label}</Label>}
      <Select {...selectProps} id={ensuredId} ref={ref} />
    </div>
  );
});

SelectField.propTypes = {
  label: PropTypes.node,
};
