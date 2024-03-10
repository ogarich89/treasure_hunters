import { Physics } from 'phaser';

import { KEYS } from 'src/constants';

import type { Scene } from 'phaser';

export class Captain extends Physics.Arcade.Sprite {
  declare body: Physics.Arcade.Body;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    texture: string,
    frame?: string | number,
  ) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.body.setSize(32, 32);
    this.body.setOffset(16, 0);

    this.initAnimations();
  }

  private initAnimations() {
    // WITHOUT SWORD
    this.scene.anims.create({
      key: KEYS.anims.idle,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captain, {
        prefix: 'idle_0',
        start: 1,
        end: 5,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.run,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captain, {
        prefix: 'run_0',
        start: 1,
        end: 4,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.jump,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captain, {
        prefix: 'jump_0',
        start: 1,
        end: 3,
      }),
    });
    // WITH SWORD
    this.scene.anims.create({
      key: KEYS.anims.sword.idle,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainWithSword, {
        prefix: 'idle_sword_0',
        start: 1,
        end: 5,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.run,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainWithSword, {
        prefix: 'run_sword_0',
        start: 1,
        end: 6,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.jump,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainWithSword, {
        prefix: 'jump_sword_0',
        start: 1,
        end: 3,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.attack1,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainWithSword, {
        prefix: 'attack_1_0',
        start: 1,
        end: 3,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.attack2,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainWithSword, {
        prefix: 'attack_2_0',
        start: 1,
        end: 3,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.attack3,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainWithSword, {
        prefix: 'attack_3_0',
        start: 1,
        end: 3,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.airAttack1,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainWithSword, {
        prefix: 'air_attack_1_0',
        start: 1,
        end: 3,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.airAttack2,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainWithSword, {
        prefix: 'air_attack_2_0',
        start: 1,
        end: 3,
      }),
    });
  }
}
