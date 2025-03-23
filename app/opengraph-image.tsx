import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Utopia ESSEC - AI Association";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Use the utopia.png file from public directory
  const logoUrl = new URL("https://utopiaessec.fr/utopia.png");

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to right, #fcf2ff, #f8e6ff)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "#3c3c3c",
        }}
      >
        <img
          src={logoUrl.toString()}
          alt="Utopia Logo"
          width={300}
          height={300}
          style={{ marginBottom: 40 }}
        />
        <h1 style={{ fontSize: 64, margin: 0 }}>Utopia ESSEC</h1>
        <p style={{ fontSize: 32, margin: 0, marginTop: 24 }}>
          AI Association of ESSEC Business School
        </p>
      </div>
    ),
    { ...size }
  );
}
