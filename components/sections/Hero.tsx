import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-darkPrimary p-5">
      <div className="mx-auto mt-0 grid max-w-6xl lg:mt-20 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/naruto-hero.png"
            alt="Naruto Hero"
            width="500"
            height="500"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 p-5 text-white lg:items-start">
          <h1 className="font-naruto text-4xl font-bold text-primary">
            Naruto Shippuden
          </h1>

          <h2 className="text-xl font-semibold">
            Explore the World of Naruto Characters
          </h2>

          <p>
            Welcome! Explore the rich world of Naruto Shippuden characters.
            Discover detailed profiles, captivating backstories, and unique
            abilities of your favorite ninjas. Whether you&apos;re a long-time
            fan or new to the series, delve into the epic adventures of Naruto
            and his comrades as they navigate the challenges of the ninja world.
            Uncover the legends and powers that shape their destinies in this
            thrilling saga.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
