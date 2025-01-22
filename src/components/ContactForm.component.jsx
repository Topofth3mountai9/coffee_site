import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { get_any_input_validation } from '../helpers/get_any_input_validation';
import styled from 'styled-components';
import FormRow from '../ui/FormRow';
import Input_field from './input_field.component';
import Button from '../ui/button.component';
import { respond_to } from '../helpers/breakpoints';

const ContactFormContainer = styled.div`
  padding: 4rem;
  color: ${({ theme }) => theme.colors.grey[0]};

  .header {
    font-weight: 300;
  }

  .custom_input_field {
    width: 30rem;
    height: 5rem;
    padding-block: 1rem;
    /* padding-inline: 1.2rem; */
    /* background: ${({ theme }) => theme.colors.unknown_colors.body_bg}; */
    background-color: transparent;
    border: none;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
    /* border-bottom: 0.1rem solid rgba(48, 52, 54, 0.9); */
    color: ${({ theme }) => theme.colors.grey[0]};
    /* padding: 1rem 1.2rem; */

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey[0]};
      /* color: inherit; */
      letter-spacing: 0.1rem;
    }

    input,
    textarea {
      &::placeholder {
        color: ${({ theme }) => theme.colors.grey[0]};
        /* font-size: ${({ theme }) => theme.typography.text.xs}; */
      }
    }

    textarea {
      resize: none;
      height: 5rem;
      /* padding-block: 1rem; */
    }
  }

  ${respond_to('1100px')} {
    width: 100%;

    .custom_input_field {
      width: 35rem;
    }
  }

  ${respond_to('900px')} {
    width: 100%;
    /* margin-top: 25rem; */

    .custom_input_field {
      width: 30rem;
    }
  }
  ${respond_to('600px')} {
    width: 100%;

    .custom_input_field {
      width: 45rem;
    }
  }
  ${respond_to('450px')} {
    width: 100%;

    .custom_input_field {
      width: 30rem;
    }
  }
`;

// const CustomInputField = styled(Input_field)`
//   .input {
//     width: 30rem;
//     border: none;
//     border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
//   }
// `;

const FormContainer = styled.div`
  /* width: 70%; */
  grid-template-columns: repeat(2, 1fr);

  button {
    align-self: end;
  }

  ${respond_to('600px')} {
    grid-template-columns: 1fr;
  }
`;

function ContactForm() {
  const methods = useForm();

  let first_name_validation = get_any_input_validation(
    'First Name',
    'text',
    true
  );
  let last_name_validation = get_any_input_validation(
    'Last Name',
    'text',
    true
  );
  let email_validation = get_any_input_validation(
    'Email Address',
    'text',
    true
  );
  let phone_num_validation = get_any_input_validation('Phone', 'text', true);
  let message_validation = get_any_input_validation('Message', 'text', true);
  return (
    <ContactFormContainer className="bg_dark flex_items flex_column">
      <h2 className="header mb_32 heading_2">Book a Table</h2>
      <FormProvider {...methods}>
        <FormContainer className="grid grid_2_col g_6">
          <FormRow>
            <Input_field
              title="First Name"
              // label="First Name"
              other_class="custom_input_field"
              {...first_name_validation}
            />
          </FormRow>

          <FormRow>
            <Input_field
              title="Last Name"
              // label="First Name"
              other_class="custom_input_field"
              {...last_name_validation}
            />
          </FormRow>

          <FormRow>
            <Input_field
              title="Email Address"
              // label="First Name"
              other_class="custom_input_field"
              {...email_validation}
            />
          </FormRow>

          <FormRow>
            <Input_field
              title="Phone"
              // label="First Name"
              other_class="custom_input_field"
              {...phone_num_validation}
            />
          </FormRow>
          <FormRow>
            <Input_field
              text_area={true}
              title="Message"
              // label="First Name"
              other_class="custom_input_field"
              {...message_validation}
            />
          </FormRow>
          <Button type="primary" size="big" square={true} text="capitalize">
            Appointment
          </Button>
        </FormContainer>
      </FormProvider>
    </ContactFormContainer>
  );
}

export default ContactForm;
