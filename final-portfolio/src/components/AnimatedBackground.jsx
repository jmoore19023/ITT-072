import { useEffect, useRef } from 'react';

function AnimatedBackground({ darkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    const CELL = 48;
    const RISE = 7;
    const DURATION = 5000;
    const HOLD = 600;
    const REPEAT_EVERY = 15000;
    let W, H, cells = [];
    let startTime;
    let animFrameId;
    let timeoutId;

    function resize() {
      const hero = canvas.closest('.hero');
      W = canvas.width  = hero ? hero.offsetWidth  : window.innerWidth;
      H = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
      buildCells();
    }

    function buildCells() {
      cells = [];
      const cols = Math.ceil(W / CELL) + 1;
      const rows = Math.ceil(H / CELL) + 1;
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const dist = Math.sqrt(col * col + row * row);
          cells.push({ col, row, dist, rise: 0, state: 'idle' });
        }
      }
      const maxDist = Math.max(...cells.map(c => c.dist));
      cells.forEach(c => c.normDist = c.dist / maxDist);
    }

    function getColors() {
      return {
        fill:       darkMode ? 'rgba(34,211,238,0.03)' : 'rgba(34,211,238,0.04)',
        stroke:     darkMode ? 'rgba(34,211,238,0.08)' : 'rgba(34,211,238,0.07)',
        riseStroke: darkMode ? 'rgba(34,211,238,0.20)' : 'rgba(34,211,238,0.15)',
        riseFill:   darkMode ? 'rgba(34,211,238,0.06)' : 'rgba(34,211,238,0.05)',
      };
    }

    function easeOut(t) { return 1 - Math.pow(1 - t, 2); }
    function easeIn(t)  { return t * t; }

    function draw(now) {
      ctx.clearRect(0, 0, W, H);
      const c = getColors();
      let stillMoving = false;

      cells.forEach(cell => {
        const triggerAt = cell.normDist * (DURATION - HOLD);
        const elapsed = now - startTime;

        if (elapsed >= triggerAt && cell.state === 'idle') {
          cell.state = 'rising';
          cell.riseStart = now;
        }
        if (cell.state === 'rising') {
          const progress = Math.min((now - cell.riseStart) / 180, 1);
          cell.rise = easeOut(progress) * RISE;
          if (progress >= 1) { cell.state = 'settling'; cell.settleStart = now; }
          stillMoving = true;
        }
        if (cell.state === 'settling') {
          const progress = Math.min((now - cell.settleStart) / 300, 1);
          cell.rise = RISE * (1 - easeIn(progress));
          if (progress >= 1) { cell.rise = 0; cell.state = 'done'; }
          stillMoving = true;
        }

        const x = cell.col * CELL + 0.5;
        const y = cell.row * CELL - cell.rise + 0.5;
        const w = CELL - 1;
        const h = CELL - 1;
        const raised = cell.rise > 0.5;

        ctx.fillStyle   = raised ? c.riseFill   : c.fill;
        ctx.strokeStyle = raised ? c.riseStroke : c.stroke;
        ctx.lineWidth   = 0.75;
        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);
      });

      if (stillMoving) {
        animFrameId = requestAnimationFrame(draw);
      } else {
        timeoutId = setTimeout(() => {
          animFrameId = requestAnimationFrame(start);
        }, REPEAT_EVERY);
      }
    }

    function start(timestamp) {
      cells.forEach(c => { c.rise = 0; c.state = 'idle'; });
      startTime = timestamp;
      animFrameId = requestAnimationFrame(draw);
    }

    timeoutId = setTimeout(() => {
      resize();
      animFrameId = requestAnimationFrame(start);
    }, 200);

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animFrameId);
      clearTimeout(timeoutId);
      window.removeEventListener('resize', resize);
    };
  }, [darkMode]);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}

export default AnimatedBackground;