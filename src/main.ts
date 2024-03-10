import { Game, Scale } from 'phaser';

import { GameScene } from 'src/scenes/GameScene';
import { PreloadScene } from 'src/scenes/PreloadScene';
import { StartScene } from 'src/scenes/StartScene';
import { resizeHandler } from 'src/utils';

import type { Types } from 'phaser';

const config: Types.Core.GameConfig = {
  title: 'Treasure Hunters',
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33323d',
  scale: {
    mode: Scale.ScaleModes.NONE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
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
  scene: [PreloadScene, StartScene, GameScene],
};

window.game = new Game(config);

window.addEventListener('resize', resizeHandler);
