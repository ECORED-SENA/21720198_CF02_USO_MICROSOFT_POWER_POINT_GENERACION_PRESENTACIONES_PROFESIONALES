<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Integración de elementos multimedia
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.mb-4(data-aos="fade-right")
            p.mb-0 En este apartado, se aborda la integración de elementos multimedia en Microsoft PowerPoint como estrategia para fortalecer la comunicación visual, dinamizar el contenido y mejorar la experiencia del usuario durante la presentación. Se profundiza en el uso profesional de animaciones, videos, audios, herramientas de dibujo y pizarra, así como en la instalación y uso de complementos externos como Pexels, considerando criterios técnicos, comunicativos y pedagógicos.
          .row.align-items-center
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img50.svg', alt='' style="width: 90px").m-auto
            .col-xl
              p.mb-0 Asimismo, se analizan los errores más frecuentes asociados al uso inadecuado de recursos multimedia y las buenas prácticas orientadas a la construcción de presentaciones claras, organizadas y visualmente coherentes.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img48.png', alt='').m-auto
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Animaciones
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img49.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las animaciones en PowerPoint permiten controlar la forma en que los elementos aparecen, se enfatizan o desaparecen dentro de una diapositiva. Su aplicación no debe responder únicamente a fines decorativos, sino funcionar como un mecanismo de apoyo a la narrativa visual, facilitando la secuenciación de la información y la focalización de la atención del público.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img51.png', alt='').m-auto
        .col-xl
          p El uso adecuado de animaciones implica seleccionar el tipo de efecto según el propósito comunicativo, controlar el orden de aparición de los elementos y configurar tiempos de inicio y duración mediante el panel de animación.
          .caja-1.color-1(data-aos="fade-left")
            p.mb-0 Una correcta implementación permite explicar procesos complejos paso a paso, evitando la sobrecarga cognitiva del espectador. En términos generales, la animación se centra en la transición y el movimiento aplicado sobre elementos visuales dentro de la diapositiva.
      p.mb-5 La animación en PowerPoint trasciende el movimiento básico para convertirse en una herramienta de gestión de la atención. Su propósito principal consiste en sincronizar el discurso del presentador con la aparición de estímulos visuales, permitiendo que la audiencia procese la información de manera secuencial y organizada.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Categorización de efectos
      p.mb-5 Las categorías de animación disponibles en PowerPoint responden a diferentes intenciones comunicativas dentro de la presentación. A continuación, se describen sus principales características y aplicaciones:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 10.
            span Categorías de animaciones en PowerPoint.
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img52.png', alt='Galería de animaciones de PowerPoint con categorías de entrada, énfasis, salida y trayectorias de movimiento aplicadas a objetos de una diapositiva. ').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img53.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Entrada").ajuste-cajaAcordion
              p.mb-3 Introducen elementos dentro del flujo visual de la diapositiva. En contextos profesionales, se recomienda utilizar efectos sutiles, como Desvanecer o Desplazar hacia arriba, configurados con duraciones breves para evitar distracciones innecesarias.
            .row(titulo="Énfasis").ajuste-cajaAcordion
              p.mb-3 Permiten jerarquizar información que ya se encuentra presente en la diapositiva. Resultan útiles para destacar datos estadísticos, modificar colores de conceptos clave o aplicar ligeros cambios de escala mientras se desarrolla la explicación.
            .row(titulo="Salida").ajuste-cajaAcordion
              p.mb-3 Facilitan la eliminación progresiva de elementos visuales para introducir nueva información sin necesidad de cambiar de diapositiva. Son especialmente útiles en presentaciones con alta densidad informativa.
            .row(titulo="Trayectorias de movimiento").ajuste-cajaAcordion
              p.mb-3 Permiten representar desplazamientos, procesos dinámicos o flujos de información entre distintos puntos de la composición visual.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Configuración avanzada y panel de animación
      p.mb-5 El control detallado de la narrativa visual se realiza mediante el #[b Panel de animación], herramienta que permite administrar el orden, la duración y las condiciones de ejecución de cada efecto aplicado dentro de la diapositiva.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 11.
            span Panel de animación
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img54.png', alt='Panel lateral de PowerPoint con lista de animaciones aplicadas, secuencia de ejecución, duración y controles de sincronización de efectos visuales. ').m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p  PowerPoint incorpora diferentes desencadenadores que permiten controlar el momento exacto en que se ejecuta una animación. Estas opciones facilitan la creación de secuencias visuales organizadas y coherentes con el ritmo de exposición.
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Al hacer clic:] permite controlar manualmente el inicio de cada animación durante la presentación.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Con la anterior:] ejecuta varias animaciones de manera simultánea para generar efectos compuestos o sincronizados.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Después de la anterior:] activa automáticamente una animación al finalizar la anterior, generando secuencias automáticas de lectura.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img55.png', alt='').m-auto
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 12.
            span Opciones avanzadas de intervalos, desencadenadores y tiempos en elementos animados
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img56.png', alt='Ventana avanzada de configuración de animaciones con opciones de inicio, duración, retraso, repetición y desencadenadores para controlar secuencias visuales. ').m-auto
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/img57.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 El uso avanzado de animaciones requiere configurar correctamente la duración y el retraso de los efectos aplicados. La duración determina la velocidad del movimiento, mientras que el retraso establece una pausa antes del inicio de la animación. En presentaciones profesionales, las transiciones fluidas suelen configurarse entre 0.25 y 0.75 segundos. Duraciones superiores pueden percibirse como lentas y afectar el ritmo de la exposición.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Técnicas de animación de alto impacto
      p.mb-5 Las herramientas avanzadas de animación permiten desarrollar experiencias más dinámicas e interactivas dentro de PowerPoint, especialmente en presentaciones técnicas, educativas o corporativas.
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img58.jpg', alt="" ).m-auto
              h4.text-center Desencadenadores (#[i Triggers])
              .box___card_sinbordes_p
                p.mb-0.text-center Permiten ejecutar una animación únicamente cuando se hace clic sobre un objeto específico de la diapositiva. Son útiles para crear cuadros de mando interactivos, sesiones de preguntas y respuestas o menús de navegación no lineales.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img59.jpg', alt="" ).m-auto
              h4.text-center Animación de gráficos
              .box___card_sinbordes_p
                p.mb-0.text-center Facilita la aparición progresiva de series o categorías de datos dentro de gráficos estadísticos, favoreciendo el análisis secuencial de la información.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img60.jpg', alt="" ).m-auto
              h4.text-center Animación de listas de texto
              .box___card_sinbordes_p
                p.mb-0.text-center Permite presentar contenido por párrafos o niveles jerárquicos, evitando que el público anticipe información mientras el expositor desarrolla cada idea.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img61.png', alt='').m-auto
        .col-xl
          .caja-1.color-1.mb-4(data-aos="fade-left")
            p.mb-0 La aplicación equilibrada de animaciones contribuye a fortalecer la claridad expositiva y mejora la experiencia de interacción con el contenido. No obstante, el exceso de movimiento o la utilización indiscriminada de efectos puede generar distracción y afectar la comprensión de la información presentada.
          .row.align-items-center
            .col-xl
              p.mb-0 #[b Recomendación:] utilizar animaciones de manera moderada, priorizando siempre la claridad comunicativa y la coherencia visual de la presentación.
            .col-xl-auto(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img26.svg', alt='' style="width: 90px").m-auto
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Inserción de videos y audios
      .caja-8(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 El uso de recursos audiovisuales permite transformar una presentación estática en una experiencia más dinámica e inmersiva. La incorporación adecuada de videos y audios fortalece la comprensión de conceptos, mejora la atención del público y facilita la transmisión de información compleja mediante estímulos visuales y sonoros. No obstante, un manejo inadecuado de estos recursos puede generar problemas de rendimiento, incompatibilidad o interrupciones durante la exposición. Por esta razón, el uso profesional de contenido multimedia debe priorizar la estabilidad del archivo, la fluidez de reproducción y la pertinencia comunicativa de cada elemento incorporado.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/img62.png', alt='').m-auto
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Gestión de video: edición y control interno
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img63.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La inserción de videos en PowerPoint permite enriquecer el contenido mediante demostraciones, testimonios, simulaciones o explicaciones visuales. Cada recurso audiovisual debe cumplir una función específica dentro de la presentación y mantener coherencia con el objetivo comunicativo de la diapositiva.
      p.mb-5 PowerPoint permite insertar videos desde archivos locales o plataformas en línea, facilitando diferentes posibilidades de integración multimedia. Para garantizar una experiencia adecuada de reproducción, se recomienda aplicar las siguientes prácticas:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Usar fragmentos breves y relevantes
                  p.mb-0 Incorporar únicamente segmentos que aporten información significativa y mantengan la atención del público.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Verificar compatibilidad de formatos
                  p.mb-0 Utilizar formatos reconocidos por PowerPoint para evitar errores de reproducción durante la presentación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ajustar tamaño y ubicación
                  p.mb-0 Integrar el video dentro de la composición visual de la diapositiva sin afectar la distribución del contenido.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Además de la reproducción multimedia, PowerPoint incorpora funciones básicas de edición que permiten realizar ajustes sin necesidad de utilizar programas externos especializados. A continuación, se presentan las principales herramientas de edición disponibles:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img67.jpg', alt="" ).m-auto
              h4.text-center Recorte de video
              .box___card_sinbordes_p
                p.mb-0.text-center Permite establecer puntos específicos de inicio y finalización, eliminando segmentos innecesarios y concentrando la atención en el contenido relevante.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img68.jpg', alt="" ).m-auto
              h4.text-center Fundidos (#[i Fade in/Fade out])
              .box___card_sinbordes_p
                p.mb-0.text-center Facilitan transiciones suaves al inicio y al final del video, evitando cortes abruptos de imagen y sonido.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img69.jpg', alt="" ).m-auto
              h4.text-center Marcadores de posición
              .box___card_sinbordes_p
                p.mb-0.text-center Funcionan como puntos de referencia dentro de la línea de tiempo y permiten sincronizar la aparición de otros elementos visuales durante la reproducción.
      p.mb-5 La aplicación adecuada de estas herramientas contribuye a generar presentaciones más fluidas, organizadas y profesionales, especialmente en escenarios donde el contenido audiovisual forma parte central de la explicación o demostración técnica.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/mnjgqnH64Yg?si=x7Un6A1wHV6QtLBL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Insertar y gestionar animaciones y videos en PowerPoint.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Configuración de audio narrativo y de fondo
      .caja-8(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 El audio puede utilizarse como recurso de apoyo para narraciones, efectos sonoros o ambientación dentro de una presentación. Su aplicación debe responder a una intención comunicativa clara, evitando distracciones o interferencias con la exposición oral.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/img70.png', alt='').m-auto
      p.mb-5 En presentaciones profesionales, el audio se emplea principalmente en materiales autoguiados, recursos educativos y presentaciones asincrónicas, donde cumple funciones explicativas, descriptivas o complementarias. Una correcta configuración permite mejorar la experiencia del usuario y fortalecer la comprensión del contenido presentado. Según su propósito dentro de la diapositiva, el audio puede clasificarse de la siguiente manera:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Audio de acompañamiento
                  p.mb-0 Corresponde a música de fondo configurada para reproducirse de forma continua durante varias diapositivas. Se recomienda utilizar niveles de volumen bajos para evitar interferencias con la voz del presentador.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Audio puntual
                  p.mb-0 Incluye efectos sonoros o fragmentos específicos utilizados para reforzar una idea, enfatizar acciones o complementar momentos concretos de la exposición.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Narración grabada
                  p.mb-0 Consiste en la sincronización de voz sobre diapositivas. Su uso es fundamental en presentaciones autodirigidas, materiales virtuales y contenidos #[i e-learning].
      .caja-4.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img24.svg', alt='' style="width: 85px").m-auto
          .col-xl.col-md-10
            p.mb-0 La incorporación adecuada de recursos sonoros contribuye a generar presentaciones más dinámicas y comprensibles. Sin embargo, el exceso de efectos o una configuración inadecuada del volumen puede afectar la claridad del mensaje y disminuir la calidad de la experiencia comunicativa.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Optimización y compatibilidad de los elementos multimedia
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Uno de los principales desafíos en las presentaciones profesionales consiste en garantizar el equilibrio entre calidad visual, tamaño del archivo y compatibilidad multimedia. El uso excesivo de videos, audios o recursos de alta resolución puede afectar el rendimiento de PowerPoint, generar tiempos de carga prolongados o provocar errores durante la reproducción.
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 Por esta razón, PowerPoint incorpora herramientas de optimización que permiten reducir el peso del archivo y mejorar la estabilidad de los elementos multimedia sin comprometer significativamente la calidad del contenido.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img74.png', alt='').m-auto
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Compresión de medios
      p.mb-5 La herramienta #[b Compresión de medios], disponible en la ruta #[b Archivo > Información], permite optimizar videos y audios integrados dentro de la presentación. Esta función reduce el tamaño del archivo y mejora la fluidez de reproducción en distintos dispositivos.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 13.
            span Opciones para elegir el mejor balance entre peso del archivo y calidad multimedia
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img75.png', alt='Ventana de compresión multimedia de PowerPoint con niveles de calidad de presentación, internet y baja resolución para optimizar videos y audios. ').m-auto
      p.mb-5 PowerPoint ofrece diferentes niveles de compresión según las necesidades de uso:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img76.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Calidad de presentación (1080p)").ajuste-cajaAcordion
              p.mb-3 Recomendada para pantallas de alta resolución y presentaciones proyectadas en gran formato.
            .row(titulo="Calidad de Internet (720p)").ajuste-cajaAcordion
              p.mb-3 Proporciona un equilibrio adecuado entre peso del archivo y claridad visual, especialmente en reuniones virtuales o entornos híbridos.
            .row(titulo="Calidad baja (480p)").ajuste-cajaAcordion
              p.mb-3 Optimizada para compartir archivos mediante correo electrónico o conexiones de internet limitadas.
      p.mb-5 La selección adecuada del nivel de compresión permite optimizar el rendimiento general de la presentación y reducir riesgos de interrupción durante la exposición.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Incrustación y vínculos externos
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img77.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 PowerPoint permite integrar contenido multimedia mediante incrustación directa o mediante vínculos externos. Cada alternativa presenta ventajas y limitaciones técnicas que deben evaluarse según el contexto de uso.
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img78.svg', alt='' style="max-width: 100px")
            .col-xl
              h2 Incrustación
          p.mb-0 El recurso multimedia forma parte del archivo .pptx. Esta es la opción más segura para evitar la pérdida de archivos al trasladar la presentación entre diferentes dispositivos.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img79.svg', alt='' style="max-width: 100px")
            .col-xl
              h2 Vínculos externos
          p.mb-0 Permiten insertar videos desde plataformas como YouTube o Vimeo, reduciendo significativamente el peso del archivo. Sin embargo, requieren conexión estable a internet durante la presentación.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img12.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 La elección entre incrustación o vínculo externo debe considerar factores como conectividad, portabilidad del archivo y estabilidad técnica del entorno donde se realizará la presentación.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 14.
            span Ruta para insertar video desde archivo local o recurso en línea
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img80.png', alt='Menú de PowerPoint con opciones para insertar videos desde archivos locales, dispositivos o plataformas en línea integradas en la presentación. ').m-auto
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Atajos de control multimedia en modo presentación
      p.mb-5 Durante la exposición, PowerPoint incorpora comandos rápidos de teclado que facilitan el control de recursos multimedia sin interrumpir la presentación.
      .row.justify-content-center.mb-5
        .col-xl-6
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Uso del teclado en modo presentación para el control de recursos multimedia.
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Función
                  th.texto-left Comando
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Reproducir / Pausar
                  td.texto-left Alt + P
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Detener reproducción
                  td.texto-left Alt + Q
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Subir volumen
                  td.texto-left Alt + Arriba
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bajar volumen
                  td.texto-left Alt + Abajo
      p.mb-5 La utilización de estos atajos contribuye a mantener continuidad durante la exposición y facilita el manejo eficiente de videos y audios en tiempo real.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img81.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Antes de realizar una presentación, siempre se recomienda probar el archivo en el dispositivo final y validar que todos los recursos multimedia funcionen correctamente. Esta práctica reduce riesgos técnicos, mejora la experiencia de reproducción y fortalece la percepción de profesionalismo ante la audiencia.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Complementos en PowerPoint: maximizando su funcionalidad
      .caja-8(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 Los complementos son programas suplementarios que se instalan dentro de PowerPoint para añadir comandos y funciones específicas que no están disponibles de manera nativa. Su integración transforma la aplicación en un entorno de trabajo más especializado, permitiendo la conexión con bancos de imágenes, herramientas de visualización de datos, sistemas interactivos y recursos basados en inteligencia artificial aplicados a presentaciones profesionales.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/img82.png', alt='').m-auto
      p.mb-5 La incorporación estratégica de complementos permite optimizar procesos de diseño, mejorar la productividad y ampliar las capacidades técnicas de PowerPoint en contextos académicos, corporativos y formativos. A continuación, se presentan algunas de las principales ventajas asociadas al uso de complementos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Eficiencia operativa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/img83.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Eficiencia operativa
              p.mb-0 Reduce tiempos de diseño al permitir la búsqueda e inserción de recursos sin salir de la presentación.
        .py-3.py-md-4(titulo="Acceso a recursos de alta calidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/img84.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Acceso a recursos de alta calidad
              p.mb-0 Facilita la conexión directa con bibliotecas de imágenes, iconos, mapas y recursos multimedia con licencias de uso profesional.
        .py-3.py-md-4(titulo="Interactividad incrementada")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/img85.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Interactividad incrementada
              p.mb-0 Permite incorporar encuestas en vivo, temporizadores y elementos dinámicos que fortalecen la participación de la audiencia.
        .py-3.py-md-4(titulo="Estandarización visual")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/img86.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estandarización visual
              p.mb-0 Favorece el mantenimiento de una identidad gráfica coherente mediante recursos visuales previamente validados.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Instrucciones para la instalación de complementos
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img100.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 La gestión de complementos se realiza mediante la tienda oficial de Microsoft, garantizando condiciones adecuadas de seguridad, compatibilidad y actualización del #[i software].
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 15.
            span Ruta para instalar complementos en PowerPoint
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img87.png', alt='Interfaz de PowerPoint con acceso a la tienda de complementos, herramientas de búsqueda e instalación de extensiones adicionales para ampliar funcionalidades. ').m-auto
      p.mb-5.text-center El procedimiento general de instalación se desarrolla de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="l")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Acceso a la tienda
                p.mb-0 Dirigirse a la pestaña #[b Insertar] dentro de la cinta de opciones de PowerPoint.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img88.png', alt='' style="width: 400px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img89.png', alt='' style="width: 400px").m-auto
              .col-lg.fit___pasosA-left
                h3 Exploración
                p.mb-0 Seleccionar #[b Obtener complementos] o #[b Complementos > Tienda] para acceder al catálogo disponible.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Búsqueda y selección
                p.mb-0 Utilizar el cuadro de búsqueda para localizar el complemento según nombre o funcionalidad requerida.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img90.png', alt='' style="width: 400px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img91.png', alt='' style="width: 400px").m-auto
              .col-lg.fit___pasosA-left
                h3 Agregación
                p.mb-0 Hacer clic en #[b Agregar] y posteriormente en #[b Continuar] para aceptar los términos y condiciones de uso.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Uso
                p.mb-0 Una vez instalado, el complemento aparecerá generalmente en la pestaña #[b Insertar], #[b Inicio] o en una nueva pestaña creada automáticamente.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img92.png', alt='' style="width: 400px").m-auto
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Complemento Pexels
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img100.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 Pexels es uno de los complementos más utilizados para fortalecer el diseño visual de presentaciones, ya que proporciona acceso directo a fotografías y videos de alta resolución bajo licencias de uso libre tipo Creative Commons Zero (CC0).
      p.mb-5 Su integración con PowerPoint facilita la incorporación inmediata de recursos gráficos sin necesidad de abandonar la presentación o utilizar herramientas externas adicionales. El uso específico del complemento se desarrolla mediante las siguientes acciones:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Activación
                  p.mb-0 Después de la instalación, seleccionar el botón de Pexels ubicado en la pestaña #[b Insertar] para abrir el panel lateral.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img93.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Búsqueda por atributos
                  p.mb-0 Utilizar palabras clave o filtros cromáticos para localizar imágenes alineadas con la temática y la paleta de colores de la presentación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img94.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inserción unificada
                  p.mb-0 Al seleccionar un recurso, este se integra automáticamente en la diapositiva activa con ajuste inicial proporcional.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img95.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Optimización visual
                  p.mb-0 Las imágenes insertadas conservan metadatos que favorecen una mejor calidad de impresión y proyección frente a recursos copiados desde navegadores web.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 #[b Nota de productividad:] el uso de Pexels reduce riesgos relacionados con derechos de autor, aspecto especialmente importante en presentaciones académicas, institucionales y corporativas de circulación pública.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Gestión de complementos instalados
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/img97.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 PowerPoint permite administrar los complementos instalados desde la opción #[b Insertar > Mis complementos]. Desde este panel es posible actualizar, desactivar o eliminar extensiones según las necesidades del usuario. La administración adecuada de complementos contribuye a mantener un mejor rendimiento del sistema y evita la acumulación de herramientas innecesarias dentro del entorno de trabajo.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 La inteligencia artificial en la creación de presentaciones
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La integración de la inteligencia artificial (IA) en Microsoft PowerPoint representa un cambio significativo en los procesos de producción académica y corporativa. Estas tecnologías permiten automatizar tareas que tradicionalmente requerían largos tiempos de diseño, organización y redacción, facilitando que el usuario concentre sus esfuerzos en la estrategia comunicativa y la selección crítica de contenidos.
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img24.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 La incorporación de herramientas basadas en IA fortalece la productividad y amplía las posibilidades de creación dentro de PowerPoint, especialmente en escenarios donde se requiere rapidez, coherencia visual y optimización de recursos gráficos y textuales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img98.png', alt='').m-auto
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Ventajas de la IA en PowerPoint
      p.mb-5 La adopción de herramientas de inteligencia artificial ofrece beneficios que contribuyen a mejorar la calidad técnica y visual de las presentaciones. A continuación, se presentan algunas de sus principales aplicaciones:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img99.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Generación estructural instantánea").ajuste-cajaAcordion
              p.mb-3 Permite transformar ideas centrales o documentos extensos en estructuras organizadas de diapositivas con títulos, jerarquías y puntos clave definidos automáticamente.
            .row(titulo="Diseño coherente").ajuste-cajaAcordion
              p.mb-3 Utiliza algoritmos que sugieren distribuciones visuales, esquemas cromáticos y organización de elementos, respetando principios de armonía visual y composición gráfica.
            .row(titulo="Superación del “lienzo en blanco”").ajuste-cajaAcordion
              p.mb-3 Facilita la creación de borradores iniciales que sirven como base para posteriores procesos de personalización y edición humana.
            .row(titulo="Optimización de contenidos").ajuste-cajaAcordion
              p.mb-3 Permite mejorar redacción, resumir información, traducir textos y generar descripciones alternativas para fortalecer accesibilidad y claridad comunicativa.
      .caja-4.mb-0(data-aos="flip-up").mb-5
        .row.align-items-center
          .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img24.svg', alt='' style="width: 85px").m-auto
          .col-xl.col-md-10
            p.mb-0 Estas herramientas permiten agilizar procesos de producción y mejorar la calidad visual de las presentaciones, especialmente en entornos educativos, empresariales y corporativos.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img100.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 A continuación, se presenta un video sobre complementos e integración de inteligencia artificial en PowerPoint. Este recurso permite comprender cómo las herramientas automatizadas fortalecen el diseño, la organización y la optimización de contenidos dentro de una presentación.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/sBBb3NyO2Ow?si=n9GWp8CrJpEMXsec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Complementos y uso de inteligencia artificial en PowerPoint.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Desafíos y desventajas
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img100.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 Aunque las herramientas de IA ofrecen amplias ventajas operativas, su utilización también implica riesgos y limitaciones que deben ser evaluados críticamente por el autor de la presentación.
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img101.jpg', alt="" ).m-auto
              h4.text-center Falta de originalidad
              .box___card_sinbordes_p
                p.mb-0.text-center El uso excesivo de estructuras generadas automáticamente puede producir presentaciones genéricas con poca identidad visual o conceptual.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img102.jpg', alt="" ).m-auto
              h4.text-center Sesgos y errores de información
              .box___card_sinbordes_p
                p.mb-0.text-center Los modelos generativos pueden incorporar datos incorrectos, interpretaciones imprecisas o sesgos derivados de sus datos de entrenamiento.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img103.jpg', alt="" ).m-auto
              h4.text-center Desconexión contextual
              .box___card_sinbordes_p
                p.mb-0.text-center La IA no siempre interpreta adecuadamente el tono, la intención comunicativa o las características específicas de la audiencia.
      p.mb-5 Por esta razón, las herramientas de inteligencia artificial deben utilizarse como apoyo complementario y no como sustituto del criterio profesional, pedagógico o comunicativo del usuario.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Complemento GPT for PowerPoint AI
      p.mb-5 Uno de los ejemplos más destacados de integración entre inteligencia artificial y PowerPoint es el complemento GPT for PowerPoint AI, herramienta que conecta modelos de lenguaje de gran escala (#[i Large Language Models] o LLM) directamente con la interfaz de creación de diapositivas. Este tipo de complemento permite automatizar procesos de generación textual y organización de contenidos mediante instrucciones escritas por el usuario. Entre sus funcionalidades más relevantes se encuentran las siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 #[i Text-to-Presentation]
                  p.mb-0 Permite generar automáticamente estructuras completas de diapositivas a partir de instrucciones escritas o documentos de referencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img104.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Edición asistida
                  p.mb-0 Facilita reescritura de párrafos, resumen de contenidos y adaptación del tono comunicativo dentro de las diapositivas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img105.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Búsqueda inteligente de recursos
                  p.mb-0 Sugiere imágenes y elementos visuales mediante análisis semántico del contenido textual generado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img106.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img107.png', alt='').m-auto
        .col-xl
          .caja-1.color-1.mb-4(data-aos="fade-left")
            p.mb-0 La integración de este tipo de herramientas fortalece los procesos de diseño y producción de presentaciones; sin embargo, siempre se recomienda validar la precisión de la información, revisar la coherencia del contenido y personalizar el resultado final según las necesidades específicas de la audiencia y del contexto de presentación.
          .row.align-items-center
            .col-xl-auto(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/intro/img2.svg', alt='' style="width: 90px").m-auto
            .col-xl
              p.mb-0 #[b Recomendación:] la inteligencia artificial debe utilizarse como herramienta de apoyo para optimizar procesos de diseño y organización, manteniendo siempre supervisión crítica y validación humana sobre el contenido generado.

</template>

<script>
export default {
  name: 'Tema2',
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
