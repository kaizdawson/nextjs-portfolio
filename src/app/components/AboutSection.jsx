"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-6">
        {/* Programming Languages */}
        <div>
          <p className="font-semibold text-white mb-2">Programming Languages</p>
          <ul className="list-disc pl-4 text-gray-300">
            <li>C# (.NET, Unity)</li>
            <li>Lua (Gameplay Scripting, Beginner)</li>
          </ul>
        </div>

        {/* Backend */}
        <div>
          <p className="font-semibold text-white mb-2">Backend Development</p>
          <ul className="list-disc pl-4 text-gray-300">
            <li>ASP.NET Core Web API</li>
            <li>SQL Server</li>
            <li>Entity Framework Core</li>
            <li>JWT Authentication & Authorization</li>
            <li>RESTful API Design & Clean Architecture</li>
            <li>VPS Deployment (Ubuntu / Linux)</li>
            <li>CI/CD (GitHub Actions – Basic)</li>
            <li>Git / GitHub Workflow</li>
          </ul>
        </div>

        {/* Game */}
        <div>
          <p className="font-semibold text-white mb-2">Game Development (Additional)</p>
          <ul className="list-disc pl-4 text-gray-300">
            <li>Unity (2D Gameplay Development)</li>
            <li>Gameplay Programming (Movement, Combat, Basic AI)</li>
          </ul>
        </div>
      </div>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FPT University, Ho Chi Minh City, Viet Nam</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
        University of Science – VNU-HCM  
        <br />
        Network Administration & Cybersecurity Fundamentals 
        <span className="text-sm text-gray-400">
          ( Networking, System Administration, Basic Security )
        </span>
      </li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/sep.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl space-y-4">
  <p>
    I am a backend developer specializing in ASP.NET Core Web API.
    I focus on building secure, scalable, and maintainable backend systems
    with clean architecture and well-structured code.
  </p>

  <p>
  I have experience working with relational databases such as SQL Server,
  implementing authentication and authorization using JWT, and designing RESTful APIs
  for real-world applications.
</p>


  <p>
    I am familiar with deploying backend services on Ubuntu/Linux VPS,
    configuring environments, and setting up basic CI/CD pipelines
    using GitHub Actions.
  </p>

  <p>
    In addition, I also explore game development using Unity (2D) and C#,
    focusing on gameplay programming and basic game mechanics.
  </p>
</div>



          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 h-[260px] overflow-y-auto pr-2 tabScroll">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>



        </div>
      </div>
    </section>
  );
};

export default AboutSection;
