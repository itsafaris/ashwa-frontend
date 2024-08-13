export const WEIGHT_COFF_IMPERIAL = 2.2046;
export const WEIGHT_COFF_METRIC = 0.45359237;
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function isProdMode() {
  return process.env.NODE_ENV === "production";
}

export function toWeightMetric(weight: number): number {
  return weight * WEIGHT_COFF_METRIC;
}

export function toHeightMetric(feet: number, inches: number): number {
  const feetToCm = feet * 30.48;
  const inchesToCm = inches * 2.54;
  return feetToCm + inchesToCm;
}

export function getReadableDateTime(time: number): string {
  const date = new Date(time);

  return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

export function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
