import { GoPeople } from "react-icons/go";

export const Testimonials = () => {
  return (
    <section className="section-title max-w-4xl p-4 py-8">
      <div className="relative mb-4 p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold">
          <span className="subtitle-handwriting text-yellow-800">Recomendações</span>
        </h2>
      </div>
      <figure>
        <GoPeople className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
          Erik atuou na minha squad contribuindo como desenvolvedor júnior.
          Durante seu tempo conosco, ele não apenas adquiriu e aprimorou diversas habilidades, como também demonstrou grande capacidade de aprendizado, sendo um destaque na compreensão e resolução de problemas.
          Sua disposição para enfrentar desafios, fizeram dele um colaborador dedicado e confiável.
          </p>
        </blockquote>
        <div className="flex items-center justify-center gap-2">
          <a href="https://www.linkedin.com/in/victor-klemann-b18ab21b6/" target="_blank">
            <div className="flex items-center divide-x-2 divide-gray-200">
              <div className="pr-3 font-medium text-gray-900">Victor Klemann</div>
              <div className="pl-3 text-sm font-light text-gray-500">geovendas.com</div>
            </div>
          </a>
        </div>
      </figure>
    </section>
  )
}
