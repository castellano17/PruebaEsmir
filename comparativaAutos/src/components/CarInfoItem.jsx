const CarInfoItem = ({
  value,
  unit,
  label,
  border = "white",
  text = "white",
  opacity = "opacity-0",
}) => (
  <div className={`mb-50 border-r-2 ${border ? `border-${border}` : ""} p-3`}>
    <div className={`font-bold text-5xl text-${text} `}>
      {value}
      <span
        className={`font-medium opacity-8 text-2xl ml-2 text-${text} opacity-${opacity} `}
      >
        {unit}
      </span>
    </div>
    <div className={`text-${text} text-xs font-semibold `}>{label}</div>
  </div>
);

export default CarInfoItem;
