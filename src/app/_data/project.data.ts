import { Project } from '@app/project/state/project.type';

export const PROJECTS: Project[] = [
  {
    id: 'prj000',
    owner_id: 'user1',
    name: 'Standard Sweater',
    is_metric: true,
    guage: {
      custom_guage: false,
      needles: [4, 7, 7],
      width: 10,
      height: 10,
      stitches: 18,
      rows: 24
    },
    measurements: {
      is_standard: true,
      chest: [89, 98, 107, 115],
      torso: [41, 43, 45, 47],
      sleeve: [50, 51, 52, 53]
    }
    // charts
  },
  {
    id: 'prj001',
    owner_id: 'user1',
    name: 'Custom Sweater',
    is_metric: false,
    guage: {
      custom_guage: false,
      needles: [5, 8, 6],
      width: 10,
      height: 10,
      stitches: 12,
      rows: 16
    },
    measurements: {
      is_standard: true,
      chest: [116],
      torso: [48],
      sleeve: [54]
    }
    // charts
  }
];

/*
|--------------------|
^^^^^^^^^^^^^^^^^^^^^^

st / w = R
w = st / R

cuffMeasurement = wrist + 6cm

*/
