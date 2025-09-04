import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, MapPin, Sparkles } from "lucide-react"
import { EventRegistrationForm } from "@/components/event-registration-form"
import { EventHeader } from "@/components/event-header"
import { EventBenefits } from "@/components/event-benefits"
import { EventSchedule } from "@/components/event-schedule"
import { EventSpeakers } from "@/components/event-speakers"
import { EventPricing } from "@/components/event-pricing"

export default function NetworkingEventPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <EventHeader />

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/10 rounded-full animate-pulse-slow"></div>
          <div
            className="absolute top-1/2 left-1/3 w-16 h-16 bg-secondary/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-8 bg-gradient-primary text-white shadow-lg animate-pulse-slow">
            <Sparkles className="w-4 h-4 mr-2" />
            Evento Exclusivo de Networking
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-8 text-balance">
            ConectaColombia 2024
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
            El evento de networking más importante para empresarios y ejecutivos que buscan expandir sus negocios
            internacionalmente con <span className="text-accent font-semibold">SED Internacional</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="flex items-center gap-3 text-muted-foreground bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <CalendarDays className="h-5 w-5 text-accent" />
              <span className="font-medium">15 de Marzo, 2024</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-medium">8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="font-medium">Hotel Tequendama, Bogotá</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 px-12 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Registrarse Ahora
          </Button>
        </div>
      </section>

      {/* About SED Internacional */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Sobre SED Internacional Colombia SAS</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Con más de 15 años de experiencia en el mercado colombiano, SED Internacional se ha consolidado como
                líder en servicios de consultoría empresarial y expansión internacional. Nuestra misión es conectar
                empresas colombianas con oportunidades globales.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground font-medium">Empresas Conectadas</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-accent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground font-medium">Países de Alcance</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-card p-10 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <img src="/sed-logo.svg" alt="SED Internacional" className="w-16 h-16" />
                <h3 className="text-2xl font-semibold text-primary">Nuestra Visión</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ser el puente que conecte el talento empresarial colombiano con las oportunidades del mercado global,
                fomentando el crecimiento sostenible y la innovación.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/20">Innovación</Badge>
                <Badge className="bg-accent/10 text-accent border-accent/20">Excelencia</Badge>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20">Integridad</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">Colaboración</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Benefits */}
      <EventBenefits />

      {/* Event Schedule */}
      <EventSchedule />

      {/* Speakers */}
      <EventSpeakers />

      {/* Pricing */}
      <EventPricing />

      {/* Registration Form */}
      <section id="registro" className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Asegura tu Lugar en ConectaColombia 2024</h2>
            <p className="text-muted-foreground">Únete a los líderes empresariales más influyentes de Colombia</p>
          </div>
          <EventRegistrationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/sed-logo.svg" alt="SED Internacional" className="w-10 h-10 brightness-0 invert" />
                <h3 className="text-xl font-semibold">SED Internacional Colombia SAS</h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">Conectando empresas colombianas con el mundo</p>
              <div className="flex items-center gap-2 text-white/80">
                <span>🌐 www.sedinternacional.com.co</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-white/80">
                <p>📧 eventos@sedinternacional.com.co</p>
                <p>📱 +57 (1) 234-5678</p>
                <p>📍 Carrera 11 #93-07, Bogotá</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="space-y-2 text-white/80">
                <p>LinkedIn: /company/sed-internacional</p>
                <p>Twitter: @SEDInternacional</p>
                <p>Instagram: @sed_internacional</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 SED Internacional Colombia SAS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
