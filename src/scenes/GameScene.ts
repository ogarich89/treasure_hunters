import { Scene } from 'phaser';

import { KEYS } from 'src/constants';
import { FierceTooth } from 'src/prefabs/FierceTooth';
import { Player } from 'src/prefabs/Player';

import type { Tilemaps } from 'phaser';

export class GameScene extends Scene {
  private player!: Player;
  private fierceTooth!: FierceTooth;
  private map!: Tilemaps.Tilemap;
  private tileSet!: Tilemaps.Tileset;
  private platformLayer!: Tilemaps.TilemapLayer;

  constructor() {
    super(KEYS.scene.game);
  }

  private initMap() {
    this.map = this.make.tilemap({
      key: KEYS.tilemap.terrain,
      tileWidth: 32,
      tileHeight: 32,
    });
    this.tileSet = this.map.addTilesetImage(
      KEYS.tileset.terrain,
      KEYS.image.tiles.terrain,
    ) as Tilemaps.Tileset;
    this.platformLayer = this.map.createLayer(
      'Platform',
      this.tileSet,
      0,
      0,
    ) as Tilemaps.TilemapLayer;
    this.platformLayer.setCollisionByProperty({ collides: true });
  }

  private initCamera() {
    this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
    this.cameras.main.setZoom(2);
  }

  create() {
    this.initMap();
    this.player = new Player(this, 100, 278);
    this.fierceTooth = new FierceTooth(this, 400, 278);

    this.physics.add.collider(this.player, this.platformLayer);
    this.physics.add.collider(this.fierceTooth, this.platformLayer);

    this.initCamera();
  }

  handleCollide(source: any, target: any) {
    console.log(source, target);
  }
  update(): void {
    this.player.move();
    this.fierceTooth.move();
  }
}
