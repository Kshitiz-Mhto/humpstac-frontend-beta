// Fix: Added React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface PipelineStep {
  id: number;
  layer: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

export interface Campaign {
  id: string;
  title: string;
  modality: string[];
  license: string;
  size: string;
  price: string;
  turnaround_days: number;
  contributor_count: number;
}