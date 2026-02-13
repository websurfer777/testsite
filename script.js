document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const field = document.querySelector('input[name="field"]:checked');
    const priority = document.querySelector('input[name="priority"]:checked');
    const place = document.querySelector('input[name="place"]:checked');

    if (!field || !priority || !place) {
        document.getElementById('result').textContent = 'Пожалуйста, ответьте на все вопросы!';
        return;
    }

    let result = '';

    // Пример простой логики
    if (field.value === 'IT' && place.value === 'Удалённо') {
        result = 'Ваша работа мечты — удалённый разработчик!';
    } else if (field.value === 'Медицина') {
        result = 'Ваша работа мечты — врач или медицинский работник!';
    } else if (field.value === 'Искусство') {
        result = 'Ваша работа мечты — художник, дизайнер или музыкант!';
    } else if (field.value === 'Бизнес') {
        result = 'Ваша работа мечты — предприниматель или менеджер!';
    } else {
        result = 'Ваша работа мечты уникальна! Следуйте за мечтой!';
    }

    document.getElementById('result').textContent = result;
});

// Автоматическое воспроизведение музыки (может потребоваться клик пользователя)
window.addEventListener('click', function() {
    const audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play();
    }
}, { once: true });