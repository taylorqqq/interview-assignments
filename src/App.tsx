import { useState } from "react";
import CouponBanner from "@/pages/CouponBanner";

function App() {
  const endDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  return (
    <>
      <CouponBanner endDate={endDate}></CouponBanner>
    </>
  );
}

export default App;
