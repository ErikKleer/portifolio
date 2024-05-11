import { GoDeviceDesktop, GoFileCode } from "react-icons/go";

export const Services = () => {
  const services = [
    {
      title: "Web",
      description: "Desenvolvimento de sistes e sistemas web estáticos e dinâmicos com React.js, TailwindCSS, HTML5 e CSS3.",
      icon: <GoDeviceDesktop className="h-12 w-12" />
    },
    {
      title: "Sistemas",
      description: "Desenvolvimento de sistemas e APIs REST com Node.js, Python e Java.",
      icon: <GoFileCode className="h-12 w-12" />,
    }
  ]

  return (
    <section className="section-title my-12 max-w-4xl">
      <div className="p-4 text-center">
        {/* <p className="text-sm font-semibold uppercase text-yellow-600">
          O que eu faço de melhor
        </p> */}
        {/* meus serviços */}

        <h2 className="mb-2 font-bold text-yellow-900">
          <span className="subtitle-headline">Pontos</span>
          <span className="subtitle-handwriting">Fortes</span>
        </h2>

        <p className="text-sm text-gray-600">
          Estou preparado para lidar com todas as etapas do desenvolvimento. Adoro desafios e estou sempre aberto a aprender.
        </p>
      </div>

      <div className="mt-6 flex flex-col justify-center gap-2 md:flex-row">
        {
          services.map((service, index) => (
            <div className="basis-1/3 rounded-lg bg-gray-950 p-4 text-yellow-400" key={`service-${index}`}>
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
