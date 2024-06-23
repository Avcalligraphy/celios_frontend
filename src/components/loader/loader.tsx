import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Image src="/icons/logo-spinner.png" width={62} height={62} alt="logo" className="fixed x-50" />
      <div className="loader">
        <div></div>
      </div>
    </div>
  );
}
