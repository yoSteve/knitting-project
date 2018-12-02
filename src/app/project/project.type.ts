export interface Project {
  id: string;
  // user_id;
  // cuff_id;
  // yoke_id;
  name: string;
  isMetric: boolean;
  guage: Guage;
  measurements: Measurements;
  charts?: {
    sleeve_id?: string;
    torso_id?: string;
    yoke_id?: string;
  };
}

export interface Measurements {
  isStandard: boolean;
  chest: number[];
  torso: number[];
  sleeve: number[];
}

export interface Guage {
  customGuage: boolean;
  needles: number[];
  width: number;
  height: number;
  stitches: number;
  rows: number;
}
