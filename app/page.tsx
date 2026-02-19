import Image from "next/image";
import { BsTelephoneOutbound } from "react-icons/bs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center">
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/terapist.png"
            alt="Professional Physical Therapist"
            width={500}
            height={500}


          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Atención profesional de fisioterapia
          </h1>

          <p className="text-lg text-gray-600">
            1️⃣ Evalúa al paciente
            Analiza postura, movilidad, fuerza y dolor.
            Identifica lesiones musculares, articulares o neurológicas.
            <br />
            2️⃣ Diseña un plan de tratamiento
            Ejercicios terapéuticos personalizados.
            Estiramientos y fortalecimiento.
            Reeducación del movimiento.
            <br />
            3️⃣ Aplica técnicas físicas
            Masoterapia (masajes terapéuticos).
            Terapia manual.
            Electroterapia.
            Ultrasonido.
            Aplicación de frío o calor.
            <br />
            4️⃣ Rehabilita lesiones
            Trabaja con personas que tienen:
            Lesiones deportivas
            Dolor de espalda o cuello
            Fracturas
            Cirugías recientes
            Problemas neurológicos (como ACV)
            <br />
            5️⃣ Previene lesiones
            Enseña postura correcta.
            Recomienda ejercicios preventivos.
            Mejora la ergonomía en el trabajo.
          </p>



          <div>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition duration-300">
              <div className="flex items-center gap-3">
                <BsTelephoneOutbound className="text-xl" />
                <span>Contáctame para hacer una cita 9994418553</span>
              </div>
            </button>
          </div>
        </div>

      </section>
    </main>
  );
}
