import { Scene } from 'phaser';

export class Loading extends Scene {
  constructor() {
    super('loading-scene');
  }
  preload(): void {
    this.load.baseURL = '/assets/';

    this.load.image('captain', 'sprites/captain.png');
    this.load.atlas(
      'a-captain',
      'spritesheets/a-captain.png',
      'spritesheets/a-captain_atlas.json',
    );

    this.load.spritesheet('tiles_sprite', 'tilemaps/tiles/terrain.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.image('tiles', 'tilemaps/tiles/terrain.png');
    this.load.tilemapTiledJSON('terrain', 'tilemaps/json/terrain.json');
  }
  create(): void {
    this.scene.start('level-1-scene');
  }
}
