import confetti from "canvas-confetti";
import { useRef, useState } from "react";

interface Star {
  id: number;
  left: string;
  top: string;
  duration: string;
  delay: string;
  opacity: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${(Math.random() * 3 + 2).toFixed(2)}s`,
    delay: `${(Math.random() * 3).toFixed(2)}s`,
    opacity: Math.random() * 0.6 + 0.2,
  }));
}

const STARS = generateStars(100);

export default function App() {
  const [boxOpened, setBoxOpened] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [boxContainerHidden, setBoxContainerHidden] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const hasOpenedRef = useRef(false);

  const handleBoxClick = () => {
    if (hasOpenedRef.current) return;
    hasOpenedRef.current = true;

    setHeaderHidden(true);
    setBoxOpened(true);

    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#d4af37", "#ffffff", "#b8860b"],
      });
    }, 500);

    setTimeout(() => {
      setBoxContainerHidden(true);
      setMessageVisible(true);
    }, 800);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Starfield */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {STARS.map((star) => (
          <div
            key={star.id}
            className="star"
            style={
              {
                left: star.left,
                top: star.top,
                "--twinkle-duration": star.duration,
                "--twinkle-delay": star.delay,
                opacity: star.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Main content */}
      <div
        style={{
          textAlign: "center",
          zIndex: 10,
          position: "relative",
          padding: "2rem",
        }}
      >
        {/* Header */}
        <div
          style={{
            transition: "opacity 0.5s ease",
            opacity: headerHidden ? 0 : 1,
            marginBottom: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              color: "#d4af37",
              textShadow:
                "0 0 10px rgba(212, 175, 55, 0.5), 0 0 20px rgba(212, 175, 55, 0.2)",
              margin: "0 0 0.5rem",
            }}
          >
            Hey Samiya, I have a surprise for you!
          </h1>
          <p style={{ color: "#888", fontSize: "0.95rem", margin: 0 }}>
            (Click the box to open)
          </p>
        </div>

        {/* Gift Box */}
        {!boxContainerHidden && (
          <button
            data-ocid="gift.canvas_target"
            type="button"
            aria-label="Open birthday surprise"
            style={{
              position: "relative",
              cursor: "pointer",
              width: "200px",
              height: "200px",
              margin: "0 auto",
              perspective: "1000px",
              background: "none",
              border: "none",
              padding: 0,
              display: "block",
            }}
            onClick={handleBoxClick}
          >
            <div
              ref={boxRef}
              className={boxOpened ? "box-open" : ""}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundColor: "#1a1a1a",
                border: "2px solid #d4af37",
                boxShadow:
                  "0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Vertical ribbon */}
              <div
                style={{
                  position: "absolute",
                  width: "30px",
                  height: "100%",
                  background:
                    "linear-gradient(to right, #b8860b, #d4af37, #b8860b)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                }}
              />
              {/* Horizontal ribbon */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "30px",
                  background:
                    "linear-gradient(to bottom, #b8860b, #d4af37, #b8860b)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                }}
              />
            </div>
          </button>
        )}

        {/* Birthday Message */}
        {messageVisible && (
          <div
            data-ocid="birthday.card"
            className="message-visible"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                background: "linear-gradient(45deg, #d4af37, #f7ef8a, #b8860b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "0 0 1.5rem",
                lineHeight: 1.2,
              }}
            >
              Happy Birthday, Samiya! 🎂
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#e6e6e6",
                maxWidth: "80%",
                margin: "0 auto 1.5rem",
                lineHeight: 1.6,
              }}
            >
              &ldquo;Wishing you a day filled with laughter, love, and all the
              gold in the world. May your year ahead be as bright and beautiful
              as you are!&rdquo;
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#d4af37",
                margin: 0,
                letterSpacing: "0.05em",
              }}
            >
              ✨ Keep Shining ✨
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: "1rem",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 10,
          fontSize: "0.75rem",
          color: "#444",
        }}
      >
        © {new Date().getFullYear()}. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#d4af37", textDecoration: "none" }}
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
