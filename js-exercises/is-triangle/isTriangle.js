function isTriangle(sideA, sideB, sideC) {
  return !(sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA);
}
export {
  isTriangle,
};
