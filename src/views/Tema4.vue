<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Accesibilidad y estándares de diseño universal
      .caja-8(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 En el diseño de presentaciones profesionales, la accesibilidad constituye un estándar de calidad técnica, pedagógica y ética. La aplicación de principios de Diseño Universal para el Aprendizaje (DUA) en Microsoft PowerPoint busca garantizar que los contenidos sean perceptibles, operables y comprensibles para todas las personas, incluyendo usuarios con discapacidad visual, auditiva o motriz (Cenci, 2026).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/img128.png', alt='').m-auto
      p.mb-0 La incorporación de criterios de accesibilidad fortalece la inclusión digital, mejora la experiencia de uso y contribuye a construir presentaciones más claras, organizadas y funcionales en contextos académicos, empresariales y formativos.
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Comprobador de accesibilidad
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img136.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 Microsoft PowerPoint incorpora una herramienta de auditoría interna denominada 3[b Comprobador de accesibilidad], diseñada para identificar barreras que puedan dificultar la interpretación del contenido mediante tecnologías de asistencia, como lectores de pantalla. Esta función analiza la presentación en tiempo real y clasifica los hallazgos según el nivel de impacto sobre la accesibilidad del documento.
      .row.justify-content-center.mb-5
        .col-xl-10
          .row.justify-content-center.mb-0
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                h4.mb-0.text-center Errores
                p.mb-0.text-center Identifican elementos que impiden la comprensión del contenido, como la ausencia de texto alternativo en imágenes o gráficos.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                h4.mb-0.text-center Advertencias
                p.mb-0.text-center Señalan situaciones que podrían dificultar la lectura o interpretación, como contrastes insuficientes o estructuras visuales confusas.
            .col-xl-4.col-md-9(data-aos="zoom-in")
              .caja-5.h-100
                h4.mb-0.text-center Instrucciones de corrección
                p.mb-0.text-center La herramienta proporciona orientaciones paso a paso para solucionar cada problema detectado dentro de la presentación.
      p.mb-5 La utilización periódica de esta herramienta permite detectar inconsistencias antes de la exposición o distribución del archivo, fortaleciendo la calidad técnica y la inclusión del contenido:
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 19.
            span Activar la herramienta Comprobar accesibilidad
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img129.png', alt='Interfaz de PowerPoint con acceso al comprobador de accesibilidad y panel de revisión de errores, advertencias y recomendaciones inclusivas. ').m-auto
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Texto alternativo (#[i Alt Text]) y descripciones
      p.mb-5 Las imágenes, gráficos, capturas de pantalla y formas incorporadas en PowerPoint deben incluir descripciones textuales que permitan interpretar su contenido mediante lectores de pantalla. El texto alternativo (#[i Alt Text]) facilita que usuarios con discapacidad visual comprendan el propósito comunicativo de cada recurso gráfico.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 20.
            span Adición de texto alternativo en una imagen
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img130.png', alt='Panel de PowerPoint para agregar texto alternativo descriptivo a imágenes y elementos gráficos con fines de accesibilidad digital. ').m-auto
      p.mb-5 La elaboración de descripciones accesibles debe responder a criterios funcionales y no únicamente estéticos. A continuación, se presentan algunas recomendaciones fundamentales:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Descripción funcional
                  p.mb-0 Explicar el propósito comunicativo del recurso gráfico y no solo su apariencia visual.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img131.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Contextualización del contenido
                  p.mb-0 Relacionar la descripción con la información presentada dentro de la diapositiva.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img132.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Objetos decorativos
                  p.mb-0 Marcar elementos puramente ornamentales como decorativos para evitar saturación de información en lectores de pantalla.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img133.png', alt='' style="max-width: 500px").m-auto
      .caja-4.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img24.svg', alt='' style="width: 85px").m-auto
          .col-xl.col-md-10
            p.mb-0 La implementación adecuada de texto alternativo mejora significativamente la accesibilidad de la presentación y fortalece la comprensión del contenido para diferentes tipos de usuarios.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Contraste y tipografía inclusiva
      p.mb-5 El diseño universal requiere decisiones cromáticas y tipográficas orientadas a garantizar legibilidad, claridad y accesibilidad visual. La selección de colores y fuentes influye directamente en la comprensión del contenido y en la experiencia de lectura dentro de la presentación. A continuación, se presentan algunos criterios esenciales de accesibilidad visual:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 21.
            span Ejemplo de imagen con características accesibles
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img134.png', alt='Ejemplo de diseño accesible con contraste adecuado entre texto y fondo, tipografía legible y organización visual orientada a la inclusión. ').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img135.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Contraste adecuado").ajuste-cajaAcordion
              p.mb-3 Mantener un contraste mínimo de 4.5:1 en textos normales y 3:1 en textos de gran tamaño para facilitar la lectura a personas con baja visión o daltonismo (W3C, 2025).
            .row(titulo="Tipografías <em>Sans Serif</em>").ajuste-cajaAcordion
              p.mb-3 Utilizar fuentes como Calibri, Arial o Verdana debido a que favorecen mayor claridad y facilidad de lectura.
            .row(titulo="No depender únicamente del color").ajuste-cajaAcordion
              p.mb-3 Complementar colores con etiquetas, iconos o textos explicativos para reforzar la interpretación de la información.
      p.mb-5 La aplicación de estos criterios contribuye a generar presentaciones más inclusivas, comprensibles y técnicamente adecuadas para diversos contextos de exposición y aprendizaje.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img136.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Recomendación:] la accesibilidad no debe entenderse como un ajuste adicional dentro del diseño de presentaciones, sino como un principio fundamental orientado a garantizar inclusión, claridad comunicativa y acceso equitativo a la información.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
