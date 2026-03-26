/**
 * Animated line-drawing SVG illustration:
 * Three people having a meeting / working at a table.
 * Uses stroke-dasharray animation for a "drawing" effect on load.
 * Navy (#0b0f24) lines with orange (#ff5a1f) accent details.
 */
const TeamIllustration = () => (
  <svg
    viewBox="0 0 520 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="team-svg"
    aria-label="Illustration équipe en réunion"
  >
    <style>{`
      .svg-path {
        stroke-dasharray: 1200;
        stroke-dashoffset: 1200;
        animation: svgDraw 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      .svg-accent {
        stroke-dasharray: 400;
        stroke-dashoffset: 400;
        animation: svgDraw 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      .d1 { animation-delay: 0.0s; }
      .d2 { animation-delay: 0.15s; }
      .d3 { animation-delay: 0.3s; }
      .d4 { animation-delay: 0.45s; }
      .d5 { animation-delay: 0.6s; }
      .d6 { animation-delay: 0.75s; }
      .d7 { animation-delay: 0.9s; }
      .d8 { animation-delay: 1.05s; }
      .d9 { animation-delay: 1.2s; }
      .d10 { animation-delay: 1.35s; }
      .d11 { animation-delay: 1.5s; }
      .d12 { animation-delay: 1.65s; }
      @keyframes svgDraw {
        to { stroke-dashoffset: 0; }
      }
      /* Floating dots pulse */
      .dot-pulse {
        animation: dotPulse 2s ease-in-out infinite;
      }
      .dot-pulse-2 { animation-delay: 0.4s; }
      .dot-pulse-3 { animation-delay: 0.8s; }
      @keyframes dotPulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50%       { opacity: 1;   transform: scale(1.4); }
      }
      /* Chart bar grow */
      .bar-grow {
        transform-origin: bottom;
        animation: barGrow 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        animation-delay: 1.5s;
        transform: scaleY(0);
      }
      @keyframes barGrow {
        to { transform: scaleY(1); }
      }
      /* Laptop screen blink */
      .screen-blink {
        animation: screenBlink 3s ease-in-out infinite;
        animation-delay: 2s;
      }
      @keyframes screenBlink {
        0%, 90%, 100% { opacity: 1; }
        95%           { opacity: 0.2; }
      }
      /* Hover float */
      .team-svg:hover .float-group {
        animation: svgFloat 2.5s ease-in-out infinite;
      }
      @keyframes svgFloat {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(-6px); }
      }
    `}</style>

    {/* ── DESK / TABLE ── */}
    {/* Desk top */}
    <rect className="svg-path d1" x="60" y="190" width="400" height="18" rx="4"
      stroke="#0b0f24" strokeWidth="2.5" />
    {/* Desk left leg */}
    <rect className="svg-path d2" x="80"  y="208" width="12" height="80" rx="3"
      stroke="#0b0f24" strokeWidth="2.5" />
    {/* Desk right leg */}
    <rect className="svg-path d2" x="428" y="208" width="12" height="80" rx="3"
      stroke="#0b0f24" strokeWidth="2.5" />
    {/* Desk cross supports */}
    <line className="svg-path d3" x1="86" y1="260" x2="200" y2="235"
      stroke="#0b0f24" strokeWidth="1.5" strokeDasharray="6 4"/>
    <line className="svg-path d3" x1="434" y1="260" x2="320" y2="235"
      stroke="#0b0f24" strokeWidth="1.5" strokeDasharray="6 4"/>

    {/* ── LAPTOP on desk ── */}
    <g className="float-group">
      {/* Screen body */}
      <rect className="svg-path d4" x="205" y="130" width="110" height="70" rx="5"
        stroke="#0b0f24" strokeWidth="2.5"/>
      {/* Screen glow fill */}
      <rect className="screen-blink" x="210" y="135" width="100" height="60" rx="3"
        fill="#ff5a1f" fillOpacity="0.08"/>
      {/* Screen lines (code) */}
      <line className="svg-accent d5" x1="218" y1="148" x2="268" y2="148"
        stroke="#ff5a1f" strokeWidth="2" strokeLinecap="round"/>
      <line className="svg-accent d5" x1="218" y1="158" x2="252" y2="158"
        stroke="#0b0f24" strokeWidth="1.5" strokeLinecap="round"/>
      <line className="svg-accent d5" x1="218" y1="166" x2="260" y2="166"
        stroke="#0b0f24" strokeWidth="1.5" strokeLinecap="round"/>
      <line className="svg-accent d5" x1="218" y1="174" x2="240" y2="174"
        stroke="#ff5a1f" strokeWidth="2" strokeLinecap="round"/>
      {/* Laptop base */}
      <path className="svg-path d4" d="M200 200 Q260 205 320 200"
        stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
      <line className="svg-path d4" x1="200" y1="200" x2="320" y2="200"
        stroke="#0b0f24" strokeWidth="4" strokeLinecap="round"/>
    </g>

    {/* ── CHART board (right background) ── */}
    <rect className="svg-path d3" x="360" y="60" width="100" height="110" rx="5"
      stroke="#0b0f24" strokeWidth="2"/>
    {/* Chart bars */}
    <rect className="bar-grow" x="374" y="110" width="14" height="45" rx="2"
      fill="#ff5a1f" fillOpacity="0.85"/>
    <rect className="bar-grow" x="394" y="128" width="14" height="27" rx="2"
      fill="#0b0f24" fillOpacity="0.6"/>
    <rect className="bar-grow" x="414" y="98" width="14" height="57" rx="2"
      fill="#ff5a1f" fillOpacity="0.85"/>
    <rect className="bar-grow" x="434" y="118" width="14" height="37" rx="2"
      fill="#0b0f24" fillOpacity="0.6"/>
    {/* Baseline */}
    <line className="svg-accent d6" x1="370" y1="155" x2="455" y2="155"
      stroke="#0b0f24" strokeWidth="1.5"/>
    {/* Chart title dot */}
    <text x="375" y="80" fontSize="9" fill="#0b0f24" fontFamily="sans-serif" opacity="0.7">Performance</text>

    {/* ── PERSON 1 (Left) — standing, glasses ── */}
    {/* Head */}
    <circle className="svg-path d4" cx="110" cy="115" r="22"
      stroke="#0b0f24" strokeWidth="2.5"/>
    {/* Glasses */}
    <rect className="svg-accent d5" x="100" y="110" width="10" height="7" rx="2"
      stroke="#ff5a1f" strokeWidth="1.8"/>
    <rect className="svg-accent d5" x="113" y="110" width="10" height="7" rx="2"
      stroke="#ff5a1f" strokeWidth="1.8"/>
    <line className="svg-accent d5" x1="110" y1="113" x2="113" y2="113"
      stroke="#ff5a1f" strokeWidth="1.5"/>
    {/* Hair */}
    <path className="svg-path d4" d="M89 110 Q110 92 131 110"
      stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Neck */}
    <line className="svg-path d5" x1="110" y1="137" x2="110" y2="155"
      stroke="#0b0f24" strokeWidth="3" strokeLinecap="round"/>
    {/* Body */}
    <path className="svg-path d5" d="M75 155 Q110 150 145 155 L148 200 Q110 207 72 200 Z"
      stroke="#0b0f24" strokeWidth="2.5"/>
    {/* Left arm pointing at board */}
    <path className="svg-path d6" d="M145 165 Q180 155 210 148"
      stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Right arm down */}
    <path className="svg-path d6" d="M75 165 Q60 180 65 195"
      stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Legs */}
    <line className="svg-path d7" x1="88"  y1="200" x2="85"  y2="280"
      stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
    <line className="svg-path d7" x1="132" y1="200" x2="135" y2="280"
      stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Shoes */}
    <path className="svg-path d8" d="M75 280 Q85 285 100 282"
      stroke="#0b0f24" strokeWidth="3" strokeLinecap="round"/>
    <path className="svg-path d8" d="M125 280 Q135 285 150 282"
      stroke="#0b0f24" strokeWidth="3" strokeLinecap="round"/>

    {/* ── PERSON 2 (Center) — sitting, female ── */}
    {/* Head */}
    <circle className="svg-path d4" cx="260" cy="110" r="22"
      stroke="#0b0f24" strokeWidth="2.5"/>
    {/* Long hair */}
    <path className="svg-path d4" d="M238 112 Q235 145 240 165"
      stroke="#0b0f24" strokeWidth="3" strokeLinecap="round"/>
    <path className="svg-path d4" d="M282 112 Q285 145 280 165"
      stroke="#0b0f24" strokeWidth="3" strokeLinecap="round"/>
    <path className="svg-path d4" d="M238 108 Q260 96 282 108"
      stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Neck */}
    <line className="svg-path d5" x1="260" y1="132" x2="260" y2="150"
      stroke="#0b0f24" strokeWidth="3" strokeLinecap="round"/>
    {/* Body (seated, leaning forward) */}
    <path className="svg-path d5" d="M228 150 Q260 145 292 150 L295 195 Q260 202 225 195 Z"
      stroke="#0b0f24" strokeWidth="2.5"/>
    {/* Arm on desk / typing */}
    <path className="svg-path d6" d="M296 170 Q310 182 315 190"
      stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
    <path className="svg-path d6" d="M225 170 Q212 182 210 190"
      stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Chair back */}
    <path className="svg-path d7" d="M222 150 Q215 230 220 280"
      stroke="#0b0f24" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3"/>
    <path className="svg-path d7" d="M298 150 Q305 230 300 280"
      stroke="#0b0f24" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3"/>

    {/* ── PERSON 3 (Right) — sitting, male ── */}
    {/* Head */}
    <circle className="svg-path d4" cx="410" cy="115" r="22"
      stroke="#0b0f24" strokeWidth="2.5"/>
    {/* Short hair */}
    <path className="svg-path d4" d="M389 110 Q410 94 431 110"
      stroke="#0b0f24" strokeWidth="3" strokeLinecap="round"/>
    {/* Neck */}
    <line className="svg-path d5" x1="410" y1="137" x2="410" y2="155"
      stroke="#0b0f24" strokeWidth="3" strokeLinecap="round"/>
    {/* Body */}
    <path className="svg-path d5" d="M376 155 Q410 150 444 155 L446 200 Q410 207 374 200 Z"
      stroke="#0b0f24" strokeWidth="2.5"/>
    {/* Left arm on desk */}
    <path className="svg-path d6" d="M376 168 Q350 178 325 188"
      stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Right arm */}
    <path className="svg-path d6" d="M444 168 Q458 178 460 192"
      stroke="#0b0f24" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Chair back */}
    <path className="svg-path d7" d="M374 155 Q367 230 372 280"
      stroke="#0b0f24" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3"/>
    <path className="svg-path d7" d="M446 155 Q453 230 448 280"
      stroke="#0b0f24" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3"/>

    {/* ── FLOATING ACCENT ELEMENTS ── */}
    {/* Wifi / signal bars above laptop */}
    <path className="svg-accent d9" d="M248 118 Q260 108 272 118"
      stroke="#ff5a1f" strokeWidth="2" strokeLinecap="round"/>
    <path className="svg-accent d9" d="M242 112 Q260 98 278 112"
      stroke="#ff5a1f" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    {/* Dot on wifi */}
    <circle cx="260" cy="122" r="2.5" fill="#ff5a1f" className="dot-pulse"/>

    {/* Speech bubble (person 2) */}
    <rect className="svg-accent d10" x="272" y="68" width="70" height="28" rx="8"
      stroke="#0b0f24" strokeWidth="1.8"/>
    <path className="svg-accent d10" d="M278 96 L272 106 L288 96"
      stroke="#0b0f24" strokeWidth="1.5" strokeLinejoin="round" fill="white"/>
    <line className="svg-accent d11" x1="280" y1="77" x2="310" y2="77"
      stroke="#0b0f24" strokeWidth="1.5" strokeLinecap="round"/>
    <line className="svg-accent d11" x1="280" y1="84" x2="302" y2="84"
      stroke="#ff5a1f" strokeWidth="1.5" strokeLinecap="round"/>

    {/* Small notification dots */}
    <circle cx="450" cy="80"  r="4" fill="#ff5a1f" className="dot-pulse dot-pulse-2" fillOpacity="0.8"/>
    <circle cx="340" cy="55"  r="3" fill="#0b0f24" className="dot-pulse dot-pulse-3" fillOpacity="0.4"/>
    <circle cx="70"  cy="75"  r="3" fill="#ff5a1f" className="dot-pulse"             fillOpacity="0.6"/>
    <circle cx="480" cy="160" r="5" fill="#0b0f24" className="dot-pulse dot-pulse-2" fillOpacity="0.2"/>

    {/* Coffee cup (left of desk) */}
    <path className="svg-accent d12" d="M55 182 L55 196 Q60 202 68 202 Q76 202 81 196 L81 182 Z"
      stroke="#0b0f24" strokeWidth="2"/>
    <path className="svg-accent d12" d="M81 186 Q90 186 90 192 Q90 198 81 198"
      stroke="#0b0f24" strokeWidth="2" strokeLinecap="round"/>
    {/* Steam */}
    <path className="svg-accent d12" d="M62 178 Q64 173 62 168"
      stroke="#0b0f24" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path className="svg-accent d12" d="M68 178 Q70 172 68 166"
      stroke="#0b0f24" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export default TeamIllustration;
