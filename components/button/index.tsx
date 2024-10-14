import React from 'react';

type ButtonProps = {
  label: string; // Text for the button
  onClick: () => void; // Click handler
  type?: 'button' | 'submit' | 'reset'; // Button type (optional)
  disabled?: boolean; // Disable the button (optional)
  variant?: 'primary' | 'secondary' | 'outline'; // Styling variant (optional)
  ariaLabel?: string; // Aria label for accessibility (optional)
  size?: 'small' | 'medium' | 'large'; // Size of the button (optional)
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  ariaLabel,
  size = 'medium',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 text-white hover:bg-blue-600';
      case 'secondary':
        return 'bg-gray-500 text-white hover:bg-gray-600';
      case 'outline':
        return 'border border-blue-500 text-blue-500 hover:bg-blue-100';
      default:
        return '';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-2 py-1 text-sm';
      case 'medium':
        return 'px-4 py-2 text-base';
      case 'large':
        return 'px-6 py-3 text-lg';
      default:
        return '';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || label} // Ensuring an accessible name is always provided
      className={`rounded ${getVariantClasses()} ${getSizeClasses()} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50`}
    >
      {label}
    </button>
  );
};

export default Button;
