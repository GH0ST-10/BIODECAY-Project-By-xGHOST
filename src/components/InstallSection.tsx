import React from 'react';
import { StepItem } from '../types';

const STEPS: StepItem[] = [
  {
    step: 'STEP 01',
    title: 'Download the pack',
    description: 'Hit the download button below. The file starts downloading straight away.'
  },
  {
    step: 'STEP 02',
    title: 'Import it into your launcher',
    description: 'Open your Minecraft launcher of choice and import the downloaded pack file as a new instance.'
  },
  {
    step: 'STEP 03',
    title: 'Launch and survive',
    description: 'Start the instance, create a world, and try to make it through your first night.'
  }
];

export const InstallSection: React.FC = () => {
  return (
    <section id="install">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">// Deployment</p>
          <h2>Three steps to the wasteland.</h2>
        </div>
        <ol className="steps">
          {STEPS.map((step) => (
            <li key={step.step}>
              <span className="step-label">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
