function permutePunc(str) {
  const variants = [];
  for (let i = 0; i < 2 ** (str.length - 1); i++) {
    let variant = str[0] || "";
    [...i.toString(2).padStart(str.length - 1, "0")].forEach((el, i) => {
      variant += (el == 0 ? "" : ".") + (str[i + 1] || "");
    });
    variants.push(variant);
  }
  return variants;
}

console.log("Need this result:", permutePunc("Hello"));
