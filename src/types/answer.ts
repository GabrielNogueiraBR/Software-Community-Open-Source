import { User } from "./user";

export interface Answer {
  assignee: User;
  answer: string;
  positiveRatingQty: number;
  negativeRatingQty: number;
  created?: Date;
  updated?: Date;
}
