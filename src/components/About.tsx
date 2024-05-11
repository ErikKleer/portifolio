export const About = () => {
  return (
    <section className="section-title my-4 max-w-5xl">
      <div className="relative p-4 text-center">
        <h2 className="relative text-yellow-900 font-bold z-10">
          <span className="subtitle-headline">Sobre</span>
          <span className="subtitle-handwriting">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Sou dedicado, curioso, motivado, esforçado e competitivo. Aprendo rápido e estou em constante evolução.
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg">
        <div className="relative bg-yellow-400 w-full rounded-lg p-4 ps-20 md:h-64 md:ps-48">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="topic-title">Erik Kleer</span>
            </p>

            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="topic-title">
                    Idade:
                  </td>
                  <td>20</td>
                </tr>
                <tr>
                  <td className="topic-title">
                    Celular:
                  </td>
                  <td>
                    <a
                      href="https://wa.me/5547988143458?text=Olá..."
                      className="underline hover:text-yellow-800"
                      target="_blank"
                    >
                      +55 47 9 8814-3458
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="topic-title">
                    Email:
                  </td>
                  <td>
                    <a
                      href="mailto:erikbkleer@gmail.com"
                      className="underline hover:text-yellow-800"
                    >
                      erikbkleer@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="topic-title">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/L5E7Bqd5jig8NXpx5"
                      target="_blank"
                      className="underline hover:text-yellow-800"
                    >
                      Jaraguá do Sul - SC
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="topic-title">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-2 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-800 bg-[url('/images/me.jpeg')] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div>
        </div>
      </div>
    </section>
  )
}
