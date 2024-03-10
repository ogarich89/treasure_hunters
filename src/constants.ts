export enum EVENTS_NAME {}

export const KEYS = {
  image: {
    tiles: {
      terrain: 'image.tiles.terrain',
    },
  },
  atlas: {
    captain: 'atlas.captain',
    captainWithSword: 'atlas.captain_with_sword',
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
    preload: 'scene.preload',
    start: 'scene.start',
    game: 'scene.game',
  },
  anims: {
    run: 'anims.run',
    jump: 'anims.jump',
    idle: 'anims.idle',
    sword: {
      run: 'anims.sword_run',
      jump: 'anims.sword_jump',
      idle: 'anims.sword_idle',
      attack1: 'anims.sword_attack_1',
      attack2: 'anims.sword_attack_2',
      attack3: 'anims.sword_attack_3',
      airAttack1: 'anims.sword_air_attack_1',
      airAttack2: 'anims.sword_air_attack_2',
    },
  },
} as const;
