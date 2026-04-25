// Generates public/icon-192.png and public/icon-512.png from icon.svg
// Run: node scripts/gen-icons.mjs
import { createCanvas } from 'canvas';
import { writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));

function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const r = size * 0.195; // corner radius

  // Background rounded rect
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(size - r, 0);
  ctx.quadraticCurveTo(size, 0, size, r);
  ctx.lineTo(size, size - r);
  ctx.quadraticCurveTo(size, size, size - r, size);
  ctx.lineTo(r, size);
  ctx.quadraticCurveTo(0, size, 0, size - r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();
  ctx.fillStyle = '#0A0806';
  ctx.fill();

  // Gold gradient text
  const grad = ctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, '#C9A045');
  grad.addColorStop(1, '#C4956A');
  ctx.fillStyle = grad;
  ctx.font = `900 ${size * 0.44}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('TC', size / 2, size / 2 + size * 0.02);

  return canvas.toBuffer('image/png');
}

const out = resolve(__dir, '../public');
writeFileSync(resolve(out, 'icon-192.png'), drawIcon(192));
writeFileSync(resolve(out, 'icon-512.png'), drawIcon(512));
console.log('✓ icon-192.png and icon-512.png generated');
