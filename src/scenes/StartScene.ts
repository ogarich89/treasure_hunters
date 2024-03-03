import { type GameObjects, Scene } from 'phaser';

import { KEYS } from 'src/constants';

export class StartScene extends Scene {
  private text!: GameObjects.Text;
  constructor() {
    super(KEYS.scene.start);
  }

  createText() {
    this.text = this.add
      .text(window.innerWidth / 2, window.innerHeight / 2, 'Tap to start', {
        fontSize: 120,
        fontFamily: 'PirataOne',
      })
      .setOrigin(0.5);
  }

  setEvents() {
    this.input.on('pointerdown', () => {
      this.scene.start(KEYS.scene.game);
    });
  }

  create() {
    this.createText();
    this.setEvents();
  }
  update() {
    this.text.setPosition(window.innerWidth / 2, window.innerHeight / 2);
  }
}
