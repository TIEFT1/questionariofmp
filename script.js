document.addEventListener('DOMContentLoaded', () => {
    // Particles.js configuration
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#2a4365" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#4299e1", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" }
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            }
        });
    }

    // Quiz questions about Faculdade Municipal de Palhoça
    const questions = [
        {
            question: "Em que ano foi fundada a Faculdade Municipal de Palhoça (FMP)?",
            options: ["2005", "2010", "2015", "2020"],
            answer: "2010"
        },
        {
            question: "Qual é o tipo de instituição da Faculdade Municipal de Palhoça?",
            options: ["Federal", "Estadual", "Municipal", "Privada"],
            answer: "Municipal"
        },
        {
            question: "Quantos cursos de graduação a FMP oferece atualmente?",
            options: ["3", "5", "7", "10"],
            answer: "5"
        },
        {
            question: "Qual destes cursos NÃO é oferecido pela FMP?",
            options: ["Administração", "Ciências Contábeis", "Engenharia Civil", "Pedagogia"],
            answer: "Engenharia Civil"
        },
        {
            question: "Qual é o lema da Faculdade Municipal de Palhoça?",
            options: ["Educação para todos", "Conhecimento que transforma", "Excelência acadêmica", "A FMP não possui um lema oficial"],
            answer: "Conhecimento que transforma"
        },
        {
            question: "Qual é a carga horária mínima para os cursos de graduação na FMP?",
            options: ["2.400 horas", "2.800 horas", "3.200 horas", "3.600 horas"],
            answer: "2.800 horas"
        },
        {
            question: "A FMP oferece algum programa de bolsas de estudo?",
            options: ["Sim, para todos os alunos", "Sim, através de programas específicos", "Não, por ser uma instituição municipal", "Apenas para pós-graduação"],
            answer: "Sim, através de programas específicos"
        },
        {
            question: "Qual destes é um projeto de extensão da FMP?",
            options: ["FMP na Comunidade", "Palhoça Educa", "Saberes Compartilhados", "Todos os mencionados"],
            answer: "Todos os mencionados"
        },
        {
            question: "Como é o processo seletivo para ingresso na FMP?",
            options: ["Vestibular tradicional", "ENEM", "Análise de histórico escolar", "Depende do curso"],
            answer: "ENEM"
        },
        {
            question: "Qual é a duração média dos cursos de graduação na FMP?",
            options: ["2 anos", "3 anos", "4 anos", "5 anos"],
            answer: "4 anos"
        },
        {
            question: "A FMP possui parcerias com instituições internacionais?",
            options: ["Sim, com várias instituições", "Sim, mas apenas na América do Sul", "Não, por ser uma instituição municipal", "Apenas para pesquisa"],
            answer: "Sim, com várias instituições"
        },
        {
            question: "Qual é o nome da biblioteca da FMP?",
            options: ["Biblioteca Municipal de Palhoça", "Biblioteca Acadêmica da FMP", "Biblioteca Professor José da Silva", "A FMP não tem biblioteca própria"],
            answer: "Biblioteca Professor José da Silva"
        },
        {
            question: "A FMP oferece cursos na modalidade EAD?",
            options: ["Sim, para todos os cursos", "Sim, para alguns cursos", "Não, apenas presencial", "Está em implementação"],
            answer: "Sim, para alguns cursos"
        },
        {
            question: "Qual é o órgão máximo de deliberação da FMP?",
            options: ["Conselho Universitário", "Conselho Diretor", "Conselho Superior", "Assembleia Geral"],
            answer: "Conselho Superior"
        },
        {
            question: "Quantos campi a FMP possui?",
            options: ["1", "2", "3", "4"],
            answer: "1"
        },
        {
            question: "Qual é a área de atuação principal da FMP?",
            options: ["Tecnologia", "Ciências Humanas", "Saúde", "Ciências Sociais Aplicadas"],
            answer: "Ciências Sociais Aplicadas"
        },
        {
            question: "A FMP possui algum programa de intercâmbio?",
            options: ["Sim, o FMP no Mundo", "Sim, o Palhoça Global", "Não, por ser uma instituição municipal", "Apenas para professores"],
            answer: "Sim, o FMP no Mundo"
        },
        {
            question: "Qual é o período letivo da FMP?",
            options: ["Anual", "Semestral", "Trimestral", "Quadrimestral"],
            answer: "Semestral"
        },
        {
            question: "A FMP oferece cursos de pós-graduação?",
            options: ["Sim, vários", "Sim, mas apenas MBA", "Não, apenas graduação", "Está em planejamento"],
            answer: "Sim, vários"
        },
        {
            question: "Qual é o nome do jornal acadêmico da FMP?",
            options: ["FMP Notícias", "Palhoça Acadêmica", "Voz da Faculdade", "A FMP não possui jornal acadêmico"],
            answer: "Voz da Faculdade"
        },
        {
            question: "A FMP possui laboratórios específicos para cada curso?",
            options: ["Sim, totalmente equipados", "Apenas laboratórios gerais", "Depende do curso", "Não possui laboratórios"],
            answer: "Sim, totalmente equipados"
        },
        {
            question: "Qual é o sistema de avaliação utilizado na FMP?",
            options: ["Notas de 0 a 10", "Conceitos (A, B, C, D)", "Aprovação/Reprovação", "Misto (notas e conceitos)"],
            answer: "Notas de 0 a 10"
        },
        {
            question: "A FMP possui programa de estágio supervisionado?",
            options: ["Sim, obrigatório", "Sim, opcional", "Não, os alunos buscam por conta", "Apenas para alguns cursos"],
            answer: "Sim, obrigatório"
        },
        {
            question: "Qual é o horário de funcionamento da FMP?",
            options: ["Manhã e tarde", "Tarde e noite", "Manhã, tarde e noite", "Varia por curso"],
            answer: "Manhã, tarde e noite"
        },
        {
            question: "A FMP possui algum programa de incentivo à pesquisa?",
            options: ["Sim, o PIP (Programa de Iniciação à Pesquisa)", "Sim, mas apenas para pós-graduação", "Não, por ser uma faculdade municipal", "Apenas bolsas externas"],
            answer: "Sim, o PIP (Programa de Iniciação à Pesquisa)"
        }
    ];

    // DOM Elements
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const restartBtn = document.getElementById('restart-btn');
    const quizContainer = document.querySelector('.quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.getElementById('progress-text');
    const scorePercent = document.getElementById('score-percent');
    const scoreCorrect = document.getElementById('score-correct');
    const scoreTotal = document.getElementById('score-total');
    const scoreMessage = document.getElementById('score-message');
    const progressCircle = document.querySelector('.progress-ring__circle');
    const socialIcons = document.querySelectorAll('.social-icon');

    // Quiz state
    let currentQuestionIndex = 0;
    let userAnswers = Array(questions.length).fill(null);
    let quizCompleted = false;

    // Initialize quiz
    function initQuiz() {
        showQuestion();
        updateProgress();
        setupEventListeners();
        animateSocialIcons();
    }

    // Show current question
    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            if (userAnswers[currentQuestionIndex] === option) {
                button.classList.add('selected');
            }
            button.textContent = option;
            button.addEventListener('click', () => selectOption(option));
            optionsContainer.appendChild(button);
        });

        // Update navigation buttons
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.classList.toggle('hidden', currentQuestionIndex === questions.length - 1);
        submitBtn.classList.toggle('hidden', currentQuestionIndex !== questions.length - 1);
    }

    // Select an option
    function selectOption(selectedOption) {
        userAnswers[currentQuestionIndex] = selectedOption;
        
        // Update UI
        const options = document.querySelectorAll('.option-btn');
        options.forEach(option => {
            option.classList.remove('selected');
            if (option.textContent === selectedOption) {
                option.classList.add('selected');
            }
        });
    }

    // Navigate to next question
    function nextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
            updateProgress();
        }
    }

    // Navigate to previous question
    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
            updateProgress();
        }
    }

    // Update progress bar and text
    function updateProgress() {
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.setProperty('--progress', `${progress}%`);
        progressText.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    }

    // Submit quiz and show results
    function submitQuiz() {
        quizCompleted = true;
        
        // Calculate score
        let correctAnswers = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.answer) {
                correctAnswers++;
            }
        });
        
        const scorePercentage = Math.round((correctAnswers / questions.length) * 100);
        
        // Show results
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        
        // Animate circular progress
        const circumference = 2 * Math.PI * 90;
        const offset = circumference - (scorePercentage / 100) * circumference;
        
        progressCircle.style.strokeDashoffset = offset;
        progressCircle.style.stroke = getScoreColor(scorePercentage);
        
        // Update score text
        let count = 0;
        const scoreInterval = setInterval(() => {
            scorePercent.textContent = count;
            scoreCorrect.textContent = count;
            count++;
            
            if (count > correctAnswers) {
                clearInterval(scoreInterval);
                scorePercent.textContent = scorePercentage;
            }
        }, 30);
        
        scoreTotal.textContent = questions.length;
        
        // Set score message
        scoreMessage.textContent = getScoreMessage(scorePercentage);
    }

    // Get color based on score
    function getScoreColor(percentage) {
        if (percentage >= 80) return '#48bb78'; // green
        if (percentage >= 60) return '#4299e1'; // blue
        if (percentage >= 40) return '#f6ad55'; // orange
        return '#f56565'; // red
    }

    // Get motivational message based on score
    function getScoreMessage(percentage) {
        if (percentage >= 90) {
            return "Excelente! Você conhece muito bem a Faculdade Municipal de Palhoça!";
        } else if (percentage >= 70) {
            return "Muito bom! Você tem um bom conhecimento sobre a FMP!";
        } else if (percentage >= 50) {
            return "Bom! Mas há espaço para aprender mais sobre a FMP.";
        } else {
            return "Você pode conhecer melhor a FMP visitando o site oficial ou a instituição!";
        }
    }

    // Restart quiz
    function restartQuiz() {
        currentQuestionIndex = 0;
        userAnswers = Array(questions.length).fill(null);
        quizCompleted = false;
        
        quizContainer.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        
        showQuestion();
        updateProgress();
    }

    // Animate social icons on hover
    function animateSocialIcons() {
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'translateY(-5px) scale(1.1)';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Setup event listeners
    function setupEventListeners() {
        nextBtn.addEventListener('click', nextQuestion);
        prevBtn.addEventListener('click', prevQuestion);
        submitBtn.addEventListener('click', submitQuiz);
        restartBtn.addEventListener('click', restartQuiz);
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (quizCompleted) return;
            
            if (e.key === 'ArrowRight' && !nextBtn.disabled && !nextBtn.classList.contains('hidden')) {
                nextQuestion();
            } else if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
                prevQuestion();
            } else if (e.key === 'Enter' && submitBtn.classList.contains('hidden')) {
                nextQuestion();
            } else if (e.key === 'Enter' && !submitBtn.classList.contains('hidden')) {
                submitQuiz();
            }
        });
    }

    // Start the quiz
    initQuiz();
});