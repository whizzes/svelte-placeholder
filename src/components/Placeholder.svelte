<script>
  export let height = 200;
  export let width = 200;
</script>

<svg width="{width}" height="{height}">
  <rect width="{width}" height="{height}">
    <animate
      attributeName="rx"
      values="0;100;0"
      dur="10s"
      repeatCount="indefinite"></animate>
  </rect>
</svg>
