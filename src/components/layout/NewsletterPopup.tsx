"use client";

import { useEffect, useState } from "react";

export default function NewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // ⏱ sau 5s hiển thị popup
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage("Please enter your email");
      setMessageType("error");
      return;
    }

    setMessage("You’ve Subscribed! 🎉");
    setMessageType("success");
    setEmail("");
    setShowPopup(false);

    // Gửi ngầm tới Google Sheet
    fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      }),
    }).catch((err) => console.error("Popup send failed:", err));
  };

  if (!showPopup) return null; // không hiển thị cho tới khi setShowPopup(true)

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={() => setShowPopup(false)}>
          ✕
        </button>
        <h3>Receive Offers & Updates</h3>
        <p>Subscribe with your email to never miss special offers.</p>
        <form onSubmit={handleSubmit} className="popup-form">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="Submit">Subscribe</button>
        </form>
        {message && <div className={`message ${messageType}`}>{message}</div>}
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .popup {
          background: white;
          padding: 20px;
          border-radius: 12px;
          max-width: 400px;
          width: 100%;
          text-align: center;
          position: relative;
        }
        .popup h3 {
          margin-bottom: 10px;
          font-size: 20px;
        }
        .popup p {
          margin-bottom: 15px;
          font-size: 14px;
        }
        .popup-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
        }
        button {
          padding: 10px;
          background: #f97316;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

.close-btn:hover {
  color: #ff0000; /* khi hover chuyển sang đỏ */
}
.close-btn {
  position: absolute; /* đặt ở góc */
  top: 10px;
  right: 10px;
  background: transparent; /* nền trong suốt */
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #000; /* đổi màu sang đen */
}
        .message.success {
          color: green;
          margin-top: 10px;
        }
        .message.error {
          color: red;
          margin-top: 10px;
        }

      `}</style>
    </div>
  );
}
