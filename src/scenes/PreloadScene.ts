import { Scene } from 'phaser';

import { KEYS } from 'src/constants';

export class PreloadScene extends Scene {
  constructor() {
    super(KEYS.scene.preload);
  }
  preload(): void {
    this.load.baseURL = '/assets';

    this.load.image(KEYS.image.captain, '/sprites/captain.png');
    this.load.atlas(
      KEYS.atlas.captain,
      '/spritesheets/captain.atlas.png',
      '/spritesheets/captain.atlas.json',
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
    this.scene.start(KEYS.scene.firstLevel);
  }
}
