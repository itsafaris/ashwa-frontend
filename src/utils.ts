export function isProdMode() {
  return process.env.NODE_ENV === "production";
}

export function calculateBMI(
  weight: number,
  height: number,
  system: "metric" | "imperial"
): number {
  return system === "metric"
    ? parseFloat((weight / ((height / 100) * (height / 100))).toFixed(2))
    : parseFloat(((weight * 703) / (height * height)).toFixed(2));
}

export function getMetabolicAge(actualAge: number): number {
  return actualAge + 7;
}

type WeightLossData = {
  startWeight: number;
  endWeight: number;
  startDate: string;
  endDate: string;
};

export function calculateWeightLoss(
  startWeight: number,
  endWeight: number,
  system: "metric" | "imperial"
): WeightLossData {
  const monthNames = [
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

  const imperialCoff = 2.2046;
  const weightLossPerMonth = system === "metric" ? 4.7 : 4.7 * imperialCoff;
  const totalWeightLoss = startWeight - endWeight;

  let monthsNeeded = Math.ceil(totalWeightLoss / weightLossPerMonth);
  if (startWeight <= endWeight) {
    monthsNeeded = 0;
  }

  const startDateObj = new Date();
  const endDateObj = new Date();
  endDateObj.setMonth(startDateObj.getMonth() + monthsNeeded);

  return {
    startWeight,
    endWeight,
    startDate: `${
      monthNames[startDateObj.getMonth()]
    } ${startDateObj.getFullYear()}`,
    endDate: `${monthNames[endDateObj.getMonth()]} ${endDateObj.getFullYear()}`,
  };
}
