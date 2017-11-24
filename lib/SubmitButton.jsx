import styled from 'styled-components';

const SubmitButton = styled.button`
  background-color: transparent;
  border: 0;
  border-bottom-right-radius: 10px;
  box-shadow: none;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  fill: ${props => (props.invalid ? '#E53935' : '#4a4a4a')};
  opacity: ${props => (props.disabled && !props.invalid ? '.5' : '1')};
  outline: none;
  padding: 14px 16px 12px 16px;
  position: absolute;
  right: 0;
  bottom: 0;

  &:not(:disabled):hover {
    opacity: 0.7;
  }
`;

export default SubmitButton;
