function setActive(section) {
    for (i = 0; i < document.getElementsByClassName('nav-option').length; i++) {
        let option = document.getElementsByClassName('nav-option')[i];
        option.classList.remove('active');
    }
    let sectionName = "nav-" + section;
    document.getElementById(sectionName).classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('redirect-banner');
    const countdownSpan = document.getElementById('countdown');
    const stayBtn = document.getElementById('stay-here-btn');
    let seconds = 5;

    const redirectUrl = "https://meethridoy.pages.dev";

    const interval = setInterval(() => {
        seconds--;
        countdownSpan.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(interval);
            banner.style.display = 'none';
            window.location.href = redirectUrl;
        }
    }, 1000);

    stayBtn.addEventListener('click', () => {
        clearInterval(interval);

        banner.style.display = 'none';
    });
});
