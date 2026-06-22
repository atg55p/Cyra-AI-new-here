import React from "react";

/* ── Static data ──────────────────────────────────────────────────────────── */

const accounts = [
  {
    name: "SecureCloud Systems",
    score: 94,
    scoreClass: "score-high",
    barColor: "linear-gradient(90deg,#34d399,#10b981)",
    barWidth: "94%",
    animDelay: "0.55s",
  },
  {
    name: "Nexus Defense Tech",
    score: 78,
    scoreClass: "score-mid",
    barColor: "linear-gradient(90deg,#7b4f91,#59376D)",
    barWidth: "78%",
    animDelay: "0.75s",
  },
  {
    name: "Vertex Risk Partners",
    score: 52,
    scoreClass: "score-low",
    barColor: "linear-gradient(90deg,#d97706,#92400e)",
    barWidth: "52%",
    animDelay: "0.95s",
  },
];

const signals = [
  {
    label: "Hiring Security Engineers",
    color: "#34d399",
    shadow: "rgba(52,211,153,0.65)",
    animDelay: "0.6s",
    dotDelay: "0s",
  },
  {
    label: "Recent Funding Round",
    color: "#fbbf24",
    shadow: "rgba(251,191,36,0.65)",
    animDelay: "0.8s",
    dotDelay: "0.35s",
  },
  {
    label: "Viewed Pricing Page",
    color: "#60a5fa",
    shadow: "rgba(96,165,250,0.65)",
    animDelay: "1.0s",
    dotDelay: "0.7s",
  },
  {
    label: "Compliance Gap Detected",
    color: "#f87171",
    shadow: "rgba(248,113,113,0.65)",
    animDelay: "1.2s",
    dotDelay: "1.05s",
  },
];

const outreachItems = [
  {
    name: "Sarah Chen, CISO",
    company: "SecureCloud Systems",
    status: "Sent",
    statusClass: "status-sent",
    animDelay: "0.95s",
  },
  {
    name: "Marcus Webb, VP Sec",
    company: "Nexus Defense Tech",
    status: "Drafting",
    statusClass: "status-drafting",
    animDelay: "1.15s",
  },
  {
    name: "Priya Nair, CISO",
    company: "Vertex Risk Partners",
    status: "Queued",
    statusClass: "status-queued",
    animDelay: "1.35s",
  },
];

const impactItems = [
  { text: "Higher-quality buyer engagement" },
  { text: "More relevant conversations" },
  { text: "Faster account prioritization" },
  { text: "Less wasted outreach" },
  { text: "Repeatable outbound for security vendors" },
];

// Duplicate for seamless marquee
const allImpactItems = [...impactItems, ...impactItems];

const signalDots = [
  { top: "14%", left: "7%",  size: "3px", delay: "0s" },
  { top: "22%", left: "91%", size: "4px", delay: "0.6s" },
  { top: "38%", left: "4%",  size: "3px", delay: "1.1s" },
  { top: "55%", left: "94%", size: "4px", delay: "1.7s" },
  { top: "68%", left: "11%", size: "3px", delay: "0.9s" },
  { top: "79%", left: "87%", size: "3px", delay: "2.1s" },
  { top: "18%", left: "48%", size: "2px", delay: "1.4s" },
  { top: "50%", left: "28%", size: "3px", delay: "0.4s" },
  { top: "33%", left: "68%", size: "2px", delay: "1.9s" },
  { top: "83%", left: "42%", size: "4px", delay: "0.7s" },
  { top: "10%", left: "30%", size: "2px", delay: "2.4s" },
  { top: "72%", left: "60%", size: "3px", delay: "1.6s" },
];

/* ── CyraLogo icon for impact strip ─────────────────────────────────────── */
function CyraIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M9.5 3.5C8.6 2.6 7.4 2 6 2C3.8 2 2 3.8 2 6C2 8.2 3.8 10 6 10C7.4 10 8.6 9.4 9.5 8.5"
        stroke="#E1D3EB"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9.5" cy="6" r="1" fill="#7b4f91" />
    </svg>
  );
}

/* ── Arrow icon ──────────────────────────────────────────────────────────── */
function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Play icon ───────────────────────────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M4 2.5l8 4.5-8 4.5V2.5z" fill="currentColor" />
    </svg>
  );
}

/* ── SVG data-line overlay between dashboard panels ─────────────────────── */
function DataLines() {
  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
      }}
      overflow="visible"
    >
      <line
        className="data-line"
        x1="33.3%"
        y1="40%"
        x2="66.6%"
        y2="40%"
        stroke="rgba(89,55,109,0.5)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <line
        className="data-line data-line-2"
        x1="33.3%"
        y1="55%"
        x2="66.6%"
        y2="55%"
        stroke="rgba(89,55,109,0.4)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <line
        className="data-line data-line-3"
        x1="33.3%"
        y1="68%"
        x2="66.6%"
        y2="68%"
        stroke="rgba(89,55,109,0.35)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

/* ── Main component ──────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse 110% 55% at 50% 0%, rgba(89,55,109,0.13) 0%, transparent 65%), #080b12",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "clamp(64px, 8vh, 104px)",
        paddingBottom: "72px",
      }}
    >
      {/* ── Cyber grid background ────────────────────────────────────────── */}
      <div className="cyber-grid-bg" />

      {/* ── Ambient glow orbs ────────────────────────────────────────────── */}
      <div
        className="glow-orb"
        style={{
          width: "700px",
          height: "380px",
          background:
            "radial-gradient(ellipse, rgba(89,55,109,0.22) 0%, transparent 70%)",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "350px",
          height: "280px",
          background:
            "radial-gradient(ellipse, rgba(89,55,109,0.12) 0%, transparent 70%)",
          bottom: "80px",
          right: "-60px",
          animationDelay: "3.5s",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "280px",
          height: "220px",
          background:
            "radial-gradient(ellipse, rgba(89,55,109,0.1) 0%, transparent 70%)",
          bottom: "200px",
          left: "-40px",
          animationDelay: "1.8s",
        }}
      />

      {/* ── Scattered signal dots ─────────────────────────────────────────── */}
      {signalDots.map((dot, i) => (
        <div
          key={i}
          className="signal-dot"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
          }}
        />
      ))}

      {/* ════════════════════════════════════════════════════════════════════
          HERO CONTENT
      ════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "860px",
          padding: "0 24px",
          width: "100%",
          animation: "fade-in-up 0.75s ease forwards",
        }}
      >
        {/* Eyebrow */}
        <div className="eyebrow-pill" style={{ marginBottom: "30px" }}>
          <span className="eyebrow-dot" />
          AI-powered outbound for cybersecurity vendors
        </div>

        {/* Headline */}
        <h1 className="hero-headline" style={{ marginBottom: "22px" }}>
          Turn security buyer signals into{" "}
          <span className="gradient-text">qualified pipeline.</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            color: "rgba(225,211,235,0.6)",
            lineHeight: 1.65,
            maxWidth: "560px",
            marginBottom: "42px",
          }}
        >
          Cyra AI helps cybersecurity vendors find high-fit accounts, detect
          buying intent, and start relevant conversations.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="#demo" className="btn-primary">
            Book a Demo
            <ArrowRight />
          </a>
          <a href="#demo" className="btn-secondary">
            <PlayIcon />
            See Cyra AI in Action
          </a>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          DASHBOARD VISUAL
      ════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "960px",
          padding: "0 24px",
          marginTop: "clamp(44px, 5vw, 72px)",
          marginBottom: "48px",
          opacity: 0,
          animation: "fade-in-up 0.9s ease 0.25s forwards",
        }}
      >
        <div className="dashboard-outer">
          {/* Header bar */}
          <div className="dashboard-header">
            <div className="window-controls">
              <div
                className="window-dot"
                style={{ background: "#ff5f57", opacity: 0.85 }}
              />
              <div
                className="window-dot"
                style={{ background: "#febc2e", opacity: 0.85 }}
              />
              <div
                className="window-dot"
                style={{ background: "#28c840", opacity: 0.85 }}
              />
            </div>
            <span className="dashboard-title">
              Cyra Intelligence — Outbound Console
            </span>
            <div className="live-badge">
              <span className="live-dot" />
              LIVE
            </div>
          </div>

          {/* Three-column grid */}
          <div className="dashboard-grid" style={{ position: "relative" }}>
            {/* SVG lines between panels */}
            <DataLines />

            {/* ── Panel 1: High-Fit Accounts ─────────────────────────────── */}
            <div className="dashboard-panel">
              <div className="panel-title">
                <span className="panel-title-dot" />
                High-Fit Accounts
              </div>

              {accounts.map((acc) => (
                <div
                  key={acc.name}
                  className="account-card"
                  style={{ animationDelay: acc.animDelay }}
                >
                  <div className="account-info">
                    <div className="account-name">{acc.name}</div>
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{
                          background: acc.barColor,
                          width: acc.barWidth,
                          animationDelay: acc.animDelay,
                        }}
                      />
                    </div>
                  </div>
                  <span className={`score-badge ${acc.scoreClass}`}>
                    {acc.score}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Panel 2: Intent Signals ───────────────────────────────── */}
            <div className="dashboard-panel">
              <div className="panel-title">
                <span className="panel-title-dot" />
                Intent Signals
              </div>

              {signals.map((sig) => (
                <div
                  key={sig.label}
                  className="signal-item"
                  style={{ animationDelay: sig.animDelay }}
                >
                  <span
                    className="signal-indicator"
                    style={{
                      background: sig.color,
                      boxShadow: `0 0 7px ${sig.shadow}`,
                      animationDelay: sig.dotDelay,
                    }}
                  />
                  <span className="signal-label">{sig.label}</span>
                </div>
              ))}
            </div>

            {/* ── Panel 3: AI SDR Outreach ──────────────────────────────── */}
            <div className="dashboard-panel">
              <div className="panel-title">
                <span className="panel-title-dot" />
                AI SDR Outreach
              </div>

              {/* Generating indicator */}
              <div
                className="outreach-generating"
                style={{ animationDelay: "0.75s" }}
              >
                <div className="generating-dots">
                  <span className="gen-dot" />
                  <span className="gen-dot" />
                  <span className="gen-dot" />
                </div>
                <span className="generating-text">Generating outreach...</span>
              </div>

              {/* Outreach items */}
              {outreachItems.map((item) => (
                <div
                  key={item.name}
                  className="outreach-card"
                  style={{ animationDelay: item.animDelay }}
                >
                  <div className="outreach-row">
                    <span className="outreach-name">{item.name}</span>
                    <span className={`status-pill ${item.statusClass}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="outreach-company">{item.company}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scan overlay */}
          <div className="scan-overlay">
            <div className="scan-line" />
          </div>
        </div>

        {/* Glow under dashboard */}
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "60px",
            background: "rgba(89,55,109,0.15)",
            filter: "blur(30px)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          IMPACT MARQUEE STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          opacity: 0,
          animation: "fade-in 0.8s ease 0.55s forwards",
        }}
      >
        {/* Section label */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.68rem",
            fontWeight: 600,
            color: "rgba(225,211,235,0.35)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Built for results
        </p>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {allImpactItems.map((item, i) => (
              <div key={i} className="impact-card">
                <div className="impact-icon-wrap">
                  <CyraIcon />
                </div>
                <span className="impact-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
