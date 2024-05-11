import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaSpinner, FaWhatsapp } from "react-icons/fa"
import { GoMail, GoLocation, GoCheckCircleFill } from "react-icons/go";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return

    setLoading(true)

    emailjs
      .sendForm('service_3799m7z', 'template_7qt1e0q', form.current, {
        publicKey: 'r36Jtc4UZu_hQ8i-o',
      })
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
          console.log('Email enviado com sucesso!');
        },
        (error) => {
          setError(true)
          setLoading(false)
          console.log('Falha no envio do email...', error.text);
        },
      );
  };

  const contacts = [
    {
      name: "WhatsApp",
      description: "+55 47 9 8814-3458",
      link: "https://wa.me/5547988143458?text=Olá...",
      icon: <FaWhatsapp className="h-10 w-10" />,
    },
    {
      name: "Email",
      description: "erikbkleer@gmail.com",
      link: "mailto:erikbkleer@gmail.com?subject=Olá...",
      icon: <GoMail className="h-10 w-10" />,
    },
    {
      name: "Cidade",
      description: "Jaraguá do Sul",
      link: "https://maps.app.goo.gl/L5E7Bqd5jig8NXpx5",
      icon: <GoLocation className="h-10 w-10" />,
    },
  ]
  return (
    <section id="contact" className="bg-yellow-800 text-white">
      <div className="section-title max-w-4xl py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="subtitle-headline font-semibold">Fale</span>
            <span className="subtitle-handwriting">Comigo</span>
          </h2>
          <p className="text-sm">
            Entre em contato por formulário ou WhatsApp.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="message" className="contact-field-label font-semibold">
                  Mensagem:
                </label>
                <textarea
                  name="message" id="message" required
                  className="h-36 w-full contact-field-style"
                />
              </div>
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label
                    htmlFor="fullName"
                    className="contact-field-label font-semibold"
                  >
                    Seu nome:
                  </label>
                  <input
                    type="text" name="fullName" id="fullName" required
                    className="w-full contact-field-style"
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="contact-field-label font-semibold"
                  >
                    Seu email:
                  </label>
                  <input
                    type="email" name="email" id="email" required
                    className="w-full contact-field-style"
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="button flex items-center gap-2 text-yellow-700" disabled={loading}>
                  {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                  {success && <GoCheckCircleFill className="h-4 w-4" />}
                  Enviar mensagem
                </button>

                {error && (
                  <p className="mt-2">
                    Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde.
                  </p>
                )}
              </div>
            </form>
          </div>
          <div className="basis-1/3">
            {
              contacts.map((contact, index) => (
                <div
                  key={`contact-${index}`}
                  className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
                >
                  {contact.icon}
                  <div>
                    <p className="font-headline font-semibold">{contact.name}</p>
                    <a
                      href={contact.link}
                      target="_blank"
                      className="text-gray-300 underline underline-offset-2"
                    >
                      {contact.description}
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
