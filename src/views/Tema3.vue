<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Preparación de la presentación para la exposición
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p En el presente apartado, se aborda de manera integrada el uso de transiciones entre diapositivas y la preparación técnica y comunicativa de la presentación para su exposición, entendiendo estos elementos como factores determinantes para garantizar fluidez narrativa, coherencia visual y efectividad comunicativa.
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 Asimismo, se analizan criterios avanzados para la selección y aplicación de transiciones, el control del ritmo visual, el uso del modo presentador y las estrategias de ensayo y configuración según el entorno de exposición, fortaleciendo la capacidad de comunicar ideas de manera clara, segura y profesional.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img108.png', alt='').m-auto
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Las transiciones como recurso narrativo
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/img109.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 Las transiciones en Microsoft PowerPoint permiten definir la manera en que una diapositiva da paso a la siguiente. Desde una perspectiva profesional, estos no deben considerarse efectos visuales aislados, sino recursos narrativos que fortalecen la continuidad del mensaje y el ritmo de la exposición.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img12.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 Las transiciones funcionan como conectores lógicos entre contenidos, indicando a la audiencia si se está avanzando hacia un subtema relacionado, cambiando de sección o concluyendo una idea dentro de la presentación. La aplicación adecuada de transiciones permite alcanzar diferentes objetivos comunicativos:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/img110.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Mantener la atención de la audiencia
              p.mb-0.text-center Favorece la continuidad visual y evita cambios abruptos entre diapositivas.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/img111.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Facilitar la comprensión de ideas
              p.mb-0.text-center Ayuda a identificar la secuencia lógica del contenido presentado.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/img112.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Reducir rupturas visuales
              p.mb-0.text-center Genera transiciones fluidas entre conceptos o secciones temáticas.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/img113.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Reforzar la estructura narrativa
              p.mb-0.text-center Contribuye a mantener coherencia entre el discurso oral y el contenido visual.
      .caja-4.mb-0(data-aos="flip-up").mb-5
        .row.align-items-center
          .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img24.svg', alt='' style="width: 85px").m-auto
          .col-xl.col-md-10
            p.mb-0 Cuando se utilizan de manera excesiva o sin intención comunicativa, las transiciones pueden convertirse en distractores que afectan negativamente la percepción del mensaje y disminuyen la credibilidad del presentador.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Tipos de transiciones y aplicación estratégica
      p.mb-5 PowerPoint clasifica las transiciones según su impacto visual y funcionalidad dentro de la narrativa de la presentación. La selección adecuada depende del contexto, el tipo de audiencia y el objetivo comunicativo.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 16.
            span Opciones de transición de diapositivas
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img114.png', alt='Galería de transiciones de PowerPoint con efectos visuales de cambio entre diapositivas y configuraciones de movimiento y duración. ').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img115.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Sutiles").ajuste-cajaAcordion
              p.mb-3 Incluyen efectos como Desvanecer o Empuje. Son las más recomendadas en contextos académicos y corporativos debido a que mantienen fluidez sin desviar la atención del contenido principal.
            .row(titulo="Llamativas").ajuste-cajaAcordion
              p.mb-3 Incorporan efectos como Viento o Fractura. Su uso debe limitarse a cambios de sección muy marcados o presentaciones creativas donde el impacto visual sea prioritario.
            .row(titulo="Contenido dinámico").ajuste-cajaAcordion
              p.mb-3 Permiten mover únicamente objetos o textos mientras el fondo permanece estático, generando sensación de profundidad y dinamismo visual.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Configuración y control de tiempos
      p.mb-5 La efectividad de una transición profesional depende en gran medida de la configuración técnica aplicada dentro del panel de intervalos de PowerPoint.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 17.
            span Configuración de duración y sonidos
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img116.png', alt='Panel de configuración de transiciones con controles de duración, avance automático, sonidos y aplicación uniforme entre diapositivas. ').m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.mb-3(data-aos="fade-right")
            p.mb-0 La duración determina la velocidad con la que se ejecuta el cambio entre diapositivas. En presentaciones profesionales, las transiciones suelen configurarse entre 0.50 y 1.25 segundos, permitiendo un ritmo fluido y natural.
          p Tiempos excesivamente largos pueden generar sensación de lentitud, mientras que transiciones demasiado rápidas pueden resultar agresivas visualmente.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img117.png', alt='').m-auto
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/img118.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 Respecto al sonido, el uso de efectos predeterminados como aplausos o campanas no suele recomendarse en contextos técnicos o académicos debido a que disminuyen la formalidad de la exposición. No obstante, en algunos escenarios creativos o informales podrían utilizarse sonidos discretos, siempre que mantengan coherencia con el lenguaje visual de la presentación.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Avance de la diapositiva
      p.mb-5 PowerPoint permite configurar diferentes modalidades para controlar el avance entre diapositivas, adaptándose a distintos tipos de exposición.
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img78.svg', alt='' style="max-width: 100px")
            .col-xl
              h2 Al hacer clic con el mouse
          p.mb-0 Proporciona control manual al presentador y constituye la opción más utilizada en exposiciones presenciales.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img79.svg', alt='' style="max-width: 100px")
            .col-xl
              h2 Después de (automático)
          p.mb-0 Permite configurar secuencias automáticas, útiles en presentaciones autónomas, pantallas informativas o exportaciones en formato video.
      p.mb-5 La selección del tipo de avance debe responder a las condiciones del entorno de presentación y al nivel de control requerido durante la exposición.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.ajuste-caja-1(data-aos="fade-right")
            h5 Criterios de legibilidad y consistencia
            p  Para mantener calidad visual y coherencia narrativa dentro de la presentación, se recomienda aplicar criterios técnicos relacionados con uniformidad y propósito comunicativo.
            ul.fa-ul.estilo___ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Unicidad:] utilizar una misma transición sutil en toda la presentación para fortalecer la coherencia visual. La opción Aplicar a todas facilita esta uniformidad.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Direccionalidad:] mantener una misma dirección en efectos como Empuje permite reforzar la sensación de continuidad narrativa.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Propósito comunicativo:] cada transición debe responder a una necesidad de comprensión o conexión entre ideas, evitando efectos innecesarios o distractores.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img119.png', alt='').m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img120.png', alt='').m-auto
        .col-xl
          p La aplicación equilibrada de transiciones contribuye a mejorar la experiencia visual del público y fortalece la percepción profesional de la presentación.
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/img24.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 #[b Recomendación:] las transiciones deben utilizarse como apoyo a la narrativa visual y no como elementos decorativos independientes. La coherencia, moderación y claridad comunicativa son factores esenciales para lograr una exposición profesional.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Interactividad y navegación no lineal
      .caja-8(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 La interactividad en PowerPoint permite superar la estructura tradicional de avance secuencial entre diapositivas. Mediante herramientas de navegación no lineal, el presentador puede adaptar el desarrollo de la exposición según las necesidades de la audiencia o permitir que el usuario explore el contenido de manera autónoma, fortaleciendo así la experiencia de aprendizaje y la retención de información (Microsoft Corporation, 2024).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/img121.png', alt='').m-auto
      p.mb-5 Este tipo de navegación resulta especialmente útil en presentaciones académicas, comerciales y corporativas donde se requiere flexibilidad para profundizar en temas específicos sin perder la estructura general del contenido.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Herramientas de Zoom (vista de resumen)
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img136.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 La función #[b Zoom] constituye una de las herramientas más avanzadas de PowerPoint para construir narrativas visuales dinámicas e interactivas. Su funcionamiento permite crear una experiencia similar a un lienzo de navegación, facilitando desplazamientos entre secciones específicas de la presentación y retornos automáticos a un menú principal. PowerPoint incorpora diferentes tipos de Zoom según el propósito de navegación requerido:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 18.
            span Insertar vínculos Zoom
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img122.png', alt='Herramienta Zoom de PowerPoint para crear navegación interactiva mediante accesos a secciones, diapositivas y vistas de resumen dentro de la presentación. ').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img123.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Zoom de resumen").ajuste-cajaAcordion
              p.mb-3 Permite crear una diapositiva principal que funciona como índice visual. Desde esta vista, el usuario puede acceder a distintas secciones y regresar automáticamente al menú inicial al finalizar cada recorrido.
            .row(titulo="Zoom de sección").ajuste-cajaAcordion
              p.mb-3 Resulta útil en presentaciones extensas organizadas por capítulos, módulos o bloques temáticos diferenciados.
            .row(titulo="Zoom de diapositiva").ajuste-cajaAcordion
              p.mb-3 Facilita vínculos directos hacia diapositivas individuales, permitiendo ampliar explicaciones específicas sin alterar la estructura general de la presentación.
      p.mb-5 La implementación adecuada de herramientas Zoom contribuye a generar exposiciones más flexibles, organizadas y dinámicas, especialmente en escenarios donde se requiere navegación personalizada o interacción continua con la audiencia.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Botones de acción e hipervínculos internos
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img124.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los hipervínculos internos constituyen la base funcional de la interactividad dentro de PowerPoint. Además de conectar recursos externos, estas herramientas permiten establecer rutas de navegación internas entre diapositivas y secciones específicas.
      p.mb-5 La integración de vínculos y botones de acción facilita construir experiencias similares a interfaces web o aplicaciones interactivas dentro de la propia presentación. A continuación, se presentan sus principales aplicaciones:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img125.jpg', alt="" ).m-auto
              h4.text-center Vínculos a diapositivas específicas
              .box___card_sinbordes_p
                p.mb-0.text-center Permiten crear menús de navegación permanentes dentro de la presentación mediante accesos directos a contenidos específicos.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img126.jpg', alt="" ).m-auto
              h4.text-center Botones de acción
              .box___card_sinbordes_p
                p.mb-0.text-center Incorporan formas predefinidas con funciones interactivas como inicio, retroceso, avance o reproducción de recursos multimedia.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img127.jpg', alt="" ).m-auto
              h4.text-center Interacción mediante eventos
              .box___card_sinbordes_p
                p.mb-0.text-center Algunos botones permiten ejecutar acciones tanto al hacer clic como al pasar el cursor sobre el elemento, ampliando las posibilidades de interacción.
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-1.color-1(data-aos="zoom-in")
            p.mb-0 Estas herramientas fortalecen la autonomía del usuario y favorecen exposiciones más dinámicas, especialmente en presentaciones de formación, demostraciones comerciales o contenidos autogestionados.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img136.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 A continuación, se presenta un video sobre el uso de presentaciones no lineales o secuenciales en PowerPoint. Este recurso permite comprender cómo implementar navegación interactiva mediante Zoom, vínculos internos y botones de acción.
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/pbhISikRcqs?si=SoT9S3kMu7d7W7CX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Uso de presentaciones no lineales o secuenciales.

</template>

<script>
export default {
  name: 'Tema3',
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
