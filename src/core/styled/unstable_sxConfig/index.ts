import { borders } from './border';
import { BordersConfig } from './border/border.type';
import { ColorConfig, colors } from './colors';
import { display, DisplayCssConfig, flexCssKey } from './display';
import { DistanceConfig } from './distance';
import distance from './distance/distance';
import { PositionConfig, positionCss } from './position';
import { SpacingConfig, spacingKey } from './spacing';
import typography, { TypographyConfig } from './typography';

/**
 *
 * Đây là cấu hình cho các thuộc tính có thể sử dụng trong các thành phần.
 *
 * @type {Object}
 * @property {Object} spacingKey - Các thuộc tính liên quan đến khoảng cách và padding.
 * @property {Object} distance - Các thuộc tính liên quan đến khoảng cách.
 * @property {Object} colors - Các thuộc tính liên quan đến màu sắc.
 * @property {Object} borders - Các thuộc tính liên quan đến viền.
 * @property {Object} typography - Các thuộc tính liên quan đến kiểu chữ.
 * @property {Object} display - Các thuộc tính liên quan đến hiển thị.
 * @property {Object} overflow - Các thuộc tính liên quan đến tràn.
 * @property {Object} position - Các thuộc tính liên quan đến vị trí.
 * @property {Object} whiteSpace - Các thuộc tính liên quan đến khoảng trắng.
 * @property {Object} visibility - Các thuộc tính liên quan đến độ hiển thị.
 * @property {Object} textTransform - Các thuộc tính liên quan đến biến đổi văn bản.
 * @property {Object} textOverflow - Các thuộc tính liên quan đến tràn văn bản.
 * @property {Object} textAlign - Các thuộc tính liên quan đến căn chỉnh văn bản.
 *
 */

type SxConfigValue = {
   keys: string | string[]; // key hoặc array keys của CSS property
   transform?: string; // optional transform, ví dụ 'spacing'
};

export type UnstableSxConfig = {
   [key: string]: SxConfigValue | object;
};

export const unstable_sxConfig: UnstableSxConfig = {
   ...spacingKey,
   ...distance,
   ...colors,
   ...borders,
   ...typography,
   display,
   positionCss,
   overflow: {},
   whiteSpace: {},
   visibility: {},
   textTransform: {},
   textOverflow: {},
   textAlign: {},
   gap: {
      keys: 'gap',
      transform: 'spacing',
   },
   ...flexCssKey.reduce<Record<string, object>>((acc, item) => {
      acc[item.key] = {};
      return acc;
   }, {}),
} as const;

export interface UnstableSxConfigProps
   extends BordersConfig,
      DistanceConfig,
      ColorConfig,
      DisplayCssConfig,
      PositionConfig,
      SpacingConfig,
      TypographyConfig {}
