import { useState } from "react";
import CardioTraining from "../img/CardioTraining.png";
import CrossFitTraining from "../img/CrossFitTraining.png";
import groupFitness from "../img/GroupFitness.png";
import NutritionCoaching from "../img/NutritionCoaching.png";
import PersonalTraining from "../img/PersonalTraining.png";
import WeightTraining from "../img/weightTraining.png";

const services = [
  {
    title: "Personal Training",
    desc: "Tailored 1-On-1 performance programming",
    img: PersonalTraining,
  },
  {
    title: "Group Fitness Classes",
    desc: "High energy community training session",
    img: groupFitness,
  },
  {
    title: "Cardio Training",
    desc: "Endurance and fat loss conditioning",
    img: CardioTraining,
  },
  {
    title: "Weight Training",
    desc: "Script muscle and build core strength",
    img: WeightTraining,
  },
  {
    title: "Nutrition Coaching",
    desc: "Personalized meal planning and support",
    img: NutritionCoaching,
  },
  {
    title: "CrossFit Training",
    desc: "Comprehensive physical optimization and tracking",
    img: CrossFitTraining,
  },
];

export default function Service() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@400;500;600&display=swap');
        
        :root {
          --gold-primary : #D4AF37;
          --gold-bright  : #F0C84A;
          --gold-muted   : #C99B13;
          --brown-base   : rgba(56, 35, 7, 0.85);
          --white-overlay: rgba(255, 255, 255, 0.20);
          --card-border  : rgba(212, 175, 55, 0.55);
          --card-border-h: #D4AF37;
        }

        /* ─── Section ─── */
        .svc-section {
          margin-top: 100px;
          padding: 0 60px 80px;
        }

        /* ─── Label row ─── */
        .svc-label-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }
        .svc-label {
          color: var(--gold-muted);
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        /* ─── Heading ─── */
        .svc-heading {
          color: #ffffff;
          font-family: 'Bebas Neue', cursive;
          font-weight: 400;
          font-size: 64px;
          letter-spacing: 5px;
          text-align: center;
          margin: 0 0 60px;
          line-height: 1;
          text-shadow: 0 0 60px rgba(212, 175, 55, 0.18);
        }

        /* ─── Grid ─── */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 44px 36px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ─── Card ───
           Figma fill stack (top → bottom):
             #FFFFFF  20% opacity  → var(--white-overlay)
             #382307  85% opacity  → var(--brown-base)
        */
        .svc-card {
          position: relative;
          background:
            linear-gradient(var(--white-overlay), var(--white-overlay)),
            var(--brown-base);
          border: 1.5px solid var(--card-border);
          border-radius: 18px;
          padding: 44px 28px 38px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 200px;
          cursor: pointer;
          box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.07);
          transition:
            transform      0.30s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow     0.30s ease,
            border-color   0.30s ease;
          /* staggered load reveal */
          animation: cardReveal 0.55s ease both;
        }
        .svc-card:nth-child(1){ animation-delay:0.05s }
        .svc-card:nth-child(2){ animation-delay:0.13s }
        .svc-card:nth-child(3){ animation-delay:0.21s }
        .svc-card:nth-child(4){ animation-delay:0.29s }
        .svc-card:nth-child(5){ animation-delay:0.37s }
        .svc-card:nth-child(6){ animation-delay:0.45s }

        @keyframes cardReveal {
          from { opacity:0; transform:translateY(28px) scale(0.97); }
          to   { opacity:1; transform:translateY(0)    scale(1);    }
        }

        /* inner diagonal glow */
        .svc-card::before {
          content:'';
          position:absolute; inset:0;
          border-radius:18px;
          background: linear-gradient(145deg, rgba(212,175,55,0.08) 0%, transparent 55%);
          transition: opacity 0.30s ease;
          pointer-events:none;
        }

        /* top shimmer line */
        .svc-card::after {
          content:'';
          position:absolute;
          top:0; left:12%; right:12%;
          height:1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.75) 50%, transparent);
          border-radius:0 0 4px 4px;
          opacity:0;
          transition: opacity 0.30s ease;
          pointer-events:none;
        }

        /* ─── Hover ─── */
        .svc-card.is-hovered {
          transform: translateY(-8px) scale(1.025);
          border-color: var(--card-border-h);
          box-shadow:
            0 16px 48px rgba(0,0,0,0.55),
            0 0 0  1px rgba(212,175,55,0.4),
            0 0 32px rgba(212,175,55,0.12);
        }
        .svc-card.is-hovered::before { opacity:2; }
        .svc-card.is-hovered::after  { opacity:1; }

        /* ─── Icon wrapper ─── */
        .svc-icon-wrap {
          width:72px; height:72px;
          margin-bottom:22px;
          display:flex; align-items:center; justify-content:center;
          position:relative;
        }
        /* radial gold halo */
        .svc-icon-wrap::before {
          content:'';
          position:absolute; inset:-8px;
          border-radius:50%;
          background: radial-gradient(circle, rgba(212,175,55,0.20) 0%, transparent 70%);
          opacity:0;
          transition: opacity 0.30s ease;
        }
        .svc-card.is-hovered .svc-icon-wrap::before { opacity:1; }

        /* ─── Icon ─── */
        .svc-icon {
          width:72px; height:72px;
          object-fit:contain;
          /* dark silhouette matching design */
          filter: brightness(0) saturate(0);
          transition:
            filter    0.30s ease,
            transform 0.30s cubic-bezier(0.34,1.56,0.64,1);
        }
        /* warm gold tint on hover */
        .svc-card.is-hovered .svc-icon {
          filter: brightness(0) saturate(100%) invert(70%) sepia(60%) saturate(400%) hue-rotate(5deg) brightness(0.85);
          transform: scale(1.10) translateY(-2px);
        }

        /* ─── Divider bar ─── */
        .svc-divider {
          width:32px; height:2px;
          background: linear-gradient(90deg, var(--gold-muted), var(--gold-bright));
          border-radius:2px;
          margin-bottom:14px;
          opacity:0.5;
          transition: width 0.30s ease, opacity 0.30s ease;
        }
        .svc-card.is-hovered .svc-divider { width:56px; opacity:1; }

        /* ─── Title ─── */
        .svc-title {
          color:#ffffff;
          font-family:'Barlow Condensed', sans-serif;
          font-weight:700;
          font-size:21px;
          letter-spacing:0.5px;
          text-align:center;
          margin-bottom:10px;
        }

        /* ─── Description ─── */
        .svc-desc {
          color: var(--gold-primary);
          font-family:'Barlow', sans-serif;
          font-weight:500;
          font-size:14.5px;
          text-align:center;
          line-height:1.6;
          opacity:0.88;
          transition: opacity 0.25s ease;
        }
        .svc-card.is-hovered .svc-desc { opacity:1; }

        /* ─── Responsive ─── */
        @media (max-width:1024px){
          .svc-heading{ font-size:52px; }
        }
        @media (max-width:900px){
          .svc-grid{ grid-template-columns:repeat(2,1fr); gap:32px 24px; }
          .svc-section{ padding:0 32px 60px; }
        }
        @media (max-width:560px){
          .svc-grid{ grid-template-columns:1fr; }
          .svc-heading{ font-size:44px; letter-spacing:3px; }
          .svc-section{ padding:0 20px 48px; }
        }
      `}</style>

      <section className="svc-section">
        {/* Label */}
        <div className="svc-label-row">
          <span className="svc-label-line" />
          <span className="svc-label">Our Service</span>
        </div>

        {/* Heading */}
        <h1 className="svc-heading">ELITE LEVEL TRAINING</h1>

        {/* Cards */}
        <div className="svc-grid">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`svc-card${hovered === i ? " is-hovered" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="svc-icon-wrap">
                <img
                  src={service.img}
                  alt={service.title}
                  className="svc-icon"
                />
              </div>

              {/* expanding gold divider */}
              <div className="svc-divider" />

              <div className="svc-title">{service.title}</div>
              <div className="svc-desc">{service.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
