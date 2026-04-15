// ================================================================
// PARTICLES  (js/particles.js)
// Canvas-based star / dot particle animation — no dependencies.
// ================================================================

(function () {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let W, H;
    let particles = [];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function randomParticle() {
        return {
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.8 + 0.3,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            alpha: Math.random() * 0.55 + 0.08,
            isStar: Math.random() > 0.6,
            twinkle: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.02 + Math.random() * 0.03,
        };
    }

    function drawStar(x, y, r, alpha) {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
            const a  = (i / 4) * Math.PI * 2;
            const ax = Math.cos(a) * r * 2.5, ay = Math.sin(a) * r * 2.5;
            const bx = Math.cos(a + Math.PI / 4) * r * 0.8,
                  by = Math.sin(a + Math.PI / 4) * r * 0.8;
            i === 0 ? ctx.moveTo(ax, ay) : null;
            ctx.lineTo(ax, ay);
            ctx.lineTo(bx, by);
        }
        ctx.closePath();
        ctx.fillStyle = `rgba(252, 211, 77, ${alpha * 0.55})`;
        ctx.fill();
        ctx.restore();
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        for (const p of particles) {
            p.twinkle += p.twinkleSpeed;
            const a = p.alpha * (0.6 + 0.4 * Math.sin(p.twinkle));

            if (p.isStar && p.r > 0.9) {
                drawStar(p.x, p.y, p.r * 0.5, a);
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(167, 139, 250, ${a})`;
                ctx.fill();
            }

            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
        }
        requestAnimationFrame(draw);
    }

    function init() {
        resize();
        particles = Array.from({ length: 120 }, randomParticle);
        draw();
    }

    window.addEventListener('resize', resize);
    init();
})();
