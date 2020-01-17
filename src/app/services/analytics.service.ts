import { Injectable } from "@angular/core";
import {
  Metric,
  AnalyticsImplementation
} from "../analytics-demo/anal-demo.interface";

@Injectable()
export class AnalyticsService {
  privet: string;
  constructor(private implementation: AnalyticsImplementation) {}

  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }
}
