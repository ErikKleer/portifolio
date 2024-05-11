import { GoCrossReference } from "react-icons/go";

export const Projects = () => {
  const projects = [
    {
      title: "2Do",
      description: "2Do é um criador de lista de tarefas",
      image: "/images/2do.png",
      link: "https://github.com/ErikKleer/2DoListReact",
      colSpan: "col-span-1",
    },
    {
      title: "Password generator",
      description: "Gera uma senha aleatória e segura",
      image: "/images/password.jpeg",
      link: "https://github.com/ErikKleer/PasswordGeneratorJS",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Jokenpo",
      description: "Classíco jogo de pedra papel e tesoura",
      image: "/images/jokenpo.png",
      link: "https://github.com/ErikKleer/JokenpoJS",
      colSpan: "col-span-1",
    },
    {
      title: "Pong",
      description: "Recriado em JavaScript",
      image: "/images/pong.png",
      link: "https://github.com/ErikKleer/PingPongJS",
      colSpan: "col-span-1 md:col-span-2",
    },
  ]
  return (
    <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
      <div className="section-title max-w-4xl py-12">
        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2 text-white">
            <span className="subtitle-headline font-semibold">Projetos &</span>
            <span className="subtitle-handwriting">Portifólio</span>
          </h2>
          <p className="relative text-sm text-gray-400">
            Alguns dos projetos pessoais e que já realizei ao longo da minha trajetória como programador.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {
            projects.map((project, index) => (
              <div
                key={`project-${index}`}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')`}}
              >
                <div className="absolute inset-0 flex h-full flex-col items-center justify-center rounded-lg
                bg-yellow-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">{project.title}</h4>
                  <p className="mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <GoCrossReference className="h-6 w-6"/>
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
