import { Input } from 'phaser';

import { Captain } from 'src/classes/Captain';

import type { Scene, Physics } from 'phaser';

const KEYS = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'SPACE'] as const;

type Keys = Record<(typeof KEYS)[number], Input.Keyboard.Key | undefined>;

export class Player extends Captain {
  private keys = {} as Keys;

  declare body: Physics.Arcade.Body;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'captain');

    KEYS.forEach((key) => {
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
