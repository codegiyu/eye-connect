import { ReactNode, SVGProps, type JSX } from 'react';

export interface ChildrenOnly {
  children: ReactNode;
}

export interface TitleAndText {
  title: string;
  text: string;
}

export type SelectorFn<TStore, TResult> = (state: TStore) => TResult;

export type IconComp = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export interface TitleAndIcon {
  title: string;
  Icon: IconComp;
}

export interface SelectOption<T = string> {
  text: string;
  altText?: string;
  value: T;
  disabled?: boolean;
  Icon?: IconComp;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type OneCharString<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends ''
    ? T
    : never
  : never;

export type NumberInString = `${number}`;

export type FormErrors<T extends object> = Partial<Record<keyof T, string[] | undefined>>;

export type ValidObjectTypeKey<T extends object, K> = {
  [X in keyof T]: T[X] extends K ? X : never;
}[keyof T];
