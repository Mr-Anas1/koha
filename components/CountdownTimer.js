'use client';

import { useState, useEffect } from 'react';

/**
 * CountdownTimer — creates urgency with a countdown to deadline
 *
 * Props:
 *   deadline: Date — the deadline date
 *   label?: string — optional label
 */
export default function CountdownTimer({ deadline, label = 'OFFER ENDS IN' }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = deadline - new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const TimeBlock = ({ value, label }) => (
    <div className="countdown__block">
      <span className="countdown__value">{String(value).padStart(2, '0')}</span>
      <span className="countdown__label">{label}</span>
    </div>
  );

  return (
    <div className="countdown">
      <p className="countdown__label-text">{label}</p>
      <div className="countdown__timer">
        <TimeBlock value={timeLeft.days} label="DAYS" />
        <span className="countdown__separator">:</span>
        <TimeBlock value={timeLeft.hours} label="HRS" />
        <span className="countdown__separator">:</span>
        <TimeBlock value={timeLeft.minutes} label="MIN" />
        <span className="countdown__separator">:</span>
        <TimeBlock value={timeLeft.seconds} label="SEC" />
      </div>
    </div>
  );
}
