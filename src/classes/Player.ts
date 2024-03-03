import { Input } from 'phaser';

import { Captain } from 'src/classes/Captain';
import { KEYS } from 'src/constants';

import type { Scene, Physics } from 'phaser';

const KEYBOARD_KEYS = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'SPACE'] as const;

type KeyboardKeys = Record<
  (typeof KEYBOARD_KEYS)[number],
  Input.Keyboard.Key | undefined
>;

export class Player extends Captain {
  private keys = {} as KeyboardKeys;

  declare body: Physics.Arcade.Body;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, KEYS.image.captain);

    KEYBOARD_KEYS.forEach((key) => {
      this.keys[key] = this.scene.input.keyboard?.addKey(
        Input.Keyboard.KeyCodes[key],
      );
    });

    this.getBody().setSize(30, 30);
    this.getBody().setOffset(8, 0);
  }

  update() {
    this.getBody().setVelocity(0);
    if (this.keys.LEFT?.isDown) {
      this.body.velocity.x = -110;
      this.checkFlip();
      this.getBody().setOffset(48, 0);
      if (!this.anims.isPlaying) {
        this.anims.play('run', true);
      }
    }
    if (this.keys.RIGHT?.isDown) {
      this.body.velocity.x = 110;
      this.checkFlip();
      this.getBody().setOffset(15, 0);
      if (!this.anims.isPlaying) {
        this.anims.play('run', true);
      }
    }
    if (this.keys.SPACE?.isDown) {
      this.body.velocity.y = -330;
      if (!this.anims.isPlaying) {
        this.anims.play('jump', true);
      }
    }
  }
}
