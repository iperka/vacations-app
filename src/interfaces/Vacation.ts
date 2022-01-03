import { Moment } from "moment";

export interface Vacation {
  uuid: string;
  name: string;
  startDate: Moment;
  endDate: Moment;
  days: number;
  status: VacationStatus;
  owner: string;
  created: Moment;
  updated: Moment;
}

export enum VacationStatus {
  requested,
}
