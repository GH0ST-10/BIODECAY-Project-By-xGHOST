export interface DownloadConfig {
  url: string;
  version?: string;
  size?: string;
}

export interface SpecItem {
  label: string;
  value: string;
  isToxic?: boolean;
}

export interface FeatureItem {
  num: string;
  title: string;
  description: string;
  icon: 'skull' | 'backpack' | 'brick-wall' | 'biohazard' | 'crosshair' | 'cloud-fog';
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface ChannelItem {
  platform: string;
  handle: string;
  description: string;
  actionText: string;
  url: string;
  type: 'youtube' | 'discord';
}
