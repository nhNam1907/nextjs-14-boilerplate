import { ReactNode } from 'react';

export enum IRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type IRoute = {
  name: string;
  path: string;
  isPrivate: boolean;
  isSidebar: boolean;
  icon: ReactNode;
  roles: Array<IRole>;
};

export type SelectOption = {
  label: string;
  value: string | number;
  disabled?: boolean;
};

export type SystemState = {
  isLoading: boolean;
};

export enum BREAKPOINT {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  x2xl = 1536,
}
