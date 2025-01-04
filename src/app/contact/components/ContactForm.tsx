import { InputGroup } from "@/components/InputGroup";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/Button";
import styled, { css } from "styled-components";
import { Message } from "@/components/Message";

type ContactSchemaType = z.infer<typeof ContactSchema>;

const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.sizes.size7};
  `}
`;

const ContactSchema = z.object({
  fullName: z.string().min(3, "Name has to be at least 3 characters long"),
  email: z.string().email("Email must be a valid email address"),
  subject: z.string().min(3, "Subject has to be at least 3 characters long"),
  message: z.string().min(3, "Has has to contain at least 3 characters"),
});

/**
 * A form component for submitting a contact inquiry.
 *
 * The form uses `react-hook-form` and `zod` for validation:
 * - The form fields are validated based on the defined `ContactSchema`, which ensures that the inputs meet the required criteria (e.g., minimum character length, valid email format).
 *
 * @returns A contact form with fields for full name, email, subject, and message, along with validation feedback.
 */
export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactSchemaType>({ resolver: zodResolver(ContactSchema) });

  const onSubmit: SubmitHandler<ContactSchemaType> = (data) => {
    console.log("Contact form validation criteria met:", data);
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isSubmitSuccessful && (
          <Message type="success" margin="0" title="Thank you!">
            Your message has been sent.
          </Message>
        )}
        <InputGroup
          label="Full name"
          register={register}
          name="fullName"
          type="text"
          error={errors.fullName?.message}
        />
        <InputGroup label="Email" register={register} name="email" type="text" error={errors.email?.message} />
        <InputGroup label="Subject" register={register} name="subject" type="text" error={errors.subject?.message} />
        <InputGroup
          label="Message"
          register={register}
          name="message"
          type="textarea"
          error={errors.message?.message}
        />
        <Button variant="primary" type="submit">
          Send message
        </Button>
      </Form>
    </div>
  );
};
