/** These are the default Guage and Measurements for a Lopi sweater from the Istex 2011 pattern.
 * All measurements are in millimetres.
 * Conversion to Imperial is done by ProjectService. */

import { Guage } from '@app/project/project.type';
import { Measurements } from '@app/project/project.type';

export interface Defaults {
  guage: Guage;
  measurements: Measurements;
}

const standardChest = [89, 98, 107, 115],
  chestChild = [80, 89],
  torsoMen = [41, 43, 45, 47],
  torsoWomen = [38, 40, 42, 44],
  torsoChild = [34, 38],
  SleeveMen = [50, 51, 52, 53],
  sleeveWomen = [46, 47, 48, 49],
  sleeveChild = [38, 42];

export const LOPI_DEFAULTS: Defaults = {
  guage: {
    custom_guage: false,
    needles: [4.5, 7, 7], // [mm, US, UK]
    width: 10,
    height: 10,
    stitches: 18,
    rows: 24
  },
  measurements: {
    is_standard: true,
    chest: [...chestChild, ...standardChest],
    torso: [...torsoChild, ...torsoWomen, ...torsoMen],
    sleeve: [...sleeveChild, ...sleeveWomen, ...SleeveMen]
  }
};

/**
 * horizontal_guage: stitches / width
 * vertical_guage: rows / height
 * sleeve_height: vertical_gauge * measurements.sleeve
 */
