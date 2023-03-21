import React, { useState, useEffect } from "react";
import "./CouponBanner.css";

interface CountdownProps {
  endDate: Date;
}

function CouponBanner({ endDate }: CountdownProps) {
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setH(hours);
      setM(minutes);
      setS(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="wrap">
      <div className="person"></div>
      <div className="title"></div>
      <div className="box">
        <div className="time">
          <div className="alertName">Ends in</div>
          <div className="item">
            <div className="rang">{h < 10 ? `0${h}` : h}</div>h
          </div>
          <div className="item">
            <div className="rang">{m < 10 ? `0${m}` : m}</div>m
          </div>
          <div className="item">
            <div className="rang">{s < 10 ? `0${s}` : s}</div>s
          </div>
        </div>
        <div className="greeting"></div>
      </div>
      <div className="slogan">Enjoy now your favorite brands with</div>
    </div>
  );
}

export default CouponBanner;
