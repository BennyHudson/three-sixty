---
to: src/components/<%= name %>/styles/<%= name %>.style.types.ts
---
import type { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'

export interface Styled<%= name %>Props {
  theme: Theme;
}
