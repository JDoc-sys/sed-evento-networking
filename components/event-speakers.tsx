import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"

export function EventSpeakers() {
  const speakers = [
    {
      name: "Dr. María González",
      title: "CEO & Fundadora",
      company: "SED Internacional Colombia SAS",
      bio: "Más de 20 años de experiencia en comercio internacional y expansión empresarial. Ha liderado la internacionalización de más de 200 empresas colombianas.",
      expertise: ["Comercio Internacional", "Estrategia Empresarial", "Liderazgo"],
      image: "/professional-business-woman-ceo.jpg",
    },
    {
      name: "Carlos Mendoza",
      title: "Director Regional",
      company: "Banco de Comercio Exterior",
      bio: "Especialista en financiamiento de comercio exterior con experiencia en más de 30 países. Experto en instrumentos financieros para la expansión internacional.",
      expertise: ["Financiamiento", "Comercio Exterior", "Banca Internacional"],
      image: "/professional-business-man-banker.jpg",
    },
    {
      name: "Ana Rodríguez",
      title: "Fundadora & CEO",
      company: "TechColombia Solutions",
      bio: "Emprendedora tecnológica que llevó su startup desde Colombia hasta 15 países en América Latina. Referente en transformación digital empresarial.",
      expertise: ["Tecnología", "Startups", "Transformación Digital"],
      image: "/tech-entrepreneur-woman.png",
    },
    {
      name: "Roberto Silva",
      title: "Vicepresidente",
      company: "Cámara de Comercio Internacional",
      bio: "Líder en desarrollo de políticas comerciales internacionales. Ha participado en la negociación de más de 50 acuerdos comerciales bilaterales.",
      expertise: ["Política Comercial", "Negociación", "Relaciones Internacionales"],
      image: "/professional-business-executive-man.jpg",
    },
  ]

  return (
    <section id="ponentes" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Ponentes Destacados</h2>
          <p className="text-muted-foreground">
            Aprende de los líderes más influyentes en comercio internacional y expansión empresarial
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">{speaker.name}</CardTitle>
                <p className="text-sm text-accent font-medium">{speaker.title}</p>
                <p className="text-sm text-muted-foreground">{speaker.company}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{speaker.bio}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {speaker.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors">
                    <Linkedin className="h-4 w-4 text-accent" />
                  </div>
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors">
                    <Twitter className="h-4 w-4 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
