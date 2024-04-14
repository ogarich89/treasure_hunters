import { Physics } from 'phaser';

import { KEYS } from 'src/constants';

import type { Scene } from 'phaser';

export class Attack extends Physics.Arcade.Sprite {
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
    this.body.setSize(28, 28);
    this.body.setOffset(18, 3);

    this.initAnimations();
  }

  private initAnimations() {
    this.scene.anims.create({
      key: KEYS.anims.sword.attack1,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.swordAttacks, {
        prefix: 'attack_1_0',
        start: 1,
        end: 3,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.attack2,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.swordAttacks, {
        prefix: 'attack_2_0',
        start: 1,
        end: 3,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.attack3,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.swordAttacks, {
        prefix: 'attack_3_0',
        start: 1,
        end: 3,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.airAttack1,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.swordAttacks, {
        prefix: 'air_attack_1_0',
        start: 1,
        end: 2,
      }),
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.airAttack2,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.swordAttacks, {
        prefix: 'air_attack_2_0',
        start: 1,
        end: 2,
      }),
    });
  }
}
