"use client";

import { Fragment, useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  const drawGrid = (
    ctx: CanvasRenderingContext2D | null,
    width: number,
    height: number,
    cellSize = 32,
  ) => {
    console.log(ctx);
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "#F3EFEF";
    ctx.lineWidth = 1;

    // Draw vertical lines
    for (let x = 0; x <= width; x += cellSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= height; y += cellSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid(ctx, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <Fragment>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div className="absolute inset-0 w-full h-full z-2 bg-grid-shade" />
    </Fragment>
  );
};

export default Background;
