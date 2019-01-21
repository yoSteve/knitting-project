export interface Project {
  id: string;
  owner_id: string;
  // cuff_id;
  // yoke_id;
  name: string;
  is_metric: boolean;
  guage: Guage;
  measurements: Measurements;
  charts?: {
    sleeve_id?: string;
    torso_id?: string;
    yoke_id?: string;
  };
}

export interface Measurements {
  is_standard: boolean;
  chest: number[];
  torso: number[];
  sleeve: number[];
}

export interface Guage {
  custom_guage: boolean;
  needles: number[];
  width: number;
  height: number;
  stitches: number;
  rows: number;
}
