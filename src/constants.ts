export enum EVENTS_NAME {}

enum Image {
  Captain = 'image.captain',
  Tiles = 'image.tiles',
}

enum Atlas {
  Captain = 'atlas.captain',
}

enum Spritesheet {
  Tiles = 'spritesheet.tiles',
}

enum Tilemap {
  Terrain = 'tilemap.terrain',
}
enum Tileset {
  Terrain = 'tileset.terrain',
}

export const KEYS = {
  image: Image,
  atlas: Atlas,
  spritesheet: Spritesheet,
  tilemap: Tilemap,
  tileset: Tileset,
};
