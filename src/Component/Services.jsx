import React, { useState } from "react";
import clsx from "clsx";
import reptile from "./photos/turtle.jpg"
import mammals from "./photos/rabbit.jpg"
import aqua from "./photos/fish1.jpg"
import dog from "./photos/dog.jpg"
import tiny from "./photos/tiny.jpg"
import bird from "./photos/bird1.jpg"

const packages = [
  {
    title: "Companion Animal",
    nights: "Trusted Guide for Dogs & Cats",
    description:
      "From routine checkups to chronic disease management, get expert guidance for dogs and cats, covering nutrition, behavior, parasite control, pup and senior pet wellness, and much more!",
    image: dog,
  },
  {
    title: "Reptile & Amphibian Arena",
    nights: "Tailored Advice  for Cold-Blooded Companions",
    description:
      "From snakes and lizards to turtles, frogs, and salamanders, proper care is essential for the health of your cold-blooded companions.Get specialized support for enclosure setup, temperature and humidity regulation, metabolic disorders, RIs, and more. Whether you’re a pet owner or wildlife rescuer, reliable veterinary advice is just a call away.",
    image: reptile,
  },
  {
    title: "Avian Haven",
    nights: "Expert Care for Feathered Friends",
    description:
      "Get consultations for feather plucking, respiratory issues, dietary imbalances, enclosure optimization, behavioral concerns, and breeding guidance for all birds big and small. Ensure your bird thrives with expert health and wellness advice.",
    image: bird,
  },
  {
    title: "Small Mammal Domain",
    nights: "Specialized Care for Rabbits, Rodents & Exotic Mammals",
    description:
      "Expert consultations for rabbits, guinea pigs, hamsters, rats, mice, ferrets, sugar gliders, marmosets, pocket monkeys, and other small mammals. We offer guidance on dental care, nutrition, housing, behavioral concerns, disease prevention, and enrichment.",
    image: mammals,
  },
  {
    title: "Aquatic Care",
    nights: "Expert Guidance for Freshwater & Marine Fish",
    description:
      "Keeping fish healthy goes beyond feeding! We assist with water quality management, disease identification (Ich, fin rot, dropsy, etc.), proper tank cycling, nutrition planning, and stress reduction strategies for both freshwater and saltwater species, including betta fish, goldfish, cichlids, koi, and exotic marine species.",
    image: aqua,
  },
  {
    title: "Tiny Titans",
    nights: "Specialized Care for Invertebrates",
    description:
      "From tarantulas and scorpions to hermit crabs, snails, isopods, and mantises, we help ensure proper enclosure conditions, molting success, nutritional support, and species-specific care for your exotic invertebrates.",
    image: tiny,
  },
];

const Services = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedCardIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-gradient-to-br from-white via-[#f4fdf7] to-[#eef2ff] py-20 px-6 md:px-20 font-[Lato]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((pkg, index) => {
          const isExpanded = expandedCardIndex === index;
          return (
            <div
              key={index}
              className="relative group bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]"
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 transition-all group-hover:opacity-80"></div>
              </div>

              <div className="p-6 text-center flex flex-col min-h-[350px]">
                <h2 className="text-2xl font-bold text-[#006533] mb-2">
                  {pkg.title}
                </h2>
                <p className="text-sm text-[#332A85] font-semibold uppercase tracking-wide">
                  {pkg.nights}
                </p>

                <p
                  className={clsx(
                    "text-gray-700 mt-4 transition-all duration-300 mb-6",
                    {
                      "line-clamp-4": !isExpanded,
                    }
                  )}
                >
                  {pkg.description}
                </p>

                <div className="mt-auto pt-3 border-t border-gray-200">
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-[#332A85] font-semibold text-sm hover:underline transition"
                  >
                    {isExpanded ? "Read Less ↑" : "Read More →"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
