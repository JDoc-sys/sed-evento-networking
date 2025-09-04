import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Coffee, Presentation, Users, Handshake } from "lucide-react"

export function EventSchedule() {
  const schedule = [
    {
      time: "8:00 - 9:00 AM",
      title: "Registro y Desayuno de Bienvenida",
      description: "Networking informal y entrega de materiales",
      type: "networking",
      icon: Coffee,
    },
    {
      time: "9:00 - 10:30 AM",
      title: "Conferencia Magistral: El Futuro de los Negocios Internacionales",
      description: "Tendencias globales y oportunidades para empresas colombianas",
      type: "conference",
      icon: Presentation,
      speaker: "Dr. María González - CEO SED Internacional",
    },
    {
      time: "10:30 - 11:00 AM",
      title: "Coffee Break & Networking",
      description: "Pausa para networking dirigido por sectores",
      type: "break",
      icon: Coffee,
    },
    {
      time: "11:00 AM - 12:30 PM",
      title: "Panel: Casos de Éxito en Expansión Internacional",
      description: "Empresarios colombianos comparten sus experiencias",
      type: "panel",
      icon: Users,
      speaker: "CEOs de empresas exitosas",
    },
    {
      time: "12:30 - 2:00 PM",
      title: "Almuerzo de Networking",
      description: "Networking por mesas temáticas según industria",
      type: "networking",
      icon: Users,
    },
    {
      time: "2:00 - 3:30 PM",
      title: "Talleres Especializados (Paralelos)",
      description: "Fintech, E-commerce, Manufactura, Servicios",
      type: "workshop",
      icon: Presentation,
    },
    {
      time: "3:30 - 4:00 PM",
      title: "Networking Break",
      description: "Intercambio de contactos y seguimiento",
      type: "break",
      icon: Coffee,
    },
    {
      time: "4:00 - 5:30 PM",
      title: "Rueda de Negocios",
      description: "Reuniones B2B programadas de 15 minutos",
      type: "business",
      icon: Handshake,
    },
    {
      time: "5:30 - 6:00 PM",
      title: "Cierre y Cocktail de Despedida",
      description: "Networking final y entrega de certificados",
      type: "networking",
      icon: Users,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "conference":
        return "bg-accent text-accent-foreground"
      case "panel":
        return "bg-primary text-primary-foreground"
      case "workshop":
        return "bg-secondary text-secondary-foreground"
      case "business":
        return "bg-accent text-accent-foreground"
      case "networking":
        return "bg-muted text-muted-foreground"
      case "break":
        return "bg-card text-card-foreground border"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="agenda" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Agenda del Evento</h2>
          <p className="text-muted-foreground">Un día completo de aprendizaje, networking y oportunidades de negocio</p>
        </div>
        <div className="space-y-4">
          {schedule.map((item, index) => (
            <Card key={index} className="border-l-4 border-l-accent">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">{item.time}</span>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </div>
                  <Badge className={getTypeColor(item.type)}>
                    {item.type === "networking"
                      ? "Networking"
                      : item.type === "conference"
                        ? "Conferencia"
                        : item.type === "panel"
                          ? "Panel"
                          : item.type === "workshop"
                            ? "Taller"
                            : item.type === "business"
                              ? "Negocios"
                              : "Pausa"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{item.description}</p>
                {item.speaker && <p className="text-sm text-accent font-medium">{item.speaker}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
