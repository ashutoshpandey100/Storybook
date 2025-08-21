import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '../components/InputField/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['filled', 'outlined', 'ghost'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
    errorMessage: 'This field is required.',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    helperText: 'This is a hint.',
  },
};

export const Password: Story = {
  args: {
    ...Default.args,
    label: 'Password',
    type: 'password',
  },
};

export const Clearable: Story = {
  args: {
    ...Default.args,
    value: 'Some text',
    onClear: () => alert('Cleared!'),
  },
};