import { useId } from "hooks/use-id";
import PropTypes from "prop-types";
import * as React from "react";
import { Label } from "./label";
import { Textarea } from "./textarea";

/**
 * `<TextareaField />` composed of `<Label />` and `<Textarea />` component.
 *
 * Unspecified props will be forwarded to the underlying `<Textarea />` element.
 *
 * `ref` will be forwarded to `<Textarea />` element.
 */
export const TextareaField = React.forwardRef(function TextareaField(
  { label, id, ...textareaProps },
  ref
) {
  const ensuredId = useId(id);

  return (
    <div className="space-y-1">
      {label && <Label htmlFor={ensuredId}>{label}</Label>}
      <Textarea {...textareaProps} id={ensuredId} ref={ref} />
    </div>
  );
});

TextareaField.propTypes = {
  label: PropTypes.node,
};
