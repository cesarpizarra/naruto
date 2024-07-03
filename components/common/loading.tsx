import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-darkPrimary text-primary">
      <Image src="/loading.gif" alt="Loader Gif" width={200} height={200} />
    </div>
  );
};

export default Loading;
