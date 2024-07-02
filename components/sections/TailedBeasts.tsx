"use client";
import { getAllTailed } from "@/services/tailed";
import { Tailed } from "@/types/tailed";
import React, { useEffect, useState } from "react";
import CharacterCard from "../cards/CharacterCard";
import Loading from "../common/loading";

const TailedBeasts = () => {
  const [data, setData] = useState<Tailed[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = async () => {
    try {
      const response = await getAllTailed();
      setData(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="min-h-screen w-full bg-darkPrimary p-5">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-primary">Tailed Beasts</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 gap-5 py-4 md:grid-cols-4 lg:grid-cols-6">
            {data.map(
              (tail) =>
                tail.images.length > 0 && (
                  <CharacterCard
                    key={tail.id}
                    image={tail.images[0]}
                    name={tail.name}
                    personal={{
                      titles: tail.personal.titles,
                      classification: tail.personal.classification,
                    }}
                  />
                ),
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TailedBeasts;
