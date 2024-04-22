import { HTMLAttributes } from 'preact/compat';
import styled from 'styled-components';

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: 'success' | 'error';
  isIcon?: boolean;
}

export const Button = ({ children, color, isIcon, ...rest }: IconButtonProps) => {
  return (
    <StyledButton {...rest} color={color} isIcon={isIcon}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ color?: 'success' | 'error'; isIcon?: boolean }>`
  ${(props) => {
    const calculatedColor =
      props.color === 'success'
        ? '#36a33c'
        : props.color === 'error'
        ? '#d32f2f'
        : props.isIcon
        ? '#696767'
        : 'white';

    return `
      background: ${props.isIcon ? 'none' : 'rgb(25, 118, 210)'};
      border: none;
      border-radius: 4px;
      min-height: 32px;
      min-width: 32px;
      height: ${props.isIcon ? '32px' : 'unset'};
      color: ${calculatedColor};
      padding: 8px;
      cursor: pointer;

      transition: transform 0.2s;

      &:active:not(:disabled) {
        transform: translateY(3px);
      }

      &:disabled {
        background: gray;
        cursor: not-allowed;
      }
    `;
  }}
`;
