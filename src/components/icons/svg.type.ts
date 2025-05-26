export type SvgCommonProps = {
   width?: number | string;
   height?: number | string;
   className?: string;
   style?: React.CSSProperties;
   theme?: {
      fill?: string;
      stroke?: string;
      [key: string]: any;
   };
} & React.SVGProps<SVGSVGElement>;
