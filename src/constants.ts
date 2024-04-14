export enum EVENTS_NAME {}

export const KEYS = {
  image: {
    tiles: {
      terrain: 'image.tiles.terrain',
    },
  },
  atlas: {
    captainClownNose: 'atlas.captain_clown_nose',
    captainClownNoseWithSword: 'atlas.captain_clown_nose_with_sword',
    fierceTooth: 'atlas.fierce_tooth',
    swordAttacks: 'atlas.sword_attacks',
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
    captainClownNose: {
      run: 'anims.captain_clown_nose.run',
      jump: 'anims.captain_clown_nose.jump',
      idle: 'anims.captain_clown_nose.idle',
      withSword: {
        run: 'anims.captain_clown_nose.with_sword.run',
        jump: 'anims.captain_clown_nose.with_sword.jump',
        idle: 'anims.captain_clown_nose.with_sword.idle',
        attack1: 'anims.captain_clown_nose.with_sword.attack_1',
        attack2: 'anims.captain_clown_nose.with_sword.attack_2',
        attack3: 'anims.captain_clown_nose.with_sword.attack_3',
        airAttack1: 'anims.captain_clown_nose.with_sword.air_attack_1',
        airAttack2: 'anims.captain_clown_nose.with_sword.air_attack_2',
      },
    },
    sword: {
      attack1: 'anims.sword.attack_1',
      attack2: 'anims.sword.attack_2',
      attack3: 'anims.sword.attack_3',
      airAttack1: 'anims.sword.air_attack_1',
      airAttack2: 'anims.sword.air_attack_2',
    },
    fierceTooth: {
      idle: 'anims.fierce_tooth.idle',
      run: 'anims.fierce_tooth.run',
      jump: 'anims.fierce_tooth.jump',
    },
  },
} as const;
