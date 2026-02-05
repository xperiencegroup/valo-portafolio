import { SendIcon } from "@/assets/icons/SendIcon";
import BackButton from "@/components/Navigation/BackButton";
import LogoValoMark from "@/assets/logos/logo-valo-mark";

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center w-dvw h-dvh bg-white text-valo">
      <div className="absolute top-0 left-0 pt-13 pl-15">
        <LogoValoMark className="text-valo" />
      </div>

      {/* Content */}
      <div className="flex flex-col w-418.5 h-186.5 px-20 py-15">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-12.5"
        >
          {/* Titles */}
          <div>
            <h3 className="text-[42px] font-bold font-lumarc uppercase tracking-widest leading-[100%]">
              Queremos ser tus socios estratégicos
            </h3>
            <p className="text-[37px] font-lumarc uppercase tracking-wider">
              Escríbenos
            </p>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-15">
            {/* Nombre */}
            <input
              type="text"
              id="nombre"
              name="nombre"
              maxLength="50"
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'\-]{2,50}$"
              placeholder="Nombre"
              required
              className="h-12.25 w-full p-[8.54px] border-b-[1.5px] border-valo text-[32px] placeholder:text-[32px] text-valo placeholder:text-valo/80 font-lumarc placeholder:font-lumarc leading-[100%] placeholder:leading-[100%] focus:outline-none"
            />

            {/* Apellido */}
            <input
              type="text"
              id="apellido"
              name="apellido"
              maxLength="50"
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'\-]{2,50}$"
              placeholder="Apellido"
              required
              className="h-12.25 w-full p-[8.54px] border-b-[1.5px] border-valo text-[32px] placeholder:text-[32px] text-valo placeholder:text-valo/80 font-lumarc placeholder:font-lumarc leading-[100%] placeholder:leading-[100%] focus:outline-none"
            />

            {/* Correo */}
            <input
              type="email"
              id="correo"
              name="correo"
              maxLength="100"
              pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
              placeholder="Correo"
              required
              className="h-12.25 w-full p-[8.54px] border-b-[1.5px] border-valo text-[32px] placeholder:text-[32px] text-valo placeholder:text-valo/80 font-lumarc placeholder:font-lumarc leading-[100%] placeholder:leading-[100%] focus:outline-none"
            />

            {/* Proyecto de interés */}
            <input
              type="text"
              id="proyecto"
              name="proyecto"
              maxLength="100"
              pattern="^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ\s.,'&\-]{2,100}$"
              placeholder="Proyecto de interés"
              required
              className="h-12.25 w-full p-[8.54px] border-b-[1.5px] border-valo text-[32px] placeholder:text-[32px] text-valo placeholder:text-valo/80 font-lumarc placeholder:font-lumarc leading-[100%] placeholder:leading-[100%] focus:outline-none"
            />

            {/* Teléfono */}
            <input
              type="tel"
              id="telefono"
              name="telefono"
              maxLength="15"
              pattern="^[0-9+\(\)\s\-]{8,15}$"
              placeholder="Número de teléfono"
              required
              className="h-12.25 w-full p-[8.54px] border-b-[1.5px] border-valo text-[32px] placeholder:text-[32px] text-valo placeholder:text-valo/80 font-lumarc placeholder:font-lumarc leading-[100%] placeholder:leading-[100%] focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="absolute z-10 bottom-0 right-0 p-5">
            <button
              type="submit"
              className="group flex w-77.75 h-17.5 justify-between items-center px-11.25 bg-valo hover:bg-white hover:cursor-pointer"
            >
              <span className="text-[21px] font-semibold text-white group-hover:text-valo group-hover:font-bold">
                Enviar
              </span>

              {/* Inactive */}
              <span className="group-hover:hidden">
                <SendIcon isActive={false} />
              </span>
              {/* Active */}
              <span className="hidden group-hover:block">
                <SendIcon isActive />
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Return button */}
      <div className="fixed bottom-0 left-0 p-5 z-30">
        <BackButton to="/" />
      </div>
    </div>
  );
}
