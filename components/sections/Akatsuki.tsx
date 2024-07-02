"use client";
import { getAllAkatsuki } from "@/services/character";
import { Character } from "@/types/character";
import React, { useEffect, useState } from "react";
import CharacterCard from "../cards/CharacterCard";
import Loading from "../common/loading";

const Akatsuki = () => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await getAllAkatsuki();
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
      <div>
        <h1 className="text-4xl font-bold text-primary">Akatsuki</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 gap-5 py-4 md:grid-cols-4 lg:grid-cols-6">
            {data.slice(0, 12).map(
              (char) =>
                char.images.length > 0 && (
                  <CharacterCard
                    key={char.id}
                    image={char.images[0]}
                    name={char.name}
                    personal={{
                      titles: char.personal.titles,
                      clan: char.personal.clan,
                      classification: char.personal.classification,
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

export default Akatsuki;
