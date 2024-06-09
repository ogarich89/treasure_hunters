import { Physics } from 'phaser';

import { KEYS } from 'src/constants';

import type { Scene } from 'phaser';

export class FierceTooth extends Physics.Arcade.Sprite {
  declare body: Physics.Arcade.Body;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, KEYS.atlas.fierceTooth, 'idle_01');
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.body.setSize(24, 24);
    this.body.setOffset(6, 3);

    this.initAnimations();
  }

  private initAnimations() {
    // WITHOUT SWORD
    this.scene.anims.create({
      key: KEYS.anims.fierceTooth.idle,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.fierceTooth, {
        prefix: 'idle_0',
        start: 1,
        end: 8,
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.fierceTooth.run,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.fierceTooth, {
        prefix: 'run_0',
        start: 1,
        end: 6,
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.fierceTooth.jump,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.fierceTooth, {
        prefix: 'jump_0',
        start: 1,
        end: 3,
      }),
      frameRate: 10,
    });
  }

  move() {
    if (!this.anims.isPlaying) {
      this.anims.play(KEYS.anims.fierceTooth.idle);
    }
  }
}
