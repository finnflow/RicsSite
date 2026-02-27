import { motion } from 'motion/react'

export function GoldenBorder() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top elegant curve */}
      <svg
        className="absolute top-0 left-0 w-full h-32 md:h-40"
        viewBox="0 0 1920 160"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CDA776" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#B8935F" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#D4A88C" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#B8935F" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#CDA776" stopOpacity="0.4" />
          </linearGradient>
          <filter id="goldGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M0,80 Q480,20 960,80 T1920,80 L1920,0 L0,0 Z"
          fill="url(#goldGradientTop)"
          filter="url(#goldGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,80 Q480,20 960,80 T1920,80"
          stroke="url(#goldGradientTop)"
          strokeWidth="2"
          fill="none"
          filter="url(#goldGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
        />
      </svg>

      {/* Left flowing border */}
      <svg
        className="absolute left-0 top-0 h-full w-24 md:w-32"
        viewBox="0 0 128 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradientLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CDA776" stopOpacity="0.3" />
            <stop offset="15%" stopColor="#B8935F" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#D4A88C" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#B8935F" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#D4A88C" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#B8935F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#CDA776" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,0 Q40,150 30,300 Q20,450 35,600 Q45,750 25,900 Q15,1000 30,1080"
          stroke="url(#goldGradientLeft)"
          strokeWidth="3"
          fill="none"
          filter="url(#goldGlow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
        />
        {/* Inner accent line */}
        <motion.path
          d="M12,50 Q50,180 40,320 Q30,470 45,620 Q55,770 35,920 Q25,1020 40,1080"
          stroke="url(#goldGradientLeft)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
        />
      </svg>

      {/* Right flowing border */}
      <svg
        className="absolute right-0 top-0 h-full w-24 md:w-32"
        viewBox="0 0 128 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradientRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CDA776" stopOpacity="0.3" />
            <stop offset="15%" stopColor="#D4A88C" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#B8935F" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#D4A88C" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#B8935F" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#D4A88C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#CDA776" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.path
          d="M128,0 Q90,180 95,330 Q105,480 88,630 Q75,780 98,930 Q110,1020 95,1080"
          stroke="url(#goldGradientRight)"
          strokeWidth="3"
          fill="none"
          filter="url(#goldGlow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.4 }}
        />
        {/* Inner accent line */}
        <motion.path
          d="M115,50 Q80,200 85,340 Q95,490 78,640 Q65,790 88,940 Q100,1030 85,1080"
          stroke="url(#goldGradientRight)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.6 }}
        />
      </svg>

      {/* Bottom elegant curve */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 md:h-40"
        viewBox="0 0 1920 160"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CDA776" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#D4A88C" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#B8935F" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#D4A88C" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#CDA776" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,80 Q480,140 960,80 T1920,80 L1920,160 L0,160 Z"
          fill="url(#goldGradientBottom)"
          filter="url(#goldGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.path
          d="M0,80 Q480,140 960,80 T1920,80"
          stroke="url(#goldGradientBottom)"
          strokeWidth="2"
          fill="none"
          filter="url(#goldGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.7 }}
        />
      </svg>
    </div>
  )
}
