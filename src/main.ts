import { Game, Scale } from 'phaser';

import { FirstLevelScene } from 'src/scenes/FirstLevelScene';
import { PreloadScene } from 'src/scenes/PreloadScene';
import { resizeHandler } from 'src/utils';

import type { Types } from 'phaser';

export const config: Types.Core.GameConfig = {
  title: 'Treasure Hunters',
  type: Phaser.WEBGL,
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
  scene: [PreloadScene, FirstLevelScene],
};

window.game = new Game(config);

window.addEventListener('resize', resizeHandler);
