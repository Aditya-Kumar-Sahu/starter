function classes(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export { classes };
