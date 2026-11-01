import { ImageResponse } from "next/og";

export const alt = "Aljaž Strnad — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "#0e0e10",
                    color: "#ffffff",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ fontSize: 64, fontWeight: 700 }}>Aljaž Strnad</div>
                <div style={{ marginTop: 24, fontSize: 32, color: "#6ee7b7" }}>
                    Programmer &amp; Computer Science Student
                </div>
            </div>
        ),
        size
    );
}
