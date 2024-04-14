import { Scene } from 'phaser';

import { KEYS } from 'src/constants';

export class PreloadScene extends Scene {
  constructor() {
    super(KEYS.scene.preload);
  }
  preload(): void {
    this.load.baseURL = '/assets';

    this.load.atlas(
      KEYS.atlas.captainClownNose,
      '/spritesheets/captain_clown_nose.atlas.png',
      '/spritesheets/captain_clown_nose.atlas.json',
    );
    this.load.atlas(
      KEYS.atlas.captainClownNoseWithSword,
      '/spritesheets/captain_clown_nose_with_sword.atlas.png',
      '/spritesheets/captain_clown_nose_with_sword.atlas.json',
    );
    this.load.atlas(
      KEYS.atlas.fierceTooth,
      '/spritesheets/fierce_tooth.atlas.png',
      '/spritesheets/fierce_tooth.atlas.json',
    );
    this.load.atlas(
      KEYS.atlas.swordAttacks,
      '/spritesheets/sword_effects.atlas.png',
      '/spritesheets/sword_effects.atlas.json',
    );

    this.load.spritesheet(
      KEYS.spritesheet.tiles.terrain,
      '/tilemaps/tiles/terrain.png',
      {
        frameWidth: 32,
        frameHeight: 32,
      },
    );
    this.load.image(KEYS.image.tiles.terrain, '/tilemaps/tiles/terrain.png');
    this.load.tilemapTiledJSON(
      KEYS.tilemap.terrain,
      '/tilemaps/json/terrain.json',
    );
  }
  create(): void {
    this.scene.start(KEYS.scene.start);
  }
}
