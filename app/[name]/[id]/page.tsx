"use client";
import Loading from "@/components/common/loading";
import { getCharacterById } from "@/services/character";
import { Character } from "@/types/character";
import { formatArrayOrString } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CharacterId = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [details, setDetails] = useState<Partial<Character>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataId = async () => {
    try {
      const response = await getCharacterById(params.id);
      setTimeout(() => {
        setIsLoading(false);
        setDetails(response);
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataId();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="min-h-screen w-full bg-darkPrimary p-5">
      <div className="mx-auto max-w-6xl text-white">
        <h1 className="text-2xl font-bold text-primary">General Details</h1>
        <div className="mt-4 gap-5 md:flex">
          {details.images && details.images[0] && (
            <Image
              src={details.images[0]}
              alt={details.name || "Character Image"}
              width={300}
              height={300}
            />
          )}

          <div className="flex flex-col gap-2">
            {details.name && (
              <h1 className="text-lg text-primary">{details.name}</h1>
            )}
            {details.personal?.birthdate && (
              <p className="text-sm">
                Birthdate:{" "}
                <span className="text-secondary">
                  {details.personal.birthdate}
                </span>
              </p>
            )}
            {details.personal?.sex && (
              <p className="text-sm">
                Sex:{" "}
                <span className="text-secondary">{details.personal.sex}</span>
              </p>
            )}
            {details.personal?.clan && (
              <p className="text-sm">
                Clan:{" "}
                <span className="text-secondary">{details.personal.clan}</span>
              </p>
            )}
            {details.personal?.classification && (
              <p className="text-sm">
                Classification:{" "}
                <span className="text-secondary">
                  {formatArrayOrString(details.personal.classification)}
                </span>
              </p>
            )}
            {details.personal?.kekkeiGenkai && (
              <p className="text-sm">
                KekkeiGenkai:{" "}
                <span className="text-secondary">
                  {formatArrayOrString(details.personal.kekkeiGenkai)}
                </span>
              </p>
            )}
            {details.personal?.affiliation && (
              <p className="text-sm">
                Affiliation:{" "}
                <span className="text-secondary">
                  {formatArrayOrString(details.personal.affiliation)}
                </span>
              </p>
            )}
          </div>
          {/* Family */}
          {details.family && Object.keys(details.family).length > 0 && (
            <div className="mt-4 md:mt-0">
              <h1 className="text-lg text-primary">Family</h1>
              <div className="flex flex-col gap-2">
                {Object.entries(details.family).map(([key, value]) => (
                  <p className="text-sm" key={key}>
                    {`${key.charAt(0).toUpperCase() + key.slice(1)}:`}{" "}
                    <span className="text-secondary">{value}</span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Jutsu */}
        <div className="py-8">
          {details.jutsu && details.jutsu?.length > 0 && (
            <h1 className="text-lg text-primary">Jutsu</h1>
          )}
          <ul className="grid list-disc px-5 md:grid-cols-3">
            {details.jutsu?.map((jutsu, index) => (
              <li key={index} className="text-sm text-secondary">
                {jutsu}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="py-8">
          {details.tools && details.tools?.length > 0 && (
            <h1 className="text-lg text-primary">Tools</h1>
          )}
          <ul className="grid list-disc px-5 md:grid-cols-3">
            {details.tools?.map((tools, index) => (
              <li key={index} className="text-sm text-secondary">
                {tools}
              </li>
            ))}
          </ul>
        </div>

        {details.voiceActors && formatVoiceActors(details.voiceActors)}
      </div>
    </section>
  );
};

export default CharacterId;

const formatVoiceActors = (voiceActors: any) => {
  const formatVoiceActor = (actor: string | string[]) => {
    return Array.isArray(actor) ? actor.join(", ") : actor;
  };

  return (
    <>
      {voiceActors.japanese && (
        <div>
          <p className="text-sm">
            Japanese Voice Actors:{" "}
            <span className="text-secondary">
              {formatVoiceActor(voiceActors.japanese)}
            </span>
          </p>
        </div>
      )}
      {voiceActors.english && (
        <div>
          <p className="text-sm">
            English Voice Actors:{" "}
            <span className="text-secondary">
              {formatVoiceActor(voiceActors.english)}
            </span>
          </p>
        </div>
      )}
    </>
  );
};
