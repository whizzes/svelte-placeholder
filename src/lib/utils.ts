export function uniqueId(prefix: string) {
  return `${prefix}__${
    Date.now().toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12),
    ).toString(36)
  }`;
}
