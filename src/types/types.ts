export type Wizard = {
  stepper: number;
  plan: WizardPlan;
  choices: Choice[];
}

export type WizardPlan = {
  steps: Question[]
}

export type Question =
  MultipleChoiceQuestion |
  YesNoQuestion;

export type MultipleChoiceQuestion = {
  choices: string;
  questionType: QuestionType;
  page: number;
  step: number;
}

export type YesNoQuestion = {
  questionType: QuestionType;
}

export enum QuestionType {
  MultipleChoice = "MultipleChoice",
  YesNo = "YesNo"
}

export type Choice = {
  value: string;
  stepperValue: number;
  // category: SelectCategory | string;
}

export type WizardItemSelectorType = {

}

// export enum SelectCategory {
//   categoryType
// }

// SkinCareFrequency = ""
// ChoiceCategory
