export enum EVENTS_NAME {}

export const KEYS = {
  image: {
    captain: 'image.captain',
    tiles: {
      terrain: 'image.tiles.terrain',
    },
  },
  atlas: {
    captain: 'atlas.captain',
  },
  spritesheet: {
    tiles: {
      terrain: 'spritesheet.tiles.terrain',
    },
  },
  tilemap: {
    terrain: 'tilemap.terrain',
  },
  tileset: {
    terrain: 'tileset.terrain',
  },
  scene: {
    firstLevel: 'scene.firstLevel',
    preload: 'scene.preload',
  },
} as const;
