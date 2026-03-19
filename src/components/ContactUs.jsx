export default function ContactUS() {
  return (
    <>
      <style>{`
        .contactus-wrapper {
          display: flex;
         margin-left: 100px;
          align-items: flex-start;
          gap: 48px;
          font-family: Inter, sans-serif;
          background: #000;
          color: #fff;
          box-sizing: border-box;
        }
        .contactus-form {
          flex: 1;
          max-width: 480px;
        }
        .contactus-info {
          flex: 1;
          max-width: 400px;
          margin-top: 180px;
          margin-left: 150px;
        }
        .aboutus-title {
          color: #C99B13;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 8px;
        }
        .aboutus-h1 {
          font-weight: 700;
          font-size: 45px;
          margin: 0;
          color: #fff;
        }
        .aboutus-h2 {
          font-weight: 700;
          font-size: 31px;
          margin: 8px 0 32px 0;
          color: #A9A9A9;
          opacity: 0.6;
        }
        .contactus-input {
          background: #222;
          border: 2px solid #C99B13;
          border-radius: 6px;
          padding: 16px 20px;
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }
        .contactus-textarea {
          background: #222;
          border: 2px solid #C99B13;
          border-radius: 6px;
          padding: 16px 20px;
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          outline: none;
          resize: vertical;
          width: 100%;
          box-sizing: border-box;
        }
        .contactus-btn {
          background: #C99B13;
          color: #fff;
          font-weight: 700;
          font-size: 20px;
          border: none;
          border-radius: 6px;
          padding: 14px 0;
          margin-top: 8px;
          cursor: pointer;
          transition: background 0.2s;
          width: 100%;
        }
        .contactus-info-row {
          display: flex;
          align-items: center;
          margin-bottom: 32px;
        }
        .contactus-info-icon {
          margin-right: 16px;
          flex-shrink: 0;
        }
        .contactus-info-text {
          color: #fff;
          font-size: 18px;
        }
        .contactus-info-link {
          color: #fff;
          font-size: 18px;
          text-decoration: underline;
        }

        @media (max-width: 700px) {
          .contactus-wrapper {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 32px 20px 40px 20px;
          }
          .contactus-form {
            max-width: 100%;
            width: 100%;
          }
          .contactus-info {
            max-width: 100%;
            width: 100%;
            margin-top: 32px;
            padding: 24px 0 0 0;
          }
          .aboutus-title {
            font-size: 16px !important;
          }
          .aboutus-h1 {
            font-size: 28px !important;
          }
          .aboutus-h2 {
            font-size: 20px !important;
            margin-left: 13px !important;
          }
          .contactus-info-text,
          .contactus-info-link {
            font-size: 16px !important;
          }
        }
      `}</style>

      <div className="contactus-wrapper">
        {/* Left: Form Section */}
        <div className="contactus-form">
          <p className="aboutus-title">Contact US</p>
          <h1 className="aboutus-h1">Ready To Transform ?</h1>
          <h2 className="aboutus-h2">Reach Out for a Consultant</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <input
              type="text"
              placeholder="Full  Name"
              className="contactus-input"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="contactus-input"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="contactus-textarea"
            />
            <button type="submit" className="contactus-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info Section */}
        <div className="contactus-info">
          <div className="contactus-info-row">
            <svg
              width="28"
              height="28"
              className="contactus-info-icon"
              fill="#C99B13"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="contactus-info-text">
              123 Fitness Elite Ave, City , Country
            </span>
          </div>
          <div className="contactus-info-row">
            <svg
              width="28"
              height="28"
              className="contactus-info-icon"
              fill="#C99B13"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
            </svg>
            <span className="contactus-info-text">+9471111111</span>
          </div>
          <div className="contactus-info-row">
            <svg
              width="28"
              height="28"
              className="contactus-info-icon"
              fill="#C99B13"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 3.25l-6.6 4.13-6.6-4.13V6l6.6 4.13L18.6 6v1.25z" />
            </svg>
            <a
              href="mailto:info@fitnaslanka.com"
              className="contactus-info-link"
            >
              info@fitnaslanka.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
