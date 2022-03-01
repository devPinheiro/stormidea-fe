
// react libraries
import * as React from 'react';

// styles
import './button.scss';

// interfaces
import { ButtonProps } from './interfaces';

const Button = (props: ButtonProps) => {
  let {
    size,
    type,
    isActive,
    submit = false,
    isLoading = false,
    alignImageRight = true,
    disabled,
    classes,
    ...rest
  } = props;
  type = !type ? 'hollow' : type;
  size = !size ? 'regular' : size;
  isActive = isActive !== undefined ? isActive : false;

  const classNames = isActive
    ? `button active ${size} ${type}`
    : `button ${size} ${type}`;

  /**
   * This evaluates whether to show a spinner or the button content
   * depending on the button's isLoading state
   *
   * @param {ButtonProps} props
   *
   * @returns {JSX}
   */
  const renderButtonContent = (props: ButtonProps) => {
    // spinner shows when isLoading is true
    if (props.isLoading) {
      return (
        <div className={isActive ? 'inline white' : 'inline'}>
            Loading...
        </div>
      );
    }

    return  (
          <React.Fragment>
            {props.name} {props.icon && <img src={props.icon} />}
          </React.Fragment>
        )
    
  };

  const classList = `${
    classes
      ? `${classNames} ${classes}`
      : `${classNames}`
  } ${disabled ? 'disabled' : ''}`.trim();

  return (
    <button
      { ...rest }
      type={submit ? 'submit' : 'button'}
      id={props.id}
      disabled={disabled}
      className={classList}
      onClick={props.onClick}
    >
      {renderButtonContent(props)}
    </button>
  );
};

export default Button;
