import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen w-full bg-darkPrimary p-5">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-primary">
          About This Website
        </h1>
        <p className="mb-12 text-center text-white">
          Welcome! This site was developed with a deep passion for the Naruto
          series. We aim to provide detailed profiles, captivating backstories,
          and unique abilities of your favorite ninjas from the Naruto universe.
          Whether you&apos;re a long-time fan or new to the series, this site
          offers a comprehensive look at the epic adventures of Naruto and his
          comrades.
        </p>

        <div className="mb-12 text-center text-white">
          <h2 className="mb-4 text-2xl font-semibold text-primary">
            Our Mission
          </h2>
          <p>
            Our mission is to create an engaging and informative platform for
            Naruto fans. We strive to bring the rich world of Naruto characters
            to life with accurate and up-to-date information, all in one place.
            Dive deep into the characters profiles, learn about their journeys,
            and explore the intricate details that make the Naruto series so
            beloved.
          </p>
        </div>

        <div className="mb-12 text-center text-white">
          <h2 className="mb-4 text-2xl font-semibold text-primary">
            Development Journey
          </h2>
          <p>
            Developing this website has been a rewarding experience, blending my
            skills in web development with my enthusiasm for anime. The process
            involved extensive research, design, and coding to ensure a seamless
            user experience. I utilized modern web technologies to build a
            responsive and interactive platform that caters to the needs of
            Naruto fans around the world.
          </p>
        </div>

        <div className="mb-12 text-center text-white">
          <h2 className="mb-4 text-2xl font-semibold text-primary">Credits</h2>
          <p>
            This website was developed using the fantastic resources provided by{" "}
            <Link href="https://api-dattebayo.vercel.app/">
              <span className="cursor-pointer text-emerald-500 underline">
                Dattebayo: Your Ultimate Naruto Anime API
              </span>
            </Link>
            . The API has been instrumental in gathering accurate data and
            ensuring the information presented here is reliable and
            comprehensive. We extend our heartfelt thanks to the creators of the
            Dattebayo API for their invaluable contribution to the Naruto fan
            community.
          </p>
        </div>

        <div className="text-center text-white">
          <h2 className="mb-4 text-2xl font-semibold">About the Developer</h2>
          <p>
            I am a dedicated developer with a passion for anime and web
            development. Creating this website has been a labor of love,
            combining my technical skills with my admiration for the Naruto
            series. My goal was to build a platform that fellow fans would find
            informative and enjoyable. I hope you enjoy exploring the site as
            much as I enjoyed building it.
          </p>
        </div>

        <div className="mt-12 text-center text-white">
          <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
          <p>
            If you have any questions, feedback, or suggestions, feel free to
            reach out!
          </p>
          <p>
            Email: <span className="text-primary">cpizarra002@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
