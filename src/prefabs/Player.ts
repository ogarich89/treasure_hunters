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

    this.cursor.space.on('down', () => {
      this.body.setVelocityY(-150);
      this.anims.play(KEYS.anims.sword.jump, true);
    });
  }

  move() {
    if (this.body.position.y === 256) {
      if (!this.anims.isPlaying) {
        this.anims.play(KEYS.anims.sword.idle);
      }
      this.body.setVelocityX(0);
    }

    if (this.cursor.left.isDown) {
      this.body.setVelocityX(-100);
      this.flipX = true;
      this.anims.play(KEYS.anims.sword.run, true);
    }
    if (this.cursor.right.isDown) {
      this.body.setVelocityX(100);
      this.flipX = false;
      this.anims.play(KEYS.anims.sword.run, true);
    }
  }
}
