<div>
  <div align="center" style="display: block; text-align: center;">
    <img alt="Example" src="docs/example.gif" width="120" />
  </div>
  <h1 align="center">Svelte Content Placeholder</h1>
  <h4 align="center">
    Replicate components with shadow versions while content is not
    yet available
  </h4>
</div>

<div align="center">

![Build](https://github.com/EstebanBorai/svelte-content-placeholder/workflows/build/badge.svg)
![Lint](https://github.com/EstebanBorai/svelte-content-placeholder/workflows/lint/badge.svg)
![Test](https://github.com/EstebanBorai/svelte-content-placeholder/workflows/test/badge.svg)
[![Version](https://img.shields.io/npm/v/svelte-content-placeholder.svg?style=flat)](https://www.npmjs.com/package/svelte-content-placeholder)
[![Downloads](https://img.shields.io/npm/dm/svelte-content-placeholder.svg?style=flat)](https://www.npmjs.com/package/svelte-content-placeholder)

</div>

> **Warning**: Package under construction. API is subject to changes.

## Usage

```svelte
<script>
  import Placeholder from 'svelte-content-placeholder';
</script>

<Placeholder>
  <circle cx="50" cy="30" r="30"></circle>
  <rect x="10" y="70" rx="3" ry="3" width="40" height="10"></rect>
  <rect x="60" y="70" rx="3" ry="3" width="70" height="10"></rect>
  <rect x="140" y="70" rx="3" ry="3" width="20" height="10"></rect>
  <rect x="10" y="90" rx="3" ry="3" width="90" height="10"></rect>
  <rect x="110" y="90" rx="3" ry="3" width="70" height="10"></rect>
  <rect x="10" y="110" rx="3" ry="3" width="70" height="10"></rect>
  <rect x="90" y="110" rx="3" ry="3" width="60" height="10"></rect>
</Placeholder>
```
