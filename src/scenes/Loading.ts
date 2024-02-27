import { Scene } from 'phaser';

import { KEYS } from 'src/constants';

export class Loading extends Scene {
  constructor() {
    super('loading-scene');
  }
  preload(): void {
    this.load.baseURL = '/assets';

    this.load.image(KEYS.image.Captain, '/sprites/captain.png');
    this.load.atlas(
      KEYS.atlas.Captain,
      '/spritesheets/captain.atlas.png',
      '/spritesheets/captain.atlas.json',
    );

    this.load.spritesheet(
      KEYS.spritesheet.Tiles,
      '/tilemaps/tiles/terrain.png',
      {
        frameWidth: 32,
        frameHeight: 32,
      },
    );
    this.load.image(KEYS.image.Tiles, '/tilemaps/tiles/terrain.png');
    this.load.tilemapTiledJSON(
      KEYS.tilemap.Terrain,
      '/tilemaps/json/terrain.json',
    );
  }
  create(): void {
    this.scene.start('level-1-scene');
  }
}
