import Image from "next/image";
import config from "@/app/assets/Config.json";
console.log("configs");

function Preview({
  color = "Black Pearl",//black_pearl, red_planet, sea_grass, stealth_green, blue_planet
  interior="white",//dark, light
  wheel = "SlipStream Black",//aerostealth, slipstream_black, vortex
}) {
  return (
    <>
      {/* Exterior Image */}
      <Image
        src={config[color].wheels[wheel]}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
        alt="Aerostealth"
      />
      {/* Description */}
      <div className="py-3">
        <h3 className="font-bold text-xl text-blue-950">{config[color].finish}</h3>
        <p>A mysterious, seductive black with a metallic blue shimmer.</p>
      </div>

      {/* Interior Image */}
      <Image
        src={`/images/interior/${interior}.jpeg`}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
        alt="Aerostealth"
      />
      <p className="uppercase font-semibold text-stone-900 py-3">
        Interior Image
      </p>
    </>
  );
}

export default Preview;
