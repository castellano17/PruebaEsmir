const CarInfoItem = ({
  value,
  unit,
  label,
  border = "white",
  text = "white",
  opacity = "opacity-0",
}) => (
  <section
    className={`mb-50 border-r-2 ${
      border === "black" ? "border-black" : "border-white"
    } p-3`}
  >
    <h1
      className={`font-bold sm:text-4xl md:text-5xl ${
        text === "black" ? "text-black" : "text-white"
      } `}
    >
      {value}
      <span
        className={`font-medium opacity-8 sm:text-xl md:text-2xl ml-2  ${
          opacity === "60" ? "opacity-60" : ""
        } `}
      >
        {unit}
      </span>
    </h1>
    <p
      className={`${
        text === "black" ? "text-black" : "text-white"
      } text-xs md:text-xs font-semibold `}
    >
      {label}
    </p>
  </section>
);

export default CarInfoItem;
