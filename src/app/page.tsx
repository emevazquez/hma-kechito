'use client';

import React from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Hammer, 
  Package, 
  CheckCircle, 
  TrendingUp,
  Quote,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 
        1. SECCIÓN HERO (Encabezado)
        Propósito: Dar una primera impresión fuerte, explicar qué hacemos y llamadas a la acción principal.
      */}
      <header className="relative bg-slate-900 text-white overflow-hidden pb-16 pt-24 md:pt-32 md:pb-24">
        {/* Un fondo decorativo sutil (patrón o gradiente) */}
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #172554 100%)' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-green-100 bg-green-600/30 border border-green-500/30 rounded-full uppercase">
              Modelo de Inclusión Laboral
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              HMA - Puentes Laborales
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Somos el puente solidario y profesional entre personas del Hogar de Cristo con ganas de trabajar y empresas, consorcios o vecinos que buscan personal confiable y comprometido para tareas operativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contacto" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors rounded-lg shadow-lg">
                Contratar Servicios
                <ArrowRight className="ml-2 w-5 h-5 text-slate-700" />
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-transparent border-2 border-white/30 hover:bg-white/10 transition-colors rounded-lg">
                Ver Perfiles y Líneas
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full max-w-md mx-auto relative hidden md:block">
            {/* Imagen representativa abstracta o placeholder estilizado */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video border border-white/10 flex items-center justify-center" style={{ backgroundColor: '#1e3a8a' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-green-500/30 mix-blend-overlay"></div>
              <Users className="w-32 h-32 text-white/50" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl flex items-center gap-4 text-slate-800 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold">Perfiles de Confianza</p>
                <p className="text-xs text-slate-500">Acompañamiento y referencias</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 
        2. SECCIÓN "Nuestras 4 Líneas de Servicio"
        Propósito: Explicar cómo podemos ayudar estructurado en un grid moderno.
      */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nuestras 4 Líneas de Servicio
            </h2>
            <p className="text-slate-600 text-lg">
              Soluciones integrales, adaptadas a las necesidades locales y empresariales, 
              fortaleciendo el valor del trabajo responsable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Tarjeta 1 */}
            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Hammer className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Changas Sistematizadas</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Personal para tareas de limpieza, pintura, albañilería general y mantenimiento. Ideal para vecinos y consorcios buscando confianza.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Vinculación a Empleo Formal</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Inserción directa en empresas. Facilitamos el puente para incorporar talento comprometido a nóminas laborales con seguimiento sostenido.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Incubadora Emprendimientos</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Apoyo, financiamiento y asesoría a perfiles que inician proyectos autónomos para que el desarrollo sea sostenible en el tiempo.
              </p>
            </div>

            {/* Tarjeta 4 */}
            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Package className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Unidades Productivas</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tercerización de tareas manuales (como armado de cajas, ensamblajes sencillos) para que empresas deleguen operaciones de forma ágil y social.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 
        3. SECCIÓN TRANSPARENCIA E IMPACTO + TESTIMONIOS
        Propósito: Generar confianza mostrando métricas reales y voces de los involucrados.
      */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          
          {/* Bloque de Transparencia */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl mb-20 text-white flex flex-col md:flex-row items-center justify-between" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Informes de Impacto del Mes</h2>
              <p className="text-blue-100 text-lg mb-6 max-w-xl">
                La transparencia es nuestro pilar. Cada mes publicamos métricas claras sobre contrataciones, seguimiento terapéutico e impacto real en empresas y operarios.
              </p>
              <div className="flex gap-8 border-t border-white/20 pt-6">
                <div>
                  <p className="text-4xl font-extrabold text-green-400">45+</p>
                  <p className="text-slate-300 font-medium">Vinculaciones Logradas</p>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-blue-400">12</p>
                  <p className="text-slate-300 font-medium">Empresas Aliadas</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
               <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg shadow-lg hover:bg-slate-100 transition whitespace-nowrap">
                 Descargar Último Informe
               </button>
            </div>
          </div>

          {/* Testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Testimonio Cliente */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700 text-xl">R</div>
                <div>
                  <h4 className="font-bold text-slate-900">Roberto Gómez</h4>
                  <p className="text-sm text-slate-500">Administrador de Consorcios</p>
                </div>
              </div>
              <p className="text-slate-700 italic text-lg leading-relaxed relative z-10">
                "Necesitábamos personal para mantenimiento y pintura en tres edificios. HMA nos resolvió el problema muy rápido, encontramos personas respetuosas, trabajadoras y el acompañamiento del programa fue clave para generar confianza desde el día uno."
              </p>
            </div>

            {/* Testimonio Trabajador */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700 text-xl">M</div>
                <div>
                  <h4 className="font-bold text-slate-900">Martín S.</h4>
                  <p className="text-sm text-slate-500">Operario Vinculado</p>
                </div>
              </div>
              <p className="text-slate-700 italic text-lg leading-relaxed relative z-10">
                "El programa me dio la oportunidad que nadie más me daba. Tras meses de de mi alta en el Hogar de Cristo, este puente laboral me devolvió la dignidad de ganar mi propio dinero y demostrar que merezco confianza en una empresa formal."
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 
        4. SECCIÓN CONTACTO Y FOOTER
        Propósito: Call to action final, formulario y meta info.
      */}
      <section id="contacto" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-14 shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Información de Contacto */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Construyamos el Puente</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Si representas a una empresa, eres un vecino o administras un consorcio, y necesitas servicios operativos de confianza, déjanos tu mensaje. Nos comunicaremos a la brevedad.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="bg-white p-3 rounded-full shadow-sm border border-slate-100">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium">hola@hmapuentes.org.ar</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="bg-white p-3 rounded-full shadow-sm border border-slate-100">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium">+54 11 0000-0000</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="bg-white p-3 rounded-full shadow-sm border border-slate-100">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium">Buenos Aires, Argentina</span>
                  </div>
                </div>
              </div>

              {/* Formulario */}
              <div>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo o Empresa</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                      placeholder="Ej. Juan Pérez / Empresa S.A."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">¿Qué necesitas?</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm resize-none"
                      placeholder="Cuéntanos brevemente sobre los servicios o perfiles que buscas..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2">
                    Enviar Solicitud
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-12 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg tracking-tight">HMA<span className="text-blue-500">Puentes</span></span>
          </div>
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} HMA - Puentes Laborales. Todos los derechos reservados. <br className="md:hidden" />
            Un proyecto impulsado junto al Hogar de Cristo.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
