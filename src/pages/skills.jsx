import { ViewfinderCircleIcon, WrenchIcon, PuzzlePieceIcon, SwatchIcon, RectangleGroupIcon, LifebuoyIcon } from "@heroicons/react/24/solid";
import skills from "../assets/images/skills.png";
import skill from "../assets/images/skillOne.png";
import ceo from "../assets/images/ceo.jpg";

const Skills = () => {
  const skillsData = [
    { img: ceo, title: "React", icon: <RectangleGroupIcon /> },
    { img: skill, title: "JavaScript", icon: <WrenchIcon /> },
    { img: ceo, title: "HTML", icon: <LifebuoyIcon /> },
    { img: skill, title: "Tailwind CSS", icon: <ViewfinderCircleIcon /> },
    { img: ceo, title: "Project Management", icon: <PuzzlePieceIcon /> },
    { img: skill, title: "Team Work", icon: <SwatchIcon /> },
    { img: ceo, title: "Responsibility", icon: <PuzzlePieceIcon /> },
    { img: skills, title: "Collaboration", icon: <PuzzlePieceIcon /> },
  ];

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${skills})` }}
    >
      <div className="grid grid-cols-4 grid-rows-2 gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="relative group w-60 h-60 rounded-full bg-white flex flex-col items-center justify-center p-4 shadow-md transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={skill.img}
              alt={skill.title}
              className="w-16 h-16 mb-2 rounded-full object-cover"
            />
            <h3 className="text-lg font-bold mb-2 text-center">{skill.title}</h3>
            <div className="text-teal-600">{skill.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
