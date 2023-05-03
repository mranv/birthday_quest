document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

    const submitBtn = document.getElementById('submitBtn');
    const loadingIcon = document.getElementById('loadingIcon');
    const result = document.getElementById('result');
    let submitCount = 0;

    submitBtn.style.display = 'block';

    submitBtn.addEventListener('click', function () {
        loadingIcon.style.display = 'block';
        result.style.display = 'none';

        setTimeout(function () {
            loadingIcon.style.display = 'none';
            clearCanvas();

            submitCount++;

            if (submitCount < 4) {
                result.textContent = 'NOT COINCIDE';
                result.style.display = 'block';
            } else {
                window.location.href = 'quest2.html';
            }
        }, 4000);
    });
});
