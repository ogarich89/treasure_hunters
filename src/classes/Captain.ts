import { Physics } from 'phaser';

import type { Scene } from 'phaser';

export class Captain extends Physics.Arcade.Sprite {
  protected hp = 100;

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
    this.getBody().setCollideWorldBounds(true);
    this.getBody().setGravityY(100);

    this.initAnimations();
  }

  private initAnimations() {
    this.scene.anims.create({
      key: 'idle',
      frames: this.scene.anims.generateFrameNames('a-captain', {
        prefix: 'idle_0',
        end: 5,
      }),
    });
    this.scene.anims.create({
      key: 'jump',
      frames: this.scene.anims.generateFrameNames('a-captain', {
        prefix: 'jump_0',
        end: 3,
      }),
    });
    this.scene.anims.create({
      key: 'run',
      frames: this.scene.anims.generateFrameNames('a-captain', {
        prefix: 'run_0',
        end: 3,
      }),
    });
  }
  protected checkFlip(): void {
    if ((this.body as Physics.Arcade.Body).velocity.x < 0) {
      this.scaleX = -1;
    } else {
      this.scaleX = 1;
    }
  }
  protected getBody() {
    return this.body as Physics.Arcade.Body;
  }
}
