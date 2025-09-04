import { Button } from "@/components/ui/button"

export function EventHeader() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="/sed-logo.svg" alt="SED Internacional Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="font-bold text-primary text-lg">SED Internacional</div>
            <div className="text-sm text-accent font-medium">ConectaColombia 2024</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#evento" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Evento
          </a>
          <a href="#agenda" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Agenda
          </a>
          <a href="#ponentes" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Ponentes
          </a>
          <a href="#precios" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Precios
          </a>
          <Button className="bg-gradient-primary text-white hover:opacity-90 transition-opacity shadow-lg">
            <a href="#registro">Registrarse</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
