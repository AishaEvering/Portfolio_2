import styles from "./journeyBotanical.module.scss";

export function JourneyBotanical() {
  return (
    <svg
      className={styles.botanical}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="journeyVineGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--journey-vine-start)" />
          <stop offset="100%" stopColor="var(--journey-vine-end)" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#journeyVineGradient)" strokeLinecap="round">
        <path className={styles.mainVine} d="M1010 -80 C 1090 120, 940 215, 1000 365 S 1070 600, 875 875" strokeWidth="1.6" />
        <path className={styles.orbit} d="M1250 80 C 950 -25, 785 165, 855 320 C 920 460, 1160 375, 1240 265" strokeWidth="1" />
        <path className={styles.orbit} d="M1110 475 C 920 425, 785 520, 795 670 C 805 780, 940 805, 1065 755" strokeWidth="1" />
        <path d="M1003 340 C 950 325, 931 294, 922 255" strokeWidth="1.2" />
        <path d="M1015 458 C 1062 431, 1094 396, 1094 348" strokeWidth="1.2" />
        <path d="M968 644 C 918 634, 884 600, 871 557" strokeWidth="1.2" />
      </g>
      <g className={styles.leaves} fill="var(--journey-leaf)" fillOpacity=".28" stroke="var(--journey-leaf)" strokeWidth="1">
        <path d="M922 255 Q 884 237 891 204 Q 923 216 922 255Z" />
        <path d="M922 255 Q 955 225 947 198 Q 920 214 922 255Z" />
        <path d="M1094 348 Q 1062 327 1069 298 Q 1095 310 1094 348Z" />
        <path d="M1094 348 Q 1127 322 1121 291 Q 1093 309 1094 348Z" />
        <path d="M871 557 Q 839 542 843 511 Q 871 522 871 557Z" />
        <path d="M871 557 Q 899 532 893 501 Q 868 518 871 557Z" />
      </g>
      <g fill="var(--journey-node)">
        <circle cx="1000" cy="365" r="5" />
        <circle cx="968" cy="644" r="4" />
      </g>
    </svg>
  );
}
