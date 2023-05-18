<script context="module">
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
  
  <script>
    import { uniqueId } from '../utils';
  
    /**
     * SVG Element `height` attribute value
     */
    export let height = 200;
  
    /**
     * SVG Element `width` attribute value
     */
    export let width = 200;
  
    /**
     * Unique ID for the `clipPath` element
     */
    export let clipPathId = uniqueId('clip_path');
  
    /**
     * Unique ID for the `linearGradient` element
     */
    export let linearGradientId = uniqueId('linear_gradient');
  
    /**
     * A11y name to render for this SVG element
     */
    export let accesibleName = 'Placeholder';
  
    /**
     * Gradients to build the placeholder animation.
     *
     * These objects are mapped to `stop` and `animate` SVG object's attributes.
     *
     * Each of them will span a `stop` object, wrapping an `animate` object at
     * the same time.
     */
    export let gradients = DEFAULT_GRADIENTS;
  </script>
  
  <svg width="{width}" height="{height}">
    <title>{accesibleName}</title>
    <rect
      clip-path="url(#{clipPathId})"
      style="fill: url(#{linearGradientId});"
      width="{width}"
      height="{height}"
      x="0"
      y="0"
    >
    </rect>
    <defs>
      <!-- Start: Graphical Objects Definitions -->
      <linearGradient id="{linearGradientId}">
        {#each gradients as gradient}
          <stop
            stop-color="{gradient.stopColor}"
            stop-opacity="{gradient.stopOpacity}"
            offset="{gradient.offset}"
          >
            <animate
              dur="{gradient.dur}"
              values="{gradient.values}"
              attributeName="{gradient.attributeName}"
              repeatCount="{gradient.repeatCount}"></animate>
          </stop>
        {/each}
      </linearGradient>
      <clipPath id="{clipPathId}">
        <slot>
          <rect width="{width}" height="{height}" x="0" y="0" rx="0" ry="0"
          ></rect>
        </slot>
      </clipPath>
      <!-- End: Graphical Objects Definitions -->
    </defs>
  </svg>
  