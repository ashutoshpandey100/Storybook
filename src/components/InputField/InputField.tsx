import React, { useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Eye, EyeOff, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const inputVariants = cva(
  'peer w-full rounded-md outline-none transition-colors duration-200',
  {
    variants: {
      variant: {
        filled: 'bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500',
        outlined: 'bg-transparent border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500',
        ghost: 'bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-none',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
      invalid: {
        true: '!border-red-500',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
    },
    defaultVariants: {
      variant: 'outlined',
      size: 'md',
    },
  }
);

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  loading?: boolean;
  onClear?: () => void;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      type = 'text',
      label,
      helperText,
      errorMessage,
      variant,
      size,
      invalid,
      disabled,
      loading,
      onClear,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    return (
      <div className={cn('relative w-full', className)}>
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={isPassword ? (showPassword ? 'text' : 'password') : type}
            className={cn(inputVariants({ variant, size, invalid, disabled }))}
            disabled={disabled || loading}
            aria-invalid={invalid}
            {...props}
          />
          {loading && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-blue-500"></div>
            </div>
          )}
          {!loading && onClear && props.value && (
            <button
              type="button"
              onClick={onClear}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              aria-label="Clear input"
            >
              <X size={20} />
            </button>
          )}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
        {errorMessage && invalid ? (
          <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
        ) : helperText ? (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };