<script module>
  const DEFAULT_GRADIENTS = [
    {
      dur: `2s`,
      values: '1; -2',
      attributeName: 'offset',
      repeatCount: 'indefinite',
      stopColor: '#C0C0C0',
      stopOpacity: '0.5',
      offset: '50%',
    },
    {
      dur: `2s`,
      values: '2; -1',
      attributeName: 'offset',
      repeatCount: 'indefinite',
      stopColor: '#EAEAEA',
      stopOpacity: '0.5',
      offset: '50%',
    },
    {
      dur: `2s`,
      values: '-1; 2',
      attributeName: 'offset',
      repeatCount: 'indefinite',
      stopColor: '#C0C0C0',
      stopOpacity: '0.5',
      offset: '50%',
    },
  ];
</script>

<script lang="ts">
  import { uniqueId } from '../utils';

  interface Props {
    /**
   * SVG Element `height` attribute value
   */
    height?: number | string;
    /**
   * SVG Element `width` attribute value
   */
    width?: number | string;
    /**
   * Unique ID for the `clipPath` element
   */
    clipPathId?: any;
    /**
   * Unique ID for the `linearGradient` element
   */
    linearGradientId?: any;
    /**
   * A11y name to render for this SVG element
   */
    accesibleName?: string;
    /**
   * Gradients to build the placeholder animation.
   *
   * These objects are mapped to `stop` and `animate` SVG object's attributes.
   *
   * Each of them will span a `stop` object, wrapping an `animate` object at
   * the same time.
   */
    gradients?: any;
    children?: import('svelte').Snippet;
  }

  let {
    height = 200,
    width = 200,
    clipPathId = uniqueId('clip_path'),
    linearGradientId = uniqueId('linear_gradient'),
    accesibleName = 'Placeholder',
    gradients = DEFAULT_GRADIENTS,
    children
  }: Props = $props();
</script>

<svg {width} {height}>
  <title>{accesibleName}</title>
  <rect
    clip-path="url(#{clipPathId})"
    style="fill: url(#{linearGradientId});"
    {width}
    {height}
    x="0"
    y="0"
  />
  <defs>
    <!-- Start: Graphical Objects Definitions -->
    <linearGradient id={linearGradientId}>
      {#each gradients as gradient}
        <stop
          stop-color={gradient.stopColor}
          stop-opacity={gradient.stopOpacity}
          offset={gradient.offset}
        >
          <animate
            dur={gradient.dur}
            values={gradient.values}
            attributeName={gradient.attributeName}
            repeatCount={gradient.repeatCount}
          />
        </stop>
      {/each}
    </linearGradient>
    <clipPath id={clipPathId}>
      {#if children}{@render children()}{:else}
        <rect {width} {height} x="0" y="0" rx="0" ry="0" />
      {/if}
    </clipPath>
    <!-- End: Graphical Objects Definitions -->
  </defs>
</svg>
