import { GoDownload } from "react-icons/go";
import ScrollEndPage from "./ScrollFunc";

export const Hero = () => {
    return (
        <section className='bg-gradient-to-tr from-black to-gray-900 text-white'>
            <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
                <div className="basis-1/2">
                    <h1 className="mb-6 text-center md:text-left">
                        <span className="font-handwriting block text-3xl text-center md:text-left">Olá, me chamo </span>
                        <span className="font-headline text-5xl font-semibold">Erik </span>
                        <span className="font-headline text-5xl font-light text-yellow-400">Kleer</span>
                    </h1>

                    <div className="hidden md:block">
                        <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
                            <div className="h-1 w-12 rounded-full bg-yellow-400"></div>
                            Desenvolvedor de Software Full-stack
                        </h2>
                    </div>

                    <div className="block md:hidden text-center">
                        <h2 className="font-semibold">
                            Desenvolvedor de Software Full-stack
                        </h2>
                        <div className="mx-auto h-1 w-80 rounded-full bg-yellow-400"></div>
                    </div>

                    <p className="text-gray-400 my-6 text-center md:text-left">
                        Desenvolvedor Full-Stack dedicado a transformar conceitos em experiências digitais excepcionais! Aprimorando aplicações e priorizando o usuário.
                    </p>

                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        <ScrollEndPage />
                        <span className="italic text-gray-500">ou</span>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1Pvqs-BwdJ5J3clrH82jkQXOu6L8QT85I"
                            className="button text-gray-900 hover:text-yellow-500 flex items-center gap-2"
                        >
                            <GoDownload />
                            Baixar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
