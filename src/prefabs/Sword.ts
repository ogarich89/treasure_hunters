import { Physics } from 'phaser';

import { KEYS } from 'src/constants';

import type { Scene } from 'phaser';

const {
  Arcade: { Sprite },
} = Physics;

const SETTINGS: Record<
  keyof typeof KEYS.anims.sword,
  {
    size: [number, number];
    offset: [number, number];
    positionOffset: [number, number];
    flip: {
      positionOffset: [number, number];
      offset: [number, number];
    };
  }
> = {
  attack1: {
    size: [20, 10],
    positionOffset: [35, 0],
    offset: [-10, 8],
    flip: {
      positionOffset: [-37, 0],
      offset: [20, 8],
    },
  },
};

export class Sword extends Sprite {
  declare body: Physics.Arcade.Body;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, KEYS.atlas.swordAttacks);

    this.scene.add.existing(this);
    this.visible = false;

    this.initAnimations();

    this.on('animationcomplete', () => {
      this.deactivate();
    });
  }

  private initAnimations() {
    this.scene.anims.create({
      key: KEYS.anims.sword.attack1,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.swordAttacks, {
        prefix: 'attack_1_0',
        start: 1,
        end: 3,
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.attack2,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.swordAttacks, {
        prefix: 'attack_2_0',
        start: 1,
        end: 3,
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.attack3,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.swordAttacks, {
        prefix: 'attack_3_0',
        start: 1,
        end: 3,
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.airAttack1,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.swordAttacks, {
        prefix: 'air_attack_1_0',
        start: 1,
        end: 2,
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: KEYS.anims.sword.airAttack2,
      frames: this.scene.anims.generateFrameNames(KEYS.atlas.swordAttacks, {
        prefix: 'air_attack_2_0',
        start: 1,
        end: 2,
      }),
      frameRate: 10,
    });
  }

  private deactivate = () => {
    this.scene.physics.world.remove(this.body);
    this.visible = false;
  };

  activate(
    key: keyof typeof KEYS.anims.sword,
    options: { flipX: boolean; position: { x: number; y: number } },
  ) {
    const { flipX, position } = options;
    this.scene.physics.add.existing(this);
    this.body.setAllowGravity(false);

    this.visible = true;
    this.flipX = flipX;

    const [width, height] = SETTINGS[key].size;
    this.setSize(width, height);

    const [positionOffsetX, positionOffsetY] = flipX
      ? SETTINGS[key].flip.positionOffset
      : SETTINGS[key].positionOffset;

    const positionX = position.x + positionOffsetX;
    const positionY = position.y + positionOffsetY;
    this.setPosition(positionX, positionY);

    const [offsetX, offsetY] = flipX
      ? SETTINGS[key].flip.offset
      : SETTINGS[key].offset;
    this.body.setOffset(offsetX, offsetY);

    this.anims.play(KEYS.anims.sword[key]);
  }
}
