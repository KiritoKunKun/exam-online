export interface Event {
  id: string;
  date: string | Date;
  limitDate: string | Date;
  createdAt: string | Date;
  limitTime?: number;
}

export interface ExamData {
  answeredItems: number;
  itemsTotal: number;
}

export type ExamType = 'SIMULATED' | 'EXAM';

export interface Exam {
  description: string;
  name: string;
  type: ExamType;
  data?: ExamData;
}

interface Question {
  question: string;
  image: string;
  answers: Answer[];
  answer?: number;
  bookmarked?: boolean;
}

export interface Answer {
  id_question: string;
  value: string;
  disabled?: boolean;
}

export interface Proof {
  id: string;
  events: Event;
  exam: Exam;
  questions: Question[];
}

export interface Student {
  id: string;
  event: Event;
  exam: Exam;
}
