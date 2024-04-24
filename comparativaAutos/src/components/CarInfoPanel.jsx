import carBackDesktop from "/images/car2-back-desktop.jpg";
import carBackDesktopAlt from "/images/car1-back.jpg";
import carFront from "/images/car1.png";
import carFrontAlt from "/images/car2.png";
import carLogo from "/images/car1-logo.png";
import carLogoAlt from "/images/car2-logo.png";
import carBackMobile from "/images/car2-back-mobile.jpg";
import carBackMobileAlt from "/images/car1-back-mobile.jpg";
import carMobile from "/images/car2-mobile.png";
import carMobileAlt from "/images/car1-mobile.png";
import CarInfoItem from "./CarInfoItem";

const CarInfoPanel = ({
  isDesktop,

  onMouseDown,
  onTouchStart,
  onMouseUp,
  onTouchEnd,
  onMouseMove,
  onTouchMove,
  topPanelRef,
}) => {
  return (
    <>
      <section className="absolute w-screen min-h-screen overflow-hidden">
        <figure className="text-white absolute w-screen min-h-screen ">
          <img
            src={isDesktop ? carBackDesktop : carBackMobile}
            alt="car Extended"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen object-cover"
          />
          <img
            src={carLogoAlt}
            alt="Card Logo"
            className="absolute top-14 right-20 w-36 md:w-52 lg:w-80 xl:w-96"
          />
          <figcaption className="absolute top-[15%] left-1/2 transform -translate-x-1/2 text-center text-base flex flex-row justify-around items-center w-[90%]">
            <CarInfoItem value="77" unit="kWh" label="BATERIA" />
            <CarInfoItem value="350" unit="Nm" label="TORQUE" />
            <CarInfoItem value="180" unit="kW" label="POTENCIA" />
            <CarInfoItem value="520" unit="km" label="AUTONOMIA MAXIMA" />
            <CarInfoItem value="6.5" unit="s" label="ACELERACION (0-100KM/H)" />
          </figcaption>
          <img
            src={isDesktop ? carFrontAlt : carMobile}
            alt="car Logo"
            className="w-1/2 absolute top-custom left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </figure>
      </section>

      <section className="panel moved" ref={topPanelRef}>
        <article className="content">
          <img
            src={isDesktop ? carBackDesktopAlt : carBackMobileAlt}
            alt="car Power"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen object-cover"
          />
          <img
            src={carLogo}
            alt="car"
            className="absolute top-14 left-20 w-36 md:w-52 lg:w-80 xl:w-96"
          />
          <aside className="absolute top-[15%] left-1/2 transform -translate-x-1/2 text-center text-base flex flex-row justify-around items-center w-[90%]">
            <CarInfoItem
              value="64"
              unit="kWh"
              label="BATERIA"
              border="black"
              text="black"
              opacity="60"
            />
            <CarInfoItem
              value="600"
              unit="Nm"
              label="TORQUE"
              border="black"
              text="black"
              opacity="60"
            />
            <CarInfoItem
              value="320"
              unit="kW"
              label="POTENCIA"
              border="black"
              text="black"
              opacity="-60"
            />
            <CarInfoItem
              value="385"
              unit="km"
              label="AUTONOMIA MAXIMA"
              border="black"
              text="black"
              opacity="60"
            />
            <CarInfoItem
              value="3.8"
              unit="s"
              label="ACELERACION (0-100KM/H)"
              border="black"
              text="black"
              opacity="60"
            />
          </aside>
          <img
            src={isDesktop ? carFront : carMobileAlt}
            alt="cartB2"
            className="w-1/2 absolute top-custom left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </article>
      </section>
    </>
  );
};

export default CarInfoPanel;
