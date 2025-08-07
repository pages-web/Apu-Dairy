const Heading = ({
  title,
  desc,
  className,
  ...props
}: {
  title?: string;
  desc?: string;
  className?: string;
}) => {
  return (
    <div className={`text-center ${className}`} {...props}>
      <h1 className="text-[30px] font-bold uppercase text-[#1D2939]">
        {title}
      </h1>
      <p
        className="text-[#6399CE] text-[18px]"
        dangerouslySetInnerHTML={{ __html: desc || "" }}
      ></p>
    </div>
  );
};

export default Heading;
