import classNames from 'classnames';
import { HTMLAttributes } from 'preact/compat';
import styled from 'styled-components';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'icon';
}

const Button = (props: ButtonProps) => (
  <StyledButton
    {...props}
    className={classNames(
      {
        button_icon: props.type === 'icon',
      },
      props.className
    )}
  />
);

export default Button;

const StyledButton = styled.button`
  min-width: 24px;
  min-height: 24px;
  appearance: none;
  backface-visibility: hidden;
  background-color: #27ae60;
  border-radius: 4px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, 0.15) 0 4px 9px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-weight: 600;
  letter-spacing: normal;
  outline: none;
  overflow: hidden;
  padding: 4px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  &:disabled {
    background-color: #767a7c;
    color: #ecf0f1;
    cursor: not-allowed;
  }

  &:hover:not(:disabled),
  &:focus-visible {
    background-color: #166336;
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
    box-shadow: rgba(39, 174, 96, 0.2) 0 6px 12px;
  }

  &:active {
    transform: translateY(2px);
    transition-duration: 0.35s;
  }

  &.button-icon {
  }
`;
