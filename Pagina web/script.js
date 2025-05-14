// Datos de preguntas y respuestas
const faqData = {
    1: {
        question: "¿El autismo es hereditario?",
        answer: "Existe un componente genético en el autismo, pero no es el único factor. Los estudios muestran que si un gemelo idéntico tiene autismo, hay un 60-90% de probabilidad de que el otro también lo tenga. En gemelos no idénticos y hermanos, la probabilidad es menor (5-20%). Sin embargo, también influyen factores ambientales que aún se están investigando."
    },
    2: {
        question: "¿A qué edad se puede diagnosticar el autismo?",
        answer: "Generalmente se puede diagnosticar a partir de los 18-24 meses, aunque algunos signos pueden observarse incluso antes. Muchos niños reciben un diagnóstico definitivo alrededor de los 2-3 años. Sin embargo, en casos más leves o con características menos evidentes, el diagnóstico puede darse más tarde, incluso en la adolescencia o adultez."
    },
    3: {
        question: "¿El autismo tiene cura?",
        answer: "El autismo no es una enfermedad, por lo que no requiere 'cura'. Es una condición neurológica que dura toda la vida. Sin embargo, con las terapias y apoyos adecuados, las personas con autismo pueden desarrollar habilidades, aprender estrategias para manejar desafíos y llevar vidas plenas y significativas. La intervención temprana es clave para maximizar el potencial de cada individuo."
    },
    4: {
        question: "¿Las vacunas causan autismo?",
        answer: "No, múltiples estudios científicos han demostrado que no hay relación entre las vacunas y el autismo. Este mito surgió de un estudio fraudulento publicado en 1998 que ha sido completamente desacreditado. La comunidad médica y científica mundial coincide en que las vacunas son seguras y no causan autismo. No vacunar a los niños pone en riesgo su salud y la de los demás."
    },
    5: {
        question: "¿Todos los niños con autismo tienen habilidades especiales?",
        answer: "No, aunque algunas personas con autismo pueden tener talentos excepcionales (lo que se conoce como 'savant'), esto solo ocurre en aproximadamente el 10% de los casos. Cada persona con autismo tiene un conjunto único de fortalezas y desafíos. Es importante reconocer y fomentar las habilidades individuales sin asumir que todos tendrán capacidades extraordinarias en áreas específicas."
    },
    6: {
        question: "¿Cómo puedo ayudar a un niño con autismo?",
        answer: "Lo más importante es ser paciente, comprensivo y buscar información de calidad. Algunas formas de ayudar incluyen: aprender sobre sus intereses y formas de comunicación, crear un ambiente estructurado y predecible, usar un lenguaje claro y directo, respetar sus necesidades sensoriales, y celebrar sus logros por pequeños que sean. También es crucial apoyar a las familias y promover la inclusión en todos los ámbitos."
    },
    7: {
        question: "¿El autismo es más común en niños que en niñas?",
        answer: "Sí, el autismo se diagnostica aproximadamente 4 veces más en niños que en niñas. Sin embargo, investigaciones recientes sugieren que el autismo en niñas puede estar subdiagnosticado, ya que muchas veces presentan características diferentes o aprenden a enmascarar sus dificultades mejor que los niños. Las niñas con autismo pueden tener intereses más 'típicos' y habilidades sociales más desarrolladas, lo que hace que pasen más desapercibidas."
    },
    8: {
        question: "¿Puede una persona con autismo llevar una vida independiente?",
        answer: "Depende del grado de afectación, pero muchos adultos con autismo logran llevar vidas independientes o semi-independientes con los apoyos adecuados. Algunas personas con autismo de alto funcionamiento pueden vivir por su cuenta, trabajar y formar familias. Otras pueden necesitar apoyo continuo para actividades diarias. La clave está en proporcionar las herramientas y habilidades necesarias desde la infancia y adaptar los apoyos a cada etapa de la vida."
    },
    9: {
        question: "¿Qué causa el autismo?",
        answer: "No hay una sola causa conocida, pero se cree que es una combinación de factores genéticos y ambientales que afectan el desarrollo cerebral. Los estudios sugieren que ciertos genes pueden aumentar la predisposición, mientras que factores como la edad avanzada de los padres o complicaciones durante el embarazo podrían influir. Es importante destacar que el autismo NO es causado por vacunas, mala crianza o factores emocionales, como erróneamente se creía en el pasado."
    },
    10: {
        question: "¿Cómo afecta el autismo el aprendizaje?",
        answer: "El autismo puede afectar el procesamiento de información y la forma de aprender. Muchas personas con TEA aprenden mejor con información visual, rutinas estructuradas y enfoques concretos. Pueden tener dificultades con conceptos abstractos, generalización de habilidades o aprendizaje incidental. Sin embargo, con estrategias educativas adecuadas (como TEACCH, ABA u otros enfoques individualizados), pueden alcanzar excelentes resultados académicos y desarrollar todo su potencial."
    },
    11: {
        question: "¿Existen medicamentos para el autismo?",
        answer: "No hay medicamentos que curen el autismo, pero algunos pueden ayudar a manejar síntomas específicos o condiciones asociadas. Por ejemplo, se pueden usar medicamentos para tratar ansiedad, TDAH, problemas de sueño o comportamientos autoagresivos. Cualquier tratamiento farmacológico debe ser cuidadosamente evaluado y monitoreado por un psiquiatra especializado, y siempre debe combinarse con intervenciones terapéuticas y educativas."
    },
    12: {
        question: "¿El autismo empeora con la edad?",
        answer: "El autismo es una condición de por vida, pero con apoyo adecuado, muchas personas muestran mejoras significativas en sus habilidades con el tiempo. Algunos desafíos pueden hacerse más evidentes en la adolescencia o adultez debido a mayores demandas sociales, pero esto no significa que el autismo empeore. La clave está en proporcionar apoyos continuos y adaptados a cada etapa del desarrollo. Muchos adultos con autismo desarrollan estrategias efectivas para manejar sus dificultades."
    },
    13: {
        question: "¿Cómo se diagnostica el autismo?",
        answer: "No hay pruebas médicas, el diagnóstico se basa en observación del comportamiento y desarrollo. Un equipo multidisciplinario (psiquiatras, psicólogos, neurólogos) evalúa habilidades sociales, comunicación y patrones de comportamiento usando herramientas estandarizadas como ADOS o ADI-R. El proceso incluye entrevistas con padres, observación directa y a veces evaluaciones adicionales. Un diagnóstico temprano y preciso es crucial para acceder a intervenciones adecuadas."
    },
    14: {
        question: "¿Puede una persona con autismo tener amigos?",
        answer: "Sí, aunque pueden tener dificultades con las habilidades sociales, muchas personas con autismo forman amistades significativas. Las amistades pueden verse diferentes - tal vez menos numerosas pero más profundas. Algunos prefieren interactuar uno a uno en lugar de en grupos, o comunicarse de maneras no tradicionales. Con apoyo para entender señales sociales y oportunidades para conocer personas con intereses similares, pueden desarrollar relaciones satisfactorias."
    },
    15: {
        question: "¿Qué es el meltdown en el autismo?",
        answer: "Es una respuesta intensa a situaciones abrumadoras que puede incluir llanto, gritos, agitación o retraimiento. No es un berrinche, sino una reacción involuntaria ante sobrecarga sensorial, emocional o cognitiva. Ocurre cuando la persona se siente abrumada y no puede regular sus emociones. La mejor estrategia es prevenir identificando desencadenantes, y durante un meltdown, proporcionar un espacio seguro y calmado sin regaños, hasta que la persona se recupere."
    },
    16: {
        question: "¿El autismo es una discapacidad intelectual?",
        answer: "No necesariamente, aunque algunas personas con autismo pueden tener discapacidad intelectual concurrente. El autismo y la discapacidad intelectual son condiciones distintas que a veces coexisten. Muchas personas con TEA tienen inteligencia promedio o superior, pero pueden tener perfiles cognitivos desiguales (fortalezas y debilidades marcadas). Es importante evaluar cada caso individualmente y no asumir limitaciones basadas solo en el diagnóstico de autismo."
    }
};

// Cambiar entre vistas
const navButtons = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones y vistas
        navButtons.forEach(btn => btn.classList.remove('active'));
        views.forEach(view => view.classList.remove('active'));
        
        // Añadir clase active al botón clickeado
        button.classList.add('active');
        
        // Mostrar la vista correspondiente
        const viewId = button.getAttribute('data-view') + '-view';
        document.getElementById(viewId).classList.add('active');
    });
});

// Modal de preguntas frecuentes
const faqItems = document.querySelectorAll('.faq-item');
const questionModal = document.getElementById('question-modal');
const closeModal = document.getElementById('close-modal');
const modalContent = document.getElementById('modal-question-content');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const questionId = item.getAttribute('data-question');
        const questionData = faqData[questionId];
        
        modalContent.innerHTML = `
            <div class="modal-question">${questionData.question}</div>
            <div class="modal-answer">${questionData.answer}</div>
        `;
        
        questionModal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    questionModal.style.display = 'none';
});

// Modal para nueva pregunta
const addQuestionBtn = document.getElementById('add-question-btn');
const newQuestionModal = document.getElementById('new-question-modal');
const closeNewModal = document.getElementById('close-new-modal');

addQuestionBtn.addEventListener('click', () => {
    newQuestionModal.style.display = 'flex';
});

closeNewModal.addEventListener('click', () => {
    newQuestionModal.style.display = 'none';
});

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === questionModal) {
        questionModal.style.display = 'none';
    }
    if (e.target === newQuestionModal) {
        newQuestionModal.style.display = 'none';
    }
});

// Envío de nueva pregunta
const submitBtn = document.querySelector('.submit-btn');
const questionTextarea = document.querySelector('textarea');

submitBtn.addEventListener('click', () => {
    const question = questionTextarea.value.trim();
    if (question) {
        alert('Gracias por tu pregunta. Nuestro equipo la revisará y la agregará al listado si es apropiada.');
        questionTextarea.value = '';
        newQuestionModal.style.display = 'none';
    } else {
        alert('Por favor escribe tu pregunta antes de enviar.');
    }
});