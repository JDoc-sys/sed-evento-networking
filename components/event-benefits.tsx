import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, Handshake, TrendingUp, Globe, Target } from "lucide-react"

export function EventBenefits() {
  const benefits = [
    {
      icon: Users,
      title: "Networking Exclusivo",
      description:
        "Conecta con más de 300 empresarios, ejecutivos y líderes de la industria colombiana e internacional.",
    },
    {
      icon: Trophy,
      title: "Oportunidades de Negocio",
      description: "Descubre nuevas alianzas estratégicas y oportunidades de expansión en mercados internacionales.",
    },
    {
      icon: Handshake,
      title: "Alianzas Estratégicas",
      description:
        "Forma partnerships duraderos con empresas complementarias y proveedores de servicios especializados.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Empresarial",
      description: "Aprende las mejores prácticas para escalar tu negocio y expandirte a nuevos mercados.",
    },
    {
      icon: Globe,
      title: "Expansión Internacional",
      description: "Obtén insights sobre regulaciones, culturas empresariales y oportunidades en mercados globales.",
    },
    {
      icon: Target,
      title: "Estrategias Personalizadas",
      description: "Recibe asesoría personalizada de expertos en internacionalización y desarrollo de negocios.",
    },
  ]

  return (
    <section id="evento" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">¿Por Qué Asistir a ConectaColombia 2024?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Este evento está diseñado para empresarios visionarios que buscan llevar sus negocios al siguiente nivel
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
