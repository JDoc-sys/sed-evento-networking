import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function EventPricing() {
  const pricingPlans = [
    {
      name: "Acceso General",
      price: "450.000",
      originalPrice: "550.000",
      description: "Perfecto para empresarios que buscan networking y aprendizaje",
      features: [
        "Acceso completo al evento",
        "Desayuno y almuerzo incluidos",
        "Materiales del evento",
        "Certificado de participación",
        "Acceso a presentaciones digitales",
        "Networking dirigido por sectores",
      ],
      popular: false,
      buttonText: "Registrarse Ahora",
    },
    {
      name: "Acceso VIP",
      price: "750.000",
      originalPrice: "950.000",
      description: "Para líderes empresariales que buscan máximo valor",
      features: [
        "Todo lo incluido en Acceso General",
        "Sesión privada con ponentes principales",
        "Almuerzo VIP con networking exclusivo",
        "Kit premium de materiales",
        "Acceso prioritario a rueda de negocios",
        "Consultoría gratuita de 30 min post-evento",
        "Invitación a eventos exclusivos SED Internacional",
      ],
      popular: true,
      buttonText: "Acceso VIP",
    },
    {
      name: "Patrocinio Corporativo",
      price: "2.500.000",
      originalPrice: null,
      description: "Máxima visibilidad para tu empresa en el evento",
      features: [
        "5 entradas VIP incluidas",
        "Stand de exhibición premium",
        "Logo en todos los materiales del evento",
        "Sesión de presentación de 15 minutos",
        "Acceso a base de datos de asistentes",
        "Menciones en redes sociales",
        "Reporte post-evento con métricas",
        "Oportunidad de co-branding",
      ],
      popular: false,
      buttonText: "Contactar Ventas",
    },
  ]

  return (
    <section id="precios" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Opciones de Participación</h2>
          <p className="text-muted-foreground mb-6">
            Elige la opción que mejor se adapte a tus objetivos empresariales
          </p>
          <Badge className="bg-accent text-accent-foreground">
            🎉 Descuento por inscripción temprana hasta el 28 de Febrero
          </Badge>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-accent shadow-lg scale-105" : "border-border"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Más Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-primary">${plan.price}</span>
                  <span className="text-muted-foreground"> COP</span>
                  {plan.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      Precio regular: ${plan.originalPrice} COP
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            ¿Necesitas una cotización personalizada para grupos grandes?
          </p>
          <Button variant="outline">Contactar Equipo de Ventas</Button>
        </div>
      </div>
    </section>
  )
}
