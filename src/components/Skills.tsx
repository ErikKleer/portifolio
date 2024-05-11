import { GoStack, GoCodeSquare } from "react-icons/go";

export const Skills = () => {
  const educations = [
    {
      name: "Curso Técnico Integrado, Tecnologia da Informação",
      link: "https://cursos.sesisenai.org.br/",
    },
    {
      name: "Full Cycle",
      link: "https://fullcycle.com.br/",
    },
    {
      name: "DIO",
      link: "https://web.dio.me/",
    },
  ]

  const skills = [
    {
      name: "HTML5/CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      level: 90,
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      level: 75,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      level: 80,
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      level: 50,
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      level: 70,
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      level: 85,
    },
  ]

  return (
    <section className="rounded-br-[80px] bg-gray-400 md:rounded-br-[180px]">
      <div className="section-title max-w-4xl py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="subtitle-headline text-gray-800">Educação &</span>
            <span className="subtitle-handwriting text-yellow-800">Skills</span>
          </h2>
          <p className="relative text-sm text-gray-800">
            Desenvolvedor Full-stack | Python | React | RabbitMQ | PostgreSQL
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <GoStack className="h-8 w-8 text-yellow-400" />
              Educação
            </h3>

            {
              educations.map((education, index) => (
                <a href={education.link} target="_blank" key={`education-${index}`}>
                  <div className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900">
                    {education.name}
                  </div>
                </a>
              ))
            }
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <GoCodeSquare className="h-8 w-8 text-yellow-400" />
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                >
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                      <img src={skill.icon} alt={skill.name} className="h-10 w-10 rounded" />
                    </div>
                    <div className="w-full flex-grow">
                      <h4 className="font-headline text-gray-900">{skill.name}</h4>
                      <div className="h-2.5 w-full rounded-full bg-white">
                        <div
                          className="h-2.5 rounded-full bg-yellow-400"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
