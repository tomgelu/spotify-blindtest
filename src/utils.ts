function lerp(value: number, min: number, max: number): number {
  return (max - value) / (max - min);
}

export { lerp };
