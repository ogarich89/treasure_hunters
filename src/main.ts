import { Game, Scale, AUTO } from 'phaser';

import { GameScene } from 'src/scenes/GameScene';
import { PreloadScene } from 'src/scenes/PreloadScene';
import { StartScene } from 'src/scenes/StartScene';
import { resizeHandler } from 'src/utils';

import type { Types } from 'phaser';

const config: Types.Core.GameConfig = {
  title: 'Treasure Hunters',
  type: AUTO,
  parent: 'game',
  backgroundColor: '#33323d',
  scale: {
    mode: Scale.ScaleModes.NONE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  fps: {
    target: 10,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
        x: 0,
        y: 300,
      },
    },
  },
  render: {
    antialiasGL: false,
    pixelArt: true,
  },
  callbacks: {
    postBoot: resizeHandler,
  },
  canvasStyle: `display: block; width: 100%; height: 100%;`,
  autoFocus: true,
  audio: {
    disableWebAudio: false,
  },
  scene: [PreloadScene, GameScene],
};

window.game = new Game(config);

window.addEventListener('resize', resizeHandler);
