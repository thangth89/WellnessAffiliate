'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!email.trim()) {
    setMessage("Please enter your email");
    setMessageType("error");
    return;
  }

  // ✅ Thông báo ngay
  setMessage("Successfully Subscribed! 🎉");
  setMessageType("success");
  setEmail("");

  // ✅ Fire-and-forget: gửi ngầm
  fetch("/api/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    }),
  }).catch((err) => {
    console.error("Background send failed:", err);
  });

  // ✅ Xóa thông báo sau 5s
  setTimeout(() => {
    setMessage("");
    setMessageType("");
  }, 2000);
};
     
  return (
    <>
      <footer className="footer" role="contentinfo">
        <div className="footer-content">
          {/* Left Column - Company Info */}
          <div className="footer-column">
            <h4>Your Path to Ultimate Wellness</h4>
            <div className="company-info">
              <p><strong>GlobalEcomCom LLC dba Wellness Nest:</strong></p>
              <p><strong>US Address:</strong> 1942 Broadway ste 314c, Boulder Colorado 80302, United States</p>
              <p><strong>HQ:</strong> +1 7194134245</p>
              <p><strong>Support:</strong> +1 8559075279</p>
              <p><strong>Email:</strong> support@wellnessnest.co</p>
            </div>
          </div>

          {/* Middle Column - Policies */}
          <div className="footer-column">
            <h4>Our Policy</h4>
            <ul>
              <li><Link href="/help/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/help/refund-return">Refund & Return Policy</Link></li>
              <li><Link href="/help/shipping-policy">Shipping Policy</Link></li>
              <li><Link href="/help/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Right Column - Newsletter */}
          <div className="footer-column">
            <h4>Get Wellness Nest, Join Our Email List For Exclusive Offers & Update</h4>
            <p>Subscribe to get notified about product launches, special offers and company news</p>
            
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className="signup-btn"
                disabled={isSubmitting || !email.trim()}
              >
                {isSubmitting ? 'Processing...' : 'Sign up'}
              </button>
              
              {message && (
                <div className={`message ${messageType}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span>© 2025 Wellness Unlocked. All rights reserved.</span>
<div className="social-links-bottom">
  {/* Facebook */}
  <a 
    href="http://facebook.com/wellnessunlocked01" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link-small facebook"
    aria-label="Facebook"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/wellness.unlocked.us" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link-small instagram"
    aria-label="Instagram"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25-.88a1.13 1.13 0 1 1-2.25 0a1.13 1.13 0 0 1 2.25 0z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a 
    href="https://www.tiktok.com/@wellness.unlocked.us" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link-small tiktok"
    aria-label="TikTok"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  </a>

  {/* Threads */}
  <a 
    href="https://www.threads.com/@wellness.unlocked.us" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link-small threads"
    aria-label="Threads"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c5.523 0 10 4.477 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12C2 6.477 6.477 2 12 2zm.75 5c-2.07 0-3.75 1.68-3.75 3.75c0 1.32.693 2.475 1.727 3.127c.046-.627.11-1.278.196-1.946c.21-1.61 1.27-2.681 2.682-2.681c1.142 0 1.908.568 2.226 1.47c.17.49.245 1.073.245 1.722c0 1.553-.529 2.692-1.276 3.435c-.748.743-1.778 1.15-2.892 1.15c-1.318 0-2.46-.54-3.223-1.49c.503 1.933 2.22 3.363 4.243 3.363c2.467 0 4.5-2.017 4.5-4.5c0-2.482-2.033-4.5-4.5-4.5z"/>
    </svg>
  </a>
</div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background-color: #22c55e;
          color: white;
          padding: 60px 0 30px;
          margin-top: 0;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer-column h4 {
          color: white;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .company-info p {
          margin-bottom: 8px;
          font-size: 14px;
          line-height: 1.5;
        }

        .company-info strong {
          font-weight: 600;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column ul li {
          margin-bottom: 12px;
        }

        .footer-column ul li a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: opacity 0.3s ease;
        }

        .footer-column ul li a:hover {
          opacity: 0.8;
        }

        .footer-column p {
          color: white;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          max-width: 300px;
        }

        .email-input {
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 16px;
          background-color: white;
          color: #1f2937;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .email-input:focus {
          border-color: #f97316;
        }

        .email-input:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .email-input::placeholder {
          color: #6b7280;
        }

        .signup-btn {
          background-color: #f97316;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .signup-btn:hover:not(:disabled) {
          background-color: #ea580c;
        }

        .signup-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .message {
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
        }

        .message.success {
          background-color: rgba(34, 197, 94, 0.1);
          color: #16a34a;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .message.error {
          background-color: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          margin-top: 40px;
          padding-top: 20px;
        }

        .footer-bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom-content span {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        .social-links-bottom {
          display: flex;
          gap: 15px;
        }

        .social-link-small {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link-small.facebook {
          background-color: #1877f2;
          color: white;
        }

        .social-link-small.facebook:hover {
          background-color: #166fe5;
          transform: translateY(-2px);
        }

        .social-link-small.tiktok {
          background-color: #000;
          color: white;
        }

        .social-link-small.tiktok:hover {
          background-color: #333;
          transform: translateY(-2px);
        }
        .social-link-small.instagram {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
         color: white;
        }
        .social-link-small.instagram:hover {
         opacity: 0.9;
         transform: translateY(-2px);
        }

        .social-link-small.threads {
         background-color: #000;
         color: white;
        }
        .social-link-small.threads:hover {
        background-color: #333;
        transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 0 20px;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
            padding: 0 20px;
          }

          .newsletter-form {
            max-width: 100%;
          }

          .footer-column h4 {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 40px 0 20px;
          }

          .footer-content {
            padding: 0 15px;
          }

          .footer-column h4 {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}



