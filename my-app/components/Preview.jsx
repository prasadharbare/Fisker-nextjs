import Image from "next/image";
import configs from "@/app/assets/Config.json";

function Preview({
  exterior = "Sun Soaked",
  interior = "white",
  wheel = "SlipStream Black",
}) {
  return (
    <>
      {/* Exterior Image */}
      <Image
        src={configs[exterior].wheels[wheel]}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
        alt="Aerostealth"
      />
      {/* Description */}
      <div className="py-4">
        <h3 className="font-bold text-xl text-blue-950">
          {configs[exterior].finish}
        </h3>
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
