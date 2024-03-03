import { Scene } from 'phaser';

import { Player } from 'src/classes/Player';
import { KEYS } from 'src/constants';

import type { Tilemaps } from 'phaser';

export class FirstLevelScene extends Scene {
  private player!: Player;
  private map!: Tilemaps.Tilemap;
  private tileSet!: Tilemaps.Tileset;
  private platformLayer!: Tilemaps.TilemapLayer;
  constructor() {
    super(KEYS.scene.firstLevel);
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
    this.physics.add.collider(this.player, this.platformLayer);
    this.initCamera();
  }

  update(): void {
    this.player.update();
  }
}
