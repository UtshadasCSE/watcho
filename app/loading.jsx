import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image src={"/assets/spinner.svg"} alt="Spinner" width={80} height={80} />
    </div>
  );
};

export default loading;
