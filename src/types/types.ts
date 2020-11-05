export type Wizard = {
  stepper: number;
  choices: Choice[];
}

export type Choice = {
  value: string;
  stepperValue: number;
  category: ChoiceCategory;
}

export enum ChoiceCategory {
  SkinCareFrequency = ""
}
