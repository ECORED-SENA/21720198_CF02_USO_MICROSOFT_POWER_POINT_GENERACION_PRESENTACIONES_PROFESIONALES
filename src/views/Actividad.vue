<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión y aplicación de los conceptos relacionados con el uso del entorno de Microsoft PowerPoint, la gestión estructural de presentaciones, el diseño básico y la organización de archivos, mediante preguntas conceptuales y casos de uso asociados a contextos académicos y productivos.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la herramienta <em>SmartArt</em> en una presentación profesional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar cálculos matemáticos complejos sobre datos estadísticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Transformar mensajes y datos en representaciones visuales comprensibles para mejorar la percepción de las ideas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Editar videos de larga duración insertados desde archivos locales o plataformas web externas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Generar automáticamente paletas de colores basadas en la psicología del color para entornos corporativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Para garantizar que una tipografía especial instalada en su equipo se visualice correctamente al compartir el archivo con otro usuario, usted debe:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrustar las fuentes dentro del archivo desde las opciones de guardado de PowerPoint.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Guardar la presentación únicamente en formato de imagen para evitar que el texto se mueva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar solo fuentes del sistema operativo Windows para garantizar compatibilidad absoluta en cualquier dispositivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enviar la fuente por correo electrónico por separado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Al configurar una secuencia automática de animaciones, ¿qué desencadenador lógico permite que un elemento aparezca inmediatamente después de que termine la animación anterior?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al hacer clic.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Con la anterior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Al pasar el mouse.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Después de la anterior.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué categoría de animación es la más adecuada para resaltar un dato estadístico específico que ya se encuentra visible en la diapositiva?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entrada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Salida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Énfasis.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Trayectorias de movimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'En términos de diseño de tablas profesionales, una de las recomendaciones clave para reducir la carga cognitiva del receptor es:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mostrar únicamente la información relevante y eliminar el "ruido gráfico" innecesario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Utilizar la mayor cantidad de colores posibles en cada celda para captar la atención del público.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incluir todos los datos disponibles del informe original para que la audiencia tenga el contexto completo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar bordes gruesos y oscuros a todas las celdas para definir claramente la estructura de la tabla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué herramienta externa es recomendada por las fuentes para analizar imágenes y generar paletas cromáticas armónicas mediante códigos HEX o RGB?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pixabay.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Google Fonts.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Adobe Color.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pexels.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Las transiciones en una presentación profesional deben ser vistas principalmente como:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Efectos decorativos para entretener a la audiencia durante el cambio de tema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una forma de demostrar el dominio técnico avanzado de todas las funciones llamativas del software.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Recursos narrativos que proporcionan continuidad al discurso y conectan ideas lógicamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Herramientas para ocultar errores de diseño en las diapositivas mediante movimientos rápidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el rango de duración recomendado para una transición profesional para que no resulte ni agresiva ni lenta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entre 0.50 y 1.25 segundos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Entre 2.0 y 5.0 segundos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Menos de 0.25 segundos para máxima velocidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exactamente 3.0 segundos para mantener un ritmo pausado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La herramienta "Comprobador de Accesibilidad" tiene como objetivo:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar que la presentación no tenga virus antes de ser enviada por correo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar barreras que dificulten la lectura para personas que utilizan tecnologías de asistencia, como lectores de pantalla.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Asegurar que el tamaño del archivo sea lo suficientemente pequeño para conexiones lentas de internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisar la ortografía y gramática en diferentes idiomas de forma simultánea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Para qué sirve el "Texto Alternativo" (Alt Text) en los elementos visuales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para que aparezca un subtítulo decorativo debajo de cada imagen durante la exposición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para mejorar el posicionamiento de la presentación en buscadores de internet como Google.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para que un software lector de pantalla describa el contenido de una imagen a un usuario con discapacidad visual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para ocultar notas del orador que no deben ser vistas por la audiencia presencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué ventaja ofrece el uso del complemento Pexels dentro de PowerPoint?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Otorga acceso directo a miles de fotografías de stock de alta resolución y videos gratuitos bajo licencia CC0.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permite editar el código fuente de la aplicación para añadir funciones personalizadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Traduce automáticamente el contenido de las diapositivas a más de 50 idiomas diferentes en tiempo real.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comprime automáticamente todos los archivos multimedia a calidad estándar de 480p sin preguntar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Según el componente formativo, un riesgo importante del uso excesivo de la Inteligencia Artificial en la creación de presentaciones es:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el software de PowerPoint se vuelva demasiado pesado para computadoras antiguas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La falta de originalidad y la posible inclusión de datos incorrectos o sesgos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que las imágenes generadas por IA no tengan la resolución suficiente para pantallas grandes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La incompatibilidad de los archivos generados con versiones anteriores de Microsoft Office.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la configuración de compresión de medios ideal para una presentación que se enviará por correo electrónico o mediante conexiones lentas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Full HD (1080p).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'HD (720p).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estándar (480p).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calidad de impresión (Ultra HD).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'La función "Zoom de resumen" permite al presentador:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Acercar el texto de una diapositiva para que las personas en las últimas filas lean mejor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ampliar la imagen del orador si se está utilizando una cámara web durante una reunión virtual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar automáticamente los píxeles de una imagen para mejorar su nitidez.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Crear una diapositiva de aterrizaje que actúa como un índice visual para navegar por secciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué tipografía es preferible para facilitar la lectura a personas con dislexia en presentaciones inclusivas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fuentes sin remates (Sans Serif) como Calibri, Arial o Verdana.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fuentes con remates (Serif) como Times New Roman.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fuentes de estilo caligráfico para mayor elegancia en entornos académicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fuentes decorativas con sombras y relieves para resaltar títulos importantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Usted va a presentar un informe financiero anual en un auditorio equipado con pantallas 4K de gran formato. El archivo contiene videos pesados de demostración. ¿Qué acción técnica debería priorizar para asegurar el mejor balance entre rendimiento y calidad visual?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Configurar todas las animaciones como "llamativas" para impresionar al público con el poder de procesamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Vincular los videos a YouTube para no aumentar el peso del archivo local de la presentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incrustar los videos y utilizar la herramienta de compresión de medios en calidad Full HD (1080p) para garantizar nitidez sin perder autonomía.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Usar transiciones de "Contenido Dinámico" en todas las diapositivas para que el fondo se mantenga estático.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'En un stand de una feria, usted necesita que los visitantes puedan elegir qué productos ver en una pantalla táctil sin seguir un orden fijo. ¿Cuál es la estrategia técnica más efectiva?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Crear una diapositiva muy larga con todos los productos y usar la barra de desplazamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Configurar el avance de diapositivas en modo automático "Después de 5 segundos" para que rote todo el contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Usar animaciones de "Trayectorias de movimiento" para que los productos vuelen por la pantalla constantemente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Implementar botones de acción e hipervínculos internos o utilizar la herramienta Zoom de diapositiva para permitir una navegación autónoma.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Usted tiene una diapositiva donde debe explicar cinco conceptos complejos. Para no saturar al espectador, decide que cada concepto aparezca, se explique y luego desaparezca para dar espacio al siguiente sin cambiar de diapositiva. ¿Qué combinación de animaciones debe usar?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo animaciones de Énfasis con desencadenadores al hacer clic.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Animaciones de Entrada configuradas "Con la anterior" para que todo salga al mismo tiempo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una secuencia lógica de animaciones de Entrada para introducir el concepto y animaciones de Salida para despejar el área antes del siguiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Usar transiciones de tipo "Fractura" entre cada concepto para separar las ideas visualmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Le han entregado el logotipo de una empresa y le piden que toda la presentación sea coherente con esos colores. Sin embargo, usted no sabe los valores exactos de esos colores. ¿Cuál es el procedimiento profesional a seguir?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elegir los colores a ojo desde la paleta estándar de PowerPoint que más se parezcan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utilizar herramientas como el cuentagotas de PowerPoint o Adobe Color para extraer los códigos HEX/RGB del logotipo y configurarlos como colores del tema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Descargar una plantilla prediseñada de la IA de PowerPoint y esperar que combine con el logo por azar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar una escala de grises para toda la presentación y así evitar conflictos con los colores de la marca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Usted está diseñando una presentación que será publicada en un sitio web gubernamental y debe cumplir con estándares de inclusión. Al revisar su diseño, nota que ha usado una imagen decorativa que no aporta información al mensaje. ¿Cómo debe tratar este elemento según el DUA?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Escribir una descripción detallada de la imagen en el Texto Alternativo para que todos sepan cómo es.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar la imagen inmediatamente, ya que las presentaciones accesibles no pueden tener elementos estéticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumentar el contraste de la imagen para que las personas con daltonismo puedan verla mejor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Marcar el objeto como "decorativo" en el panel de Texto Alternativo para que el lector de pantalla lo ignore y no sature al usuario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
