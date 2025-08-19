import type { BasicButtonProps } from "../../../types/buttonTypes";
import classNameMerge from "../../../utils/classNameMerge";

const BasicButton = ({
  className = "",
  style = {},
  children = "",
  isDisabled = false,
  type = "button",
  title = "",
  onClick = () => {},
}: BasicButtonProps) => {

  return (
    <button
      className={classNameMerge([className])}
      style={{
        ...style,
      }}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      title={title}
    >
      <span>{children}</span>
    </button>
  );
};

export default BasicButton;
