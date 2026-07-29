<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Uso de herramientas complementarias en Microsoft PowerPoint
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p En este apartado se profundiza en el uso avanzado de las herramientas complementarias de Microsoft PowerPoint como recursos estratégicos para enriquecer presentaciones profesionales mediante la organización, representación y comunicación clara de la información. Se abordan las tablas, los diagramas SmartArt, los gráficos de datos y el uso de complementos externos desde una perspectiva técnica y comunicativa, orientada a la toma de decisiones, la síntesis de información compleja y el fortalecimiento del impacto visual en contextos académicos, laborales y productivos.
          .caja-1.color-1(data-aos="fade-right")
            h5 Importancia de las herramientas complementarias en la comunicación visual avanzada
            p.mb-0 El uso de herramientas complementarias en PowerPoint responde a la necesidad de transformar información compleja en representaciones visuales comprensibles, facilitando la interpretación de datos, procesos y relaciones. En entornos profesionales, la correcta selección de tablas, diagramas o gráficos no solo mejora la estética de la presentación, sino que también cumple una función cognitiva esencial al reducir la carga mental del receptor y acelerar la comprensión del mensaje (Lidwell, Holden, & Butler, 2015).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img1.png', alt='').m-auto
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Tablas para la organización de información
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las estructuras organizadas en filas y columnas dentro de PowerPoint constituyen un recurso fundamental para ordenar información estructurada, comparar datos y presentar contenidos de manera clara. Su uso avanzado implica ir más allá de la simple inserción de elementos, incorporando criterios de diseño, legibilidad y jerarquía visual.
      p.mb-5 En presentaciones profesionales, estas estructuras deben responder a principios que favorezcan la claridad y la comprensión de la información. A continuación, se sintetizan los criterios más importantes para su correcta implementación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Selección de información relevante
                  p.mb-0 Incluir únicamente los datos necesarios. Un error frecuente consiste en trasladar grandes cantidades de texto a las tablas, lo que incrementa el esfuerzo cognitivo y reduce el interés sobre el contenido principal.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estructura lógica
                  p.mb-0 Organizar filas y columnas siguiendo un orden jerárquico, ya sea de lo general a lo específico o en secuencia cronológica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Economía visual
                  p.mb-0 Eliminar bordes innecesarios y elementos que generen “ruido gráfico”, evitando distracciones frente al dato principal.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alineación precisa
                  p.mb-0 Utilizar márgenes internos en las celdas para impedir que el texto quede demasiado próximo a los bordes, favoreciendo una mejor distribución visual.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Encabezados claros
                  p.mb-0 Incorporar títulos descriptivos que permitan identificar rápidamente el contenido de cada columna o fila.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Antes de incorporar una tabla, es importante definir el propósito comunicativo de la información y la relación entre los datos que se desean presentar. Esto permite seleccionar una estructura adecuada y mantener coherencia con el diseño general de la presentación.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Ejemplo diapositiva tabla en PowerPoint 
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img9.png', alt='Diapositiva de PowerPoint con una tabla organizada en filas y columnas para presentar información estructurada, comparar datos y facilitar la lectura mediante encabezados, alineación y distribución visual equilibrada. ').m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.mb-4(data-aos="fade-right")
            p.mb-0 PowerPoint permite personalizar tablas mediante estilos rápidos, sombreado selectivo, alineación de contenido y ajuste automático del tamaño de las celdas. Estas opciones facilitan la adaptación de la tabla al diseño general de la presentación y fortalecen la coherencia visual del documento (Microsoft Corporation, 2024).
          .row.align-items-center
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/intro/img2.svg', alt='' style="width: 90px").m-auto
            .col-xl
              p.mb-0 La aplicación adecuada de estos recursos contribuye a generar presentaciones más organizadas, legibles y funcionales, especialmente en contextos donde se requiere comparar información, presentar indicadores o sintetizar resultados de manera eficiente.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img10.png', alt='').m-auto
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Herramientas de edición y formato
      p.mb-5 El dominio de las pestañas contextuales #[b Diseño de tabla y Disposición] permite transformar una cuadrícula básica en un recurso infográfico de alto impacto. Estas herramientas facilitan la organización visual de la información y fortalecen la claridad comunicativa dentro de presentaciones profesionales.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 2.
            span Opciones #[b Insertar tabla] y pestañas contextuales en PowerPoint
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img11.png', alt='Interfaz de PowerPoint con herramientas para insertar tablas y pestañas contextuales de diseño y disposición, incluyendo opciones de estilos, bordes, sombreado y organización de contenido. ').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img12.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 Además de los estilos predefinidos, PowerPoint ofrece opciones avanzadas de personalización que permiten destacar información estratégica y mantener coherencia gráfica en toda la presentación. Entre los principales recursos se encuentran los siguientes:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img13.jpg', alt="" ).m-auto
              h4.text-center Sombreado selectivo
              .box___card_sinbordes_p
                p.mb-0.text-center Uso de colores de énfasis para destacar filas de totales o celdas que contienen hitos críticos.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img14.jpg', alt="" ).m-auto
              h4.text-center Gestión de bordes
              .box___card_sinbordes_p
                p.mb-0.text-center Aplicación de bordes internos mínimos y bordes externos reforzados para definir la estructura visual sin sobrecargar el diseño.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img15.jpg', alt="" ).m-auto
              h4.text-center Efectos de celda
              .box___card_sinbordes_p
                p.mb-0.text-center Incorporación moderada de biseles o sombras suaves para aportar profundidad a encabezados específicos.
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img24.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 La selección adecuada de estos recursos contribuye a mejorar la jerarquía visual y facilita la interpretación rápida de la información presentada.
      p.mb-5 La legibilidad técnica depende en gran medida de una correcta organización espacial. Por esta razón, PowerPoint incorpora herramientas que permiten ajustar con precisión la distribución de filas, columnas y contenido interno. A continuación, se describen las funciones más relevantes para optimizar la disposición de la información:
      .row.justify-content-center.mb-5
        .col-xl-10
          .row.justify-content-center.mb-0
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                h4.mb-0.text-center Distribución uniforme
                p.mb-0.text-center Permite igualar automáticamente el ancho de las columnas o el alto de las filas, garantizando simetría y equilibrio visual.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                h4.mb-0.text-center Márgenes de celda
                p.mb-0.text-center Ajusta la separación entre el texto y los límites de la celda mediante configuraciones normal, estrecha, ancha o personalizada.
            .col-xl-4.col-md-9(data-aos="zoom-in")
              .caja-5.h-100
                h4.mb-0.text-center Dirección del texto
                p.mb-0.text-center Facilita la rotación de encabezados en 90 ° o 270 °, optimizando el espacio horizontal en columnas estrechas.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img16.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El uso estratégico de estas herramientas favorece presentaciones más organizadas, técnicas y visualmente coherentes, especialmente en escenarios donde se requiere presentar grandes volúmenes de información de manera sintética y estructurada.
      p.mb-5 A continuación, se presenta un video sobre la creación y manipulación de estructuras organizadas en PowerPoint mediante herramientas de edición, distribución y formato. Este recurso permite comprender cómo optimizar la presentación de información para lograr composiciones más claras, equilibradas y funcionales.
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Iv20KpwHr0I?si=kOqK672csI5ELQsd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Creación y manipulación de estructuras organizadas en PowerPoint.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 SmartArt como herramienta de representación conceptual y estructural
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img17.png', alt='').m-auto
        .col-xl
          p  SmartArt es una de las herramientas más eficientes para representar mensajes y datos en documentos de texto y presentaciones. Su finalidad consiste en captar la atención y fortalecer la comprensión de las ideas frente al uso exclusivo de texto plano (Microsoft Corporation, 2024).
          .caja-1.color-1(data-aos="fade-left")
            p.mb-0 Mediante composiciones gráficas prediseñadas, PowerPoint permite estructurar información de manera visual, facilitando la explicación de procesos, relaciones, jerarquías y secuencias. Su aplicación adecuada contribuye a mejorar la organización conceptual y la claridad comunicativa en contextos académicos, empresariales y formativos.
      p.mb-5 Los diferentes tipos de SmartArt responden a necesidades específicas de representación visual. A continuación, se presentan sus principales aplicaciones y características:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procesos
                  p.mb-0 Los diagramas de procesos permiten representar secuencias de acciones o etapas de manera visual y lógica. En PowerPoint, los #[i SmartArt] de tipo proceso facilitan la explicación de flujos de trabajo, procedimientos operativos o metodologías, siendo ampliamente utilizados en contextos formativos y empresariales. El uso avanzado de estos diagramas implica seleccionar el diseño adecuado según el número de etapas, personalizar colores y tipografías, y garantizar que cada elemento represente una acción clara y concreta.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 3.
                    span Insertar gráfico SmartArt
                  figure
                    img(src='@/assets/curso/temas/img18.png', alt='Ventana de PowerPoint para insertar gráficos SmartArt con categorías de diagramas como procesos, jerarquías, ciclos, relaciones y estructuras visuales organizadas. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Jerarquías
                  p.mb-0 Los organigramas son representaciones visuales de estructuras jerárquicas, comunes en contextos organizacionales. PowerPoint ofrece diseños SmartArt específicos para este fin, permitiendo representar relaciones de dependencia, roles y niveles de responsabilidad. Un organigrama bien estructurado contribuye a la comprensión de la organización institucional y facilita la comunicación interna, especialmente en procesos de inducción, capacitación o presentación de equipos de trabajo.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 4.
                    span Jerarquía tipo organigrama
                  figure
                    img(src='@/assets/curso/temas/img19.png', alt='Diagrama SmartArt tipo organigrama con niveles jerárquicos, cargos organizacionales y relaciones de dependencia representadas mediante cuadros conectados. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ciclos
                  p.mb-0 Los diagramas de ciclos permiten representar procesos continuos o relaciones circulares. Su uso resulta especialmente útil para explicar modelos de mejora continua, procesos repetitivos o dinámicas que se desarrollan de manera permanente. Este tipo de representación favorece la comprensión de secuencias recurrentes y relaciones de retroalimentación dentro de un proceso.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 5.
                    span SmartArt en ciclos
                  figure
                    img(src='@/assets/curso/temas/img20.png', alt='Diagrama SmartArt circular con elementos conectados para representar procesos continuos, secuencias repetitivas y relaciones de retroalimentación. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Relaciones
                  p.mb-0 Los diagramas de relaciones se utilizan para representar conexiones, proporciones o interdependencias entre distintos elementos. Algunas composiciones permiten establecer relaciones entre ideas opuestas, complementarias o asociadas, según la necesidad comunicativa. Este tipo de estructura facilita la organización conceptual y fortalece la comprensión de vínculos entre contenidos dentro de presentaciones técnicas o académicas.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 6.
                    span SmartArt tipo relaciones
                  figure
                    img(src='@/assets/curso/temas/img21.png', alt='Diagrama SmartArt de relaciones con formas conectadas que representan vínculos, asociaciones e interdependencias entre conceptos o elementos informativos. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Imagen
                  p.mb-0 Las composiciones basadas en imágenes permiten integrar fotografías o recursos gráficos como apoyo conceptual. Generalmente, se utilizan de manera combinada con procesos, relaciones, pirámides o estructuras circulares para fortalecer la comunicación visual. La incorporación estratégica de imágenes favorece la asociación entre conceptos y mejora la recordación de la información presentada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img22.png', alt='').m-auto
      p.mb-5 A continuación, se presenta un video sobre la creación y manipulación de gráficos SmartArt en PowerPoint. Este recurso permite comprender cómo organizar información visual mediante diagramas, jerarquías, relaciones y procesos estructurados.
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/hcolYdSkQ-c?si=dsShgITSveUgWtuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Creación y manipulación de gráficos SmartArt en PowerPoint.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Herramientas externas para complementar presentaciones en PowerPoint
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El uso estratégico de herramientas externas basadas en la web permite enriquecer el diseño y fortalecer la calidad visual de las presentaciones elaboradas en Microsoft PowerPoint. Estos recursos complementarios facilitan la selección tipográfica, la incorporación de contenidos multimedia y la definición de esquemas cromáticos coherentes, contribuyendo a mejorar la identidad gráfica y el impacto comunicativo en contextos académicos, laborales y productivos.
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img24.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 La integración adecuada de estos recursos favorece presentaciones más organizadas, atractivas y alineadas con objetivos comunicativos específicos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img23.png', alt='').m-auto
      .caja-6.caja-6-1.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Google Fonts para la gestión tipográfica en presentaciones
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/img25.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 La tipografía cumple un papel determinante en la legibilidad, la jerarquía visual y la percepción profesional de una presentación. La selección adecuada de fuentes tipográficas permite orientar la atención del público, reforzar el mensaje y mantener coherencia visual en toda la composición gráfica. Por el contrario, una tipografía inadecuada puede afectar la comprensión del contenido y disminuir el impacto comunicativo del mensaje (Lidwell, Holden, & Butler, 2015).
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img26.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 Google Fonts es una plataforma de acceso libre que ofrece una amplia colección de fuentes tipográficas diseñadas para uso digital y editorial. Estas fuentes pueden descargarse e instalarse en el sistema operativo, permitiendo su posterior utilización en Microsoft PowerPoint sin afectar la compatibilidad del archivo. Desde una perspectiva técnica y comunicativa, se recomienda aplicar las siguientes prácticas:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/img27.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Seleccionar fuentes legibles
              p.mb-0.text-center Utilizar tipografías claras y de fácil lectura para cuerpos de texto y contenidos extensos.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/img28.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Jerarquizar mediante pesos tipográficos
              p.mb-0.text-center Emplear variaciones de grosor o peso para diferenciar títulos, subtítulos y contenido principal.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/img29.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Mantener coherencia tipográfica
              p.mb-0.text-center Conservar una misma familia tipográfica o combinaciones compatibles en toda la presentación.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/img30.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Verificar condiciones de uso
              p.mb-0.text-center Revisar periódicamente las políticas de licencia, aunque actualmente las fuentes de Google Fonts son de uso libre.
      .caja-8(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 Una vez instalada la fuente en Windows o en el sistema operativo de preferencia, PowerPoint la reconoce automáticamente, permitiendo su aplicación en diapositivas, plantillas maestras y temas personalizados. Cuando una presentación incorpora fuentes externas, es importante considerar que otros equipos pueden no tenerlas instaladas. Esto puede generar alteraciones visuales o reemplazos automáticos de tipografía al abrir el archivo en otra computadora.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/img31.png', alt='').m-auto
      p.mb-5 Para evitar inconvenientes de compatibilidad, PowerPoint permite incrustar las fuentes dentro del archivo antes de guardarlo. En sistemas operativos Windows, el procedimiento se realiza de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 7.
            span Pasos para garantizar que las fuentes utilizadas en la presentación queden incluidas dentro del archivo PowerPoint
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img32.png', alt='Secuencia de opciones de PowerPoint para incrustar fuentes tipográficas dentro del archivo mediante el menú Archivo, Opciones y configuración de guardado. ').m-auto
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Paso 1").ajuste-cajaAcordion
              p.mb-3 Con la presentación abierta, hacer clic en la pestaña #[b Archivo].
            .row(titulo="Paso 2").ajuste-cajaAcordion
              p.mb-3 Seleccionar la opción #[b Opciones].
            .row(titulo="Paso 3").ajuste-cajaAcordion
              p.mb-3 En la ventana emergente, seleccionar la categoría #[b Guardar].
            .row(titulo="Paso 4").ajuste-cajaAcordion
              p.mb-3 En la sección “Preservar la fidelidad al compartir esta presentación”, activar la casilla #[b Incrustar fuentes en el archivo].
            .row(titulo="Paso 5").ajuste-cajaAcordion
              p.mb-3 Hacer clic en #[b Aceptar] y guardar la presentación.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img33.png", alt="" ).m-auto
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img24.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 La aplicación de estas configuraciones permite conservar la integridad visual del diseño tipográfico y garantiza mayor estabilidad durante la proyección o distribución de la presentación en distintos dispositivos.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Pixabay para imágenes y recursos multimedia
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Los recursos visuales y multimedia cumplen un papel fundamental en la comunicación de ideas dentro de presentaciones profesionales. Su uso adecuado permite reforzar conceptos, contextualizar información y reducir la carga cognitiva del público. Sin embargo, la incorporación incorrecta de imágenes o elementos audiovisuales puede generar problemas legales y afectar la credibilidad del contenido. Por esta razón, resulta indispensable utilizar bancos de recursos confiables y con condiciones de uso claramente definidas.
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 Pixabay es una plataforma que ofrece imágenes, ilustraciones, íconos, videos y música libres de derechos, aptos para contextos académicos y profesionales. Los recursos descargados pueden integrarse directamente en PowerPoint como apoyo visual o multimedia dentro de las diapositivas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img34.png', alt='').m-auto
      p.mb-5 Para garantizar coherencia visual y calidad gráfica en la presentación, se recomienda aplicar las siguientes prácticas:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/img36.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Seleccionar imágenes coherentes con el mensaje
              p.mb-0.text-center Utilizar recursos visuales alineados con el tema y el propósito comunicativo de la diapositiva.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Mantener uniformidad visual
              p.mb-0.text-center Conservar estilos gráficos similares en fotografías, ilustraciones e íconos para evitar inconsistencias visuales.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/img38.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Ajustar tamaño y proporción
              p.mb-0.text-center Adaptar correctamente las dimensiones de las imágenes dentro de PowerPoint para evitar deformaciones o pérdida de calidad.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/img39.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Evitar saturación visual
              p.mb-0.text-center Limitar la cantidad de elementos gráficos en cada diapositiva para conservar claridad y equilibrio visual.
      .row.justify-content-center.mb-5
        .col-xl-8
          p.text-center Pixabay facilita la búsqueda mediante palabras clave, orientación, tipo de recurso y estilo gráfico, optimizando el proceso de selección y fortaleciendo la calidad visual de las presentaciones.
      .caja-6.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Herramientas para análisis de color
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img40.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El color influye directamente en la percepción visual, la jerarquía de la información y la identidad gráfica de una presentación. Una paleta cromática bien definida mejora la legibilidad, fortalece la coherencia visual y favorece la transmisión efectiva del mensaje. Por el contrario, el uso inadecuado del color puede generar distracción o dificultar la comprensión del contenido (Lidwell, Holden, & Butler, 2015).
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img50.svg', alt='' style="width: 90px").m-auto
        .col-xl
          p.mb-0 Existen plataformas especializadas que permiten analizar colores presentes en imágenes y generar combinaciones cromáticas armónicas listas para aplicar en PowerPoint. Estas herramientas facilitan la creación de esquemas visuales consistentes y alineados con objetivos comunicativos específicos. A continuación, se presentan algunas de las plataformas más utilizadas:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Adobe Color")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/img41.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Adobe Color
              p.mb-0 Permite extraer paletas cromáticas a partir de imágenes y exportar valores HEX y RGB para su aplicación en presentaciones.
        .py-3.py-md-4(titulo="Coolors")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/img42.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Coolors
              p.mb-0 Genera combinaciones de colores armónicas y facilita la exportación de códigos cromáticos para diseño digital.
        .py-3.py-md-4(titulo="Image Color Picker")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/img43.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Image Color Picker
              p.mb-0 Analiza imágenes y permite identificar colores predominantes mediante códigos HEX y RGB.
      p.mb-5 El uso de estas plataformas facilita la definición de paletas cromáticas coherentes que posteriormente pueden configurarse como colores de tema dentro de PowerPoint, garantizando uniformidad visual en todas las diapositivas.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 8.
            span Uso de la herramienta Adobe Color para generar paletas cromáticas a partir de una imagen
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img44.png', alt='Interfaz de Adobe Color con una imagen de referencia y una paleta cromática generada automáticamente mediante análisis de colores predominantes. ').m-auto
      .caja-9.mb-5(data-aos="fade-right")   
        h4.mb-0 Aplicación de paletas de color en PowerPoint 
      p.mb-5 Una vez obtenidos los valores cromáticos en formatos HEX o RGB, estos pueden incorporarse en PowerPoint mediante la personalización de temas y colores predeterminados. Esta práctica facilita mantener consistencia visual y optimizar la identidad gráfica de las presentaciones. 
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 9.
            span Opciones de colores en PowerPoint
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img45.png', alt='Panel de configuración de colores en PowerPoint con herramientas para seleccionar, personalizar y aplicar colores de tema en diapositivas y elementos gráficos. ').m-auto
      p.mb-5.text-center La aplicación estratégica de paletas cromáticas permite alcanzar diferentes objetivos comunicativos y visuales:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/img46.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Coherencia visual
              p.mb-0.text-center Mantiene uniformidad gráfica entre diapositivas y fortalece la identidad visual del contenido.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/img46.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Identidad corporativa
              p.mb-0.text-center Facilita el uso consistente de colores institucionales o de marca.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/img46.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Reutilización de esquemas cromáticos
              p.mb-0.text-center Permite aplicar la misma configuración visual en múltiples presentaciones.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/img46.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Accesibilidad y legibilidad
              p.mb-0.text-center Favorece el contraste adecuado entre fondo y texto para mejorar la lectura del contenido.
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img24.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 Desde una perspectiva profesional, se recomienda utilizar un número reducido de colores y verificar siempre los niveles de contraste para asegurar accesibilidad y claridad visual.
      p.mb-5 A continuación, se presenta un video sobre herramientas web externas aplicadas en PowerPoint. Este recurso permite comprender cómo integrar tipografías, imágenes y paletas cromáticas para fortalecer la calidad visual de las presentaciones.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/EtBGReQxGgA?si=QRRQIdielw4TfnMz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Recursos web externos para usar en PowerPoint.
      .caja-6.caja-6-1.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
        .col
          h3 Uso responsable de recursos externos en presentaciones
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.mb-4(data-aos="fade-right")
            p.mb-0 El uso de herramientas externas implica una responsabilidad ética y técnica dentro de la producción de contenidos digitales. Por esta razón, resulta fundamental verificar licencias de uso, respetar los derechos de autor y evaluar la pertinencia de cada recurso según el objetivo comunicativo de la presentación.
          .row.align-items-center
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img50.svg', alt='' style="width: 90px").m-auto
            .col-xl
              p.mb-0 La selección consciente de tipografías, imágenes, recursos multimedia y esquemas cromáticos contribuye a fortalecer la calidad del producto final y proyecta profesionalismo en contextos académicos, formativos y laborales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img47.png', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema1',
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
