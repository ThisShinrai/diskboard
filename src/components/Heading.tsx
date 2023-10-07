export const Heading = ({
  title,
  classes,
}: {
  title: string;
  classes?: string;
}) => {
  return (
    <div className={`${classes} mb-10`}>
      <h3 className="text-4xl font-bold text-white">{title}</h3>
    </div>
  );
};
