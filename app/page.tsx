import Akatsuki from "@/components/sections/Akatsuki";
import Characters from "@/components/sections/Characters";
import Hero from "@/components/sections/Hero";
import Kara from "@/components/sections/Kara";
import TailedBeasts from "@/components/sections/TailedBeasts";
import React from "react";

const Home = async () => {
  return (
    <main>
      <Hero />
      <Characters />
      <TailedBeasts />
      <Akatsuki />
      <Kara />
    </main>
  );
};

export default Home;
