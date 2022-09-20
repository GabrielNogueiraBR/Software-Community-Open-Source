import { Answer } from "./answer";
import { User } from "./user";

export interface Question {
  assignee: User;
  title: string;
  description: string;
  category: QuestionCategory;
  /** 0 (low) - 5 (high) */
  complexity: number;
  answers: Answer[];
  resolved: boolean;
  resolvedJustification?: string;
  resolvedDate?: Date;
  created: Date;
  updated: Date;
}

export enum QuestionCategory {
  TYPESCRIPT="typescript",
  JAVASCRIPT="javascript",
  NEXTJS="next.js",
  DOCKER="docker",
}