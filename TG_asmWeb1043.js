if(document.getElementById('update-form')) {
    document.getElementById('update-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const newEndTime = document.getElementById('end-time').value;
        localStorage.setItem('promoEndTime', new Date(newEndTime).toISOString());
        alert('Cập nhật thành công!');
        startCountdown(new Date(newEndTime).getTime()); // Bắt đầu đếm ngược với thời gian mới cập nhật
    });
}

function fetchPromoEndTime() {
    const promoEndTime = localStorage.getItem('promoEndTime');
    return promoEndTime ? new Date(promoEndTime).getTime() : null;
}

function startCountdown(endTime) {
    const countdownElement = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
    };

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            countdownElement.days.innerHTML = "00";
            countdownElement.hours.innerHTML = "00";
            countdownElement.minutes.innerHTML = "00";
            countdownElement.seconds.innerHTML = "00";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.days.innerHTML = days.toString().padStart(2, '0');
        countdownElement.hours.innerHTML = hours.toString().padStart(2, '0');
        countdownElement.minutes.innerHTML = minutes.toString().padStart(2, '0');
        countdownElement.seconds.innerHTML = seconds.toString().padStart(2, '0');
    }

    clearInterval(window.countdownInterval); // Xóa bỏ interval trước đó nếu có
    window.countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Cập nhật ngay lập tức để tránh độ trễ một giây đầu tiên
}

const endTime = fetchPromoEndTime();
if (endTime) {
    startCountdown(endTime);
} else {
    document.getElementById('days').innerHTML = "00";
    document.getElementById('hours').innerHTML = "00";
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
}
