import { useId } from "hooks/use-id";
import PropTypes from "prop-types";
import { Label } from "./label";
import { TextInput } from "./text-input";

/**
 * `<TextField />` composed of `<Label />` and `<TextInput />` component.
 *
 * Unspecified props will be forwarded to the underlying `<TextInput />` element.
 */
export const TextField = ({ label, id, ...inputProps }) => {
  const ensuredId = useId(id);

  return (
    <div className="space-y-1">
      {label && <Label htmlFor={ensuredId}>{label}</Label>}
      <TextInput {...inputProps} id={ensuredId} />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.node,
};
