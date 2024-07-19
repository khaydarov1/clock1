// Tugatish sanasini belgilash
const targetDate = new Date("Oct 27, 2024 20:00:00").getTime();

// Taymerni yangilash funktsiyasi
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Kunlar, soatlar, daqiqalar va soniyalarni hisoblash
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Natijani ko'rsatish
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Agar hisoblash tugagan bo'lsa
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerText = "Vaqt tugadi";
    }
}

// Taymerni har soniyada yangilab turish
const countdownInterval = setInterval(updateCountdown, 1000);
