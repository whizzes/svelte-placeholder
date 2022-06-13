import { render, cleanup } from '@testing-library/svelte';
import { expect, afterEach, describe, it } from 'vitest';

import Placeholder from '../../src';

describe('Placeholder', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders a placeholder w/o props', () => {
    const placeholderEl = render(Placeholder);

    expect(placeholderEl).toBeTruthy();
  });
});
