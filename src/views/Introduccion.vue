<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-1.mb-4
            p.mb-0 La creación de presentaciones profesionales en Microsoft PowerPoint requiere mucho más que el uso básico de diapositivas y texto. En contextos académicos, laborales y productivos, las presentaciones se han convertido en herramientas estratégicas de comunicación visual que permiten organizar información, representar datos, explicar procesos y fortalecer la transmisión de ideas de manera clara y estructurada. Por esta razón, el dominio de herramientas complementarias, recursos multimedia, elementos interactivos y criterios de accesibilidad resulta fundamental para desarrollar materiales visuales con mayor impacto y coherencia comunicativa. 
          .row.align-items-center
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src='@/assets/curso/intro/img2.svg', alt='' style="width: 90px").m-auto
            .col-xl
              p.mb-0 En este contenido se profundiza en el uso avanzado de tablas, diagramas SmartArt, gráficos, animaciones, videos, audios, complementos externos y herramientas basadas en inteligencia artificial, integrando criterios de diseño visual, narrativa y funcionalidad técnica. Además, se abordan estrategias relacionadas con la preparación de presentaciones para la exposición, el control de transiciones, la navegación no lineal y la optimización de recursos multimedia, permitiendo fortalecer la experiencia del usuario y mejorar la calidad de las presentaciones profesionales en distintos escenarios de comunicación. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/intro/img1.png', alt='').m-auto
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/intro/img3.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 De igual manera, se incorporan principios de accesibilidad y diseño universal orientados a garantizar que las presentaciones puedan ser comprendidas por diferentes tipos de usuarios, incluyendo personas con discapacidad visual, auditiva o motriz. Aspectos como el uso de texto alternativo, el contraste adecuado, las tipografías inclusivas y las herramientas de comprobación de accesibilidad fortalecen la construcción de presentaciones más inclusivas, organizadas y alineadas con estándares actuales de calidad digital y comunicación visual.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
