export default {
  global: {
    Name: 'Enriquecimiento visual, animaciones y preparación de presentaciones profesionales en Microsoft PowerPoint',
    Description:
      'Este componente formativo profundiza en el uso de herramientas avanzadas de Microsoft PowerPoint para enriquecer presentaciones mediante elementos gráficos, tablas, diagramas, animaciones, transiciones y recursos multimedia, así como en la preparación y uso compartido de presentaciones en entornos colaborativos. Su desarrollo permite fortalecer competencias digitales orientadas a la creación de presentaciones profesionales de alto impacto visual, alineadas con las exigencias del entorno académico, laboral y productivo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Uso de herramientas complementarias en Microsoft PowerPoint',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tablas para la organización de información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas de edición y formato',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'SmartArt como herramienta de representación conceptual y estructural',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Herramientas externas para complementar presentaciones en PowerPoint',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Integración de elementos multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Animaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Inserción de videos y audios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Optimización y compatibilidad de los elementos multimedia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Complementos en PowerPoint: maximizando su funcionalidad',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'La inteligencia artificial en la creación de presentaciones',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Preparación de la presentación para la exposición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Las transiciones como recurso narrativo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Interactividad y navegación no lineal',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Accesibilidad y estándares de diseño universal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Comprobador de accesibilidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Texto alternativo (<em>Alt Text</em>) y descripciones',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Contraste y tipografía inclusiva',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/21720198_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Animaciones',
      significado:
        'Mecanismos de apoyo a la narrativa visual que permiten controlar la forma en que los elementos aparecen o desaparecen, facilitando la secuenciación de la información.',
    },
    {
      termino: 'Códec',
      significado:
        'Factor técnico crítico que determina la compatibilidad de los archivos de video y audio; una gestión inadecuada de este puede causar que los medios se detengan durante la presentación.',
    },
    {
      termino: 'Complementos',
      significado:
        'Programas suplementarios que se instalan dentro de PowerPoint para añadir comandos especializados, como conexiones con bancos de imágenes o sistemas de interacción.',
    },
    {
      termino: 'Comprobador de accesibilidad',
      significado:
        'Función de auditoría interna que analiza la presentación en tiempo real para identificar barreras que dificulten la lectura mediante tecnologías de asistencia.',
    },
    {
      termino: 'Desencadenadores (Triggers)',
      significado:
        'Técnica avanzada que permite que una animación se ejecute únicamente al hacer clic en un objeto específico, esencial para crear menús interactivos o cuadros de mando.',
    },
    {
      termino: 'Herramientas nativas',
      significado:
        'Conjunto de comandos y funciones que vienen integrados por defecto dentro del software, a diferencia de las funciones adicionales que se obtienen mediante programas suplementarios.',
    },
    {
      termino: 'Licencia Creative Commons',
      significado:
        'Modelo de permiso legal, como la Creative Commons Zero (CC0), que permite el uso gratuito de fotografías y videos de alta resolución sin infringir derechos de autor.',
    },
    {
      termino: 'Sincronización de tiempos',
      significado:
        'Gestión de las variables de inicio, al hacer clic, con la anterior o después de la anterior, y duración que definen la fluidez y profesionalidad de la narrativa visual.',
    },
    {
      termino: 'SmartArt',
      significado:
        'Herramienta diseñada para transformar mensajes y datos complejos en representaciones visuales que mejoran la percepción de las ideas y reducen la carga cognitiva del receptor.',
    },
    {
      termino: 'Texto alternativo (Alt Text)',
      significado:
        'Descripción funcional subyacente en elementos visuales que permite a un software lector de pantalla describir el contenido a usuarios con discapacidad visual.',
    },
    {
      termino: 'Transiciones',
      significado:
        'Recursos narrativos que actúan como conectores lógicos entre diapositivas, cuya función principal es proporcionar continuidad al discurso y ritmo a la exposición.',
    },
    {
      termino: 'Zoom de resumen',
      significado:
        'Herramienta de navegación que genera una diapositiva de aterrizaje con miniaturas, funcionando como un índice visual para desplazarse de forma no lineal por la presentación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cenci, V. (2026, febrero). Diseño gráfico y neurociencia: El efecto de los elementos visuales en los procesos cerebrales. ResearchGate.',
      link: 'https://doi.org/10.13140/RG.2.2.17085.93922',
    },
    {
      referencia:
        'Centro de Escritura Javeriano. (2022). Guía para el diseño de ayudas visuales. Pontificia Universidad Javeriana Cali.',
      link: 'https://www.javerianacali.edu.co/sites/default/files/2022-06/Gui%CC%81a%20para%20el%20disen%CC%83o%20de%20ayudas%20visuales.pdf',
    },
    {
      referencia:
        'Instituto Tecnológico del Cantábrico. (2015). Presentaciones eficaces.',
      link: 'https://www.xuliocs.com/PDF/arte-presentaciones-manual-uc-uni-cantabria.pdf',
    },
    {
      referencia:
        'Lidwell, W., Holden, K., & Butler, J. (2015). Principios universales del diseño: Revisados y actualizados. Rockport Publishers.',
      link: 'https://books.google.com.co/books/about/Universal_Principles_of_Design_Revised_a.html?id=l0QPECGQySYC&redir_esc=y',
    },
    {
      referencia:
        'Microsoft Corporation. (2024). Guía de inicio rápido de PowerPoint. Soporte técnico de Microsoft.',
      link: 'https://support.microsoft.com/es-es/powerpoint',
    },
    {
      referencia:
        'Velasco, J. (2020). Comunicación visual y presentaciones de alto impacto. Business School Press.',
      link: 'https://www.larousse.es/primer_capitulo/presentaciones-de-impacto.pdf',
    },
    {
      referencia:
        'W3C. (2025, mayo 6). Pautas de accesibilidad al contenido web (WCAG) 2.1.',
      link: 'https://www.w3.org/TR/WCAG21/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Germán Adolfo Rodríguez Pulido',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios -  Regional Risaralda',
        },
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validadora de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
