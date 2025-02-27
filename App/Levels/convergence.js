const CONVERGENCE = [
  {
    name: 'Convergence 1',
    nick: 'CONVERGENCE_1',
    colors: Colors.biomes.everglades,
    x: 0,
    y: -20,
    requirements: ['TWO_BELOW'],
    defaultExpression: '0',
    goals: [
      {
        x: -9,
        y: 0,
        order: 'A',
        type: 'dynamic',
      },
      {
        x: -6,
        y: 0,
        order: 'B',
        type: 'dynamic',
      },
      {
        x: -3,
        y: 0,
        order: 'C',
        type: 'dynamic',
      },
      {
        x: 3,
        y: 0,
        order: 'C',
        type: 'dynamic',
      },
      {
        x: 6,
        y: 0,
        order: 'B',
        type: 'dynamic',
      },
      {
        x: 9,
        y: 0,
        order: 'A',
        type: 'dynamic',
      },
    ],
    sledders: [
      { x: 0, y: 0 },
      // { x: -12, y: 0, asset: 'images.sam_sled' },
      // { x: 12, y: 0, asset: 'images.lunchbox_sled' },
    ],
    sky: {
      asset: 'images.hilbert_swamp_background',
      margin: 1,
    },
  },
  {
    name: 'Convergence 2',
    nick: 'CONVERGENCE_2',
    colors: Colors.biomes.everglades,
    x: -10,
    y: -10,
    requirements: [null],
    defaultExpression: '0',
    goals: [
      {
        x: -9,
        y: 0,
        order: 'A',
        type: 'dynamic',
      },
      {
        x: -6,
        y: 0,
        order: 'C',
        type: 'dynamic',
      },
      {
        x: -3,
        y: 0,
        order: 'B',
        type: 'dynamic',
      },
      {
        x: 3,
        y: 0,
        order: 'B',
        type: 'dynamic',
      },
      {
        x: 6,
        y: 0,
        order: 'C',
        type: 'dynamic',
      },
      {
        x: 9,
        y: 0,
        order: 'A',
        type: 'dynamic',
      },
    ],
    sledders: [
      { x: 0, y: 0 },
      // { x: -12, y: 0, asset: 'images.sam_sled' },
      // { x: 12, y: 0, asset: 'images.lunchbox_sled' },
    ],
    sky: {
      asset: 'images.hilbert_swamp_background',
      margin: 1,
    },
  },
  {
    name: 'Convergence 3',
    nick: 'CONVERGENCE_3',
    colors: Colors.biomes.everglades,
    x: 10,
    y: 0,
    requirements: ['CONVERGENCE_1'],
    defaultExpression: '0',
    goals: [
      {
        x: -16,
        y: 0,
        order: 'A',
        type: 'dynamic',
      },
      {
        x: -8,
        y: 0,
        order: 'B',
        type: 'dynamic',
      },
      {
        x: 8,
        y: 0,
        order: 'A',
        type: 'dynamic',
      },
      {
        x: 16,
        y: 0,
        order: 'B',
        type: 'dynamic',
      },
    ],
    sledders: [
      { x: 0, y: 0 },
      // { x: -12, y: 0, asset: 'images.sam_sled' },
      // { x: 12, y: 0, asset: 'images.lunchbox_sled' },
    ],
    sky: {
      asset: 'images.hilbert_swamp_background',
      margin: 1,
    },
  },
  {
    name: 'Convergence 4',
    nick: 'CONVERGENCE_4',
    colors: Colors.biomes.everglades,
    x: -10,
    y: -10,
    requirements: [null],
    defaultExpression: '0',
    goals: [
      {
        x: -16,
        y: 0,
        order: 'A',
        type: 'dynamic',
      },
      {
        x: -12,
        y: 0,
        order: 'B',
        type: 'dynamic',
      },
      {
        x: -8,
        y: 0,
        order: 'C',
        type: 'dynamic',
      },
      {
        x: 8,
        y: 0,
        order: 'A',
        type: 'dynamic',
      },
      {
        x: 12,
        y: 0,
        order: 'C',
        type: 'dynamic',
      },
      {
        x: 16,
        y: 0,
        order: 'B',
        type: 'dynamic',
      },
    ],
    sledders: [
      { x: 0, y: 0 },
      // { x: -12, y: 0, asset: 'images.sam_sled' },
      // { x: 12, y: 0, asset: 'images.lunchbox_sled' },
    ],
    sky: {
      asset: 'images.hilbert_swamp_background',
      margin: 1,
    },
  },
]
