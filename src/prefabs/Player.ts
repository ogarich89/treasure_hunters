import { Math } from 'phaser';

import { KEYS } from 'src/constants';
import { CaptainClownNose } from 'src/prefabs/CaptainClownNose';

import { Sword } from './Sword';

import type { Scene, Physics, Types } from 'phaser';

export class Player extends CaptainClownNose {
  private cursor: Types.Input.Keyboard.CursorKeys;
  private sword: Sword;
  declare body: Physics.Arcade.Body;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, KEYS.atlas.captainClownNose, 'idle_01');
    this.sword = new Sword(scene, x, y);
    this.cursor =
      scene.input.keyboard?.createCursorKeys() as Types.Input.Keyboard.CursorKeys;

    this.cursor.shift.on('down', this.attack);
  }

  move() {
    if (
      this.anims.isPlaying &&
      this.anims.currentAnim?.key.includes('attack') &&
      this.body.blocked.down
    ) {
      return;
    }
    if (this.cursor.left.isDown) {
      this.body.setVelocityX(-100);
      this.flipX = true;
      if (this.body.blocked.down) {
        if (
          this.anims.currentAnim?.key ===
            KEYS.anims.captainClownNose.withSword.idle ||
          !this.anims.isPlaying
        ) {
          this.anims.play(KEYS.anims.captainClownNose.withSword.run);
        }
      }
    } else if (this.cursor.right.isDown) {
      this.body.setVelocityX(100);
      this.flipX = false;
      if (this.body.blocked.down) {
        if (
          this.anims.currentAnim?.key ===
            KEYS.anims.captainClownNose.withSword.idle ||
          !this.anims.isPlaying
        ) {
          this.anims.play(KEYS.anims.captainClownNose.withSword.run);
        }
      }
    } else if (this.body.blocked.down) {
      this.body.setVelocityX(0);
      if (!this.anims.isPlaying) {
        this.anims.play(KEYS.anims.captainClownNose.withSword.idle);
      }
    }

    if (this.cursor.space.isDown && this.body.blocked.down) {
      this.body.setVelocityY(-150);
      this.anims.play(KEYS.anims.captainClownNose.withSword.jump, true);
    }
  }

  attack = () => {
    if (this.body.blocked.down) {
      const type = Math.Between(1, 3) as 1 | 2 | 3;
      const key = `attack${type}` as const;
      this.anims.play(KEYS.anims.captainClownNose.withSword[key], true);
      this.sword.activate(key, {
        flipX: this.flipX,
        position: {
          x: this.x,
          y: this.y,
        },
      });
    } else {
      const type = Math.Between(1, 2) as 1 | 2;
      const key = `airAttack${type}` as const;
      this.anims.play(KEYS.anims.captainClownNose.withSword[key], true);
    }

    this.body.setVelocityX(0);
  };
}
