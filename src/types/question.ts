import { Answer } from "./answer";
import { User } from "./user";

export interface QuestionPayload {
  assignee: User;
  title: string;
  description: string;
  category: string;
  complexity: number;
}

export interface Question {
  id?: string;
  assignee: User;
  title: string;
  description: string;
  category: string;
  /** 0 (low) - 5 (high) */
  complexity: number;
  answers: Answer[];
  resolved: boolean;
  resolvedJustification?: string;
  resolvedDate?: Date;
  created?: Date;
  updated?: Date;
}
