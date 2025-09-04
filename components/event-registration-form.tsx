"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    ticketType: "",
    interests: [] as string[],
    dietaryRestrictions: "",
    marketingConsent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Datos del formulario:", formData)
    // Aquí iría la lógica para enviar los datos
    alert("¡Registro exitoso! Te contactaremos pronto con los detalles de pago.")
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== interest),
      }))
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Formulario de Registro</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Información Personal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Información Personal</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Nombre *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Apellido *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Correo Electrónico *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Teléfono *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                required
              />
            </div>
          </div>

          {/* Información Profesional */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Información Profesional</h3>
            <div>
              <Label htmlFor="company">Empresa *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="position">Cargo *</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => setFormData((prev) => ({ ...prev, position: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="industry">Industria *</Label>
              <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu industria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tecnologia">Tecnología</SelectItem>
                  <SelectItem value="manufactura">Manufactura</SelectItem>
                  <SelectItem value="servicios">Servicios</SelectItem>
                  <SelectItem value="comercio">Comercio</SelectItem>
                  <SelectItem value="finanzas">Finanzas</SelectItem>
                  <SelectItem value="salud">Salud</SelectItem>
                  <SelectItem value="educacion">Educación</SelectItem>
                  <SelectItem value="agricultura">Agricultura</SelectItem>
                  <SelectItem value="turismo">Turismo</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tipo de Entrada */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Tipo de Entrada *</h3>
            <RadioGroup
              value={formData.ticketType}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, ticketType: value }))}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="general" id="general" />
                <Label htmlFor="general">Acceso General - $450.000 COP</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="vip" id="vip" />
                <Label htmlFor="vip">Acceso VIP - $750.000 COP</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="corporate" id="corporate" />
                <Label htmlFor="corporate">Patrocinio Corporativo - $2.500.000 COP</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Intereses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Áreas de Interés</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                "Expansión Internacional",
                "Financiamiento",
                "Tecnología",
                "E-commerce",
                "Manufactura",
                "Servicios",
                "Alianzas Estratégicas",
                "Regulaciones Internacionales",
              ].map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={formData.interests.includes(interest)}
                    onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                  />
                  <Label htmlFor={interest} className="text-sm">
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Restricciones Alimentarias */}
          <div>
            <Label htmlFor="dietary">Restricciones Alimentarias o Comentarios Especiales</Label>
            <Textarea
              id="dietary"
              value={formData.dietaryRestrictions}
              onChange={(e) => setFormData((prev) => ({ ...prev, dietaryRestrictions: e.target.value }))}
              placeholder="Vegetariano, vegano, alergias, etc."
            />
          </div>

          {/* Consentimiento */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="marketing"
              checked={formData.marketingConsent}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, marketingConsent: checked as boolean }))}
            />
            <Label htmlFor="marketing" className="text-sm leading-relaxed">
              Acepto recibir comunicaciones de marketing de SED Internacional Colombia SAS sobre futuros eventos y
              servicios. Puedo cancelar mi suscripción en cualquier momento.
            </Label>
          </div>

          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Completar Registro
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Al registrarte, aceptas nuestros términos y condiciones. Recibirás un correo de confirmación con los
            detalles de pago.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
