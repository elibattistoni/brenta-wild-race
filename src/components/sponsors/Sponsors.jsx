// find ./public/sponsors/big -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' \)

import { sponsorsBig } from "./sponsors";

function Sponsors() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {sponsorsBig.map(({ src, alt, width, height, backgroundColor }) => (
        <div style={{ backgroundColor, width: "fit-content", padding: "10px" }}>
          <img
            key={alt}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default Sponsors;
