import { AnimeParams } from 'animejs';

export type Easing =
  | 'easeInSine'
  | 'easeOutSine'
  | 'easeInOutSine'
  | 'easeInCirc'
  | 'easeOutCirc'
  | 'easeInOutCirc'
  | 'easeInElastic'
  | 'easeOutElastic'
  | 'easeInOutElastic'
  | 'easeInBack'
  | 'easeOutBack'
  | 'easeInOutBack'
  | 'easeInBounce'
  | 'easeOutBounce'
  | 'easeInOutBounce'
  | 'easeInQuad'
  | 'easeOutQuad'
  | 'easeInOutQuad'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic'
  | 'easeInQuart'
  | 'easeOutQuart'
  | 'easeInOutQuart'
  | 'easeInQuint'
  | 'easeOutQuint'
  | 'easeInOutQuint'
  | 'easeInExpo'
  | 'easeOutExpo'
  | 'easeInOutExpo'
  | 'linear'
  | [number, number, number, number];

export type AnimeValue =
  | {
      value: string | number;
      delay: ((el: Element, index?: number, len?: number) => number) | number;
      duration?:
        | ((el: Element, index?: number, len?: number) => number)
        | number;
      easing?: Easing;
    }
  | string
  | number
  | ((el: Element, index?: number) => string | number);

export interface AnimeProps {
  children?: React.ReactNode;
  delay?: AnimeParams['delay'];
  duration?: ((el: Element, index?: number, len?: number) => number) | number;
  autoplay?: boolean;
  loop?: number | boolean;
  direction?: 'normal' | 'reverse' | 'alternate' | string;
  easing?: Easing;
  elasticity?: number;
  round?: number | boolean;
  component?: React.ElementType;
  begin?: Function;
  update?: Function;
  complete?: Function;

  // DOM
  value?: AnimeValue | AnimeValue[];

  // Transformations
  translateX?: AnimeValue | AnimeValue[];
  translateY?: AnimeValue | AnimeValue[];
  rotate?: AnimeValue | AnimeValue[];
  scale?: AnimeValue | AnimeValue[];

  // CSS
  opacity?: AnimeValue | AnimeValue[];
  color?: AnimeValue | AnimeValue[];
  backgroundColor?: AnimeValue | AnimeValue[];

  //SVG
  points?: AnimeValue | AnimeValue[];
  strokeDashoffset?: AnimeValue | AnimeValue[];

  // Custom Props
  [prop: string]: any;
}

export const PREFIX = '__anime__';
