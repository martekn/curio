import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { StyledWrapper, StyledInput, StyledLabel, StyledTextarea, StyledErrorMessage } from "./InputGroup.styles";

interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  error: string | undefined;
  register: UseFormRegister<T>;
  type?: "textarea" | "text" | "email";
  placeholder?: string;
  disabled?: boolean;
}

/**
 * A reusable form input component that integrates with `react-hook-form`.
 * It supports both text input and textarea types and renders an input field with a label, optional placeholder,
 * and error message handling based on the form validation status.
 *
 * This component automatically registers the input field with `react-hook-form` using the `register` function.
 * It conditionally renders either a `<textarea>` or `<input>` element depending on the `type` prop.
 *
 * @template T - The type for the form data, extending `FieldValues` from `react-hook-form` to support various field types.
 *
 * @param props - The props for the component.
 * @param props.label - The label to display next to the input field. Typically used to describe the input's purpose.
 * @param props.name - The name of the input field, used to register the field with `react-hook-form`.
 * @param props.register - The `register` function from `react-hook-form` used to register the input field.
 * @param [props.type="text"] - The type of the input field. Defaults to `"text"`. Can be `"textarea"` for a multiline text input.
 * @param [props.placeholder=""] - The placeholder text for the input field.
 * @param [props.error] - An optional error message displayed below the input field if validation fails.
 *
 * @returns A JSX element representing the input group with a label, input field (or textarea), and error message.
 *
 * @example
 * <InputGroup
 *   label="Username"
 *   name="username"
 *   register={register}
 *   type="text"
 *   placeholder="Enter your username"
 *   error={errors.username?.message}
 * />
 */
export const InputGroup = <T extends FieldValues>({
  label,
  name,
  register,
  type = "text",
  placeholder = "",
  error,
  disabled = false,
}: InputProps<T>) => {
  let input;
  if (type === "textarea") {
    input = <StyledTextarea as="textarea" disabled={disabled} {...register(name)} placeholder={placeholder} />;
  } else {
    input = <StyledInput type={type} disabled={disabled} {...register(name)} placeholder={placeholder} />;
  }
  return (
    <div>
      <StyledWrapper>
        <StyledLabel>{label}</StyledLabel>
        {input}
      </StyledWrapper>
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </div>
  );
};
