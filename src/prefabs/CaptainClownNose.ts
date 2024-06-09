import { Physics } from 'phaser';

import { KEYS } from 'src/constants';

import type { Scene } from 'phaser';

const {
  Arcade: { Sprite },
} = Physics;

export class CaptainClownNose extends Sprite {
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
    this.body.setSize(28, 28);
    this.body.setOffset(18, 3);

    this.initAnimations();
  }

  private initAnimations() {
    // WITHOUT SWORD
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.idle,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainClownNose, {
        prefix: 'idle_0',
        start: 1,
        end: 5,
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.run,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainClownNose, {
        prefix: 'run_0',
        start: 1,
        end: 4,
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.jump,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.captainClownNose, {
        prefix: 'jump_0',
        start: 1,
        end: 3,
      }),
      frameRate: 10,
    });
    // WITH SWORD
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.withSword.idle,
      frames: this.scene.anims.generateFrameNames(
        KEYS.atlas.captainClownNoseWithSword,
        {
          prefix: 'idle_sword_0',
          start: 1,
          end: 5,
        },
      ),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.withSword.run,
      frames: this.scene.anims.generateFrameNames(
        KEYS.atlas.captainClownNoseWithSword,
        {
          prefix: 'run_sword_0',
          start: 1,
          end: 6,
        },
      ),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.withSword.jump,
      frames: this.scene.anims.generateFrameNames(
        KEYS.atlas.captainClownNoseWithSword,
        {
          prefix: 'jump_sword_0',
          start: 1,
          end: 3,
        },
      ),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.withSword.attack1,
      frames: this.scene.anims.generateFrameNames(
        KEYS.atlas.captainClownNoseWithSword,
        {
          prefix: 'attack_1_0',
          start: 1,
          end: 3,
        },
      ),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.withSword.attack2,
      frames: this.scene.anims.generateFrameNames(
        KEYS.atlas.captainClownNoseWithSword,
        {
          prefix: 'attack_2_0',
          start: 1,
          end: 3,
        },
      ),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.withSword.attack3,
      frames: this.scene.anims.generateFrameNames(
        KEYS.atlas.captainClownNoseWithSword,
        {
          prefix: 'attack_3_0',
          start: 1,
          end: 3,
        },
      ),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.withSword.airAttack1,
      frames: this.scene.anims.generateFrameNames(
        KEYS.atlas.captainClownNoseWithSword,
        {
          prefix: 'air_attack_1_0',
          start: 1,
          end: 3,
        },
      ),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.captainClownNose.withSword.airAttack2,
      frames: this.scene.anims.generateFrameNames(
        KEYS.atlas.captainClownNoseWithSword,
        {
          prefix: 'air_attack_2_0',
          start: 1,
          end: 3,
        },
      ),
      frameRate: 10,
    });
  }
}
