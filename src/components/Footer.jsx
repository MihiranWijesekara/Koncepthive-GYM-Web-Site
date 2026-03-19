export default function Footer() {
  return (
    <>
      <style>{`
        .footer-bar {
          background-color: rgba(95, 94, 94, 0.70);
          width: 100%;
          box-sizing: border-box;
        }

        .footer-inner {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          padding: 18px 24px;
          font-family: Inter, sans-serif;
          font-size: 14px;
          color: #fff;
          text-align: center;
        }

        .footer-copy {
          white-space: nowrap;
        }

        .footer-divider {
          color: #fff;
          opacity: 0.5;
        }

        .footer-link {
          color: #fff;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #C99B13;
        }

        @media (max-width: 480px) {
          .footer-inner {
            flex-direction: column;
            gap: 8px;
            padding: 16px 16px;
            font-size: 13px;
          }

          .footer-divider {
            display: none;
          }
        }
      `}</style>

      <footer className="footer-bar">
        <div className="footer-inner">
          <span className="footer-copy">
            &copy; 2026 Fitness Sport Center VIP. All Rights Reserved.
          </span>
          <span className="footer-divider">|</span>
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <span className="footer-divider">|</span>
          <a href="/terms-of-service" className="footer-link">
            Terms of Service
          </a>
        </div>
      </footer>
    </>
  );
}
