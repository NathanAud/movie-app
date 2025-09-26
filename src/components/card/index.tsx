interface Props {
  color: string;
  width?: string;
  height?: string;
  border: string;
  children: React.ReactNode;
  shadow?: boolean;
  onClick?: () => void;
}

export const Card = ({
  color,
  width,
  height,
  border,
  children,
  onClick,
}: Props) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width,
        height,
        borderRadius: border,
        // border: "2px black solid",
      }}
      className="flex flex-col shrink-0 gap-2"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
