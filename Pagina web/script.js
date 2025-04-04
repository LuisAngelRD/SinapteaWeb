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