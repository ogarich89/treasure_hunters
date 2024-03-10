import { Math } from 'phaser';

import { KEYS } from 'src/constants';
import { Captain } from 'src/prefabs/Captain';

import type { Scene, Physics, Types } from 'phaser';

export class Player extends Captain {
  private cursor: Types.Input.Keyboard.CursorKeys;
  declare body: Physics.Arcade.Body;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, KEYS.atlas.captain, 'idle_01');
    this.cursor =
      scene.input.keyboard?.createCursorKeys() as Types.Input.Keyboard.CursorKeys;

    this.cursor.shift.on('down', () => {
      if (this.body.blocked.down) {
        const type = Math.Between(1, 3) as 1 | 2 | 3;
        this.anims.play(KEYS.anims.sword[`attack${type}`], true);
      } else {
        const type = Math.Between(1, 2) as 1 | 2;
        this.anims.play(KEYS.anims.sword[`airAttack${type}`], true);
      }

      this.body.setVelocityX(0);
    });
  }

  move() {
    if (this.cursor.left.isDown) {
      this.body.setVelocityX(-100);
      this.flipX = true;
      if (this.body.blocked.down) {
        if (!this.anims.isPlaying) {
          this.anims.play(KEYS.anims.sword.run);
        }
      }
    } else if (this.cursor.right.isDown) {
      this.body.setVelocityX(100);
      this.flipX = false;
      if (this.body.blocked.down) {
        if (!this.anims.isPlaying) {
          this.anims.play(KEYS.anims.sword.run);
        }
      }
    } else if (this.body.blocked.down) {
      this.body.setVelocityX(0);
      if (!this.anims.isPlaying) {
        this.anims.play(KEYS.anims.sword.idle);
      }
    }

    if (this.cursor.space.isDown && this.body.blocked.down) {
      this.body.setVelocityY(-150);
      this.anims.play(KEYS.anims.sword.jump, true);
    }
  }
}
