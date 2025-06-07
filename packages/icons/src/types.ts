export type SvgCommonProps = {
   width?: number | string;
   height?: number | string;
   className?: string;
   style?: React.CSSProperties;
   theme?: {
      fill?: string;
      stroke?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
   };
} & React.SVGProps<SVGSVGElement>;
