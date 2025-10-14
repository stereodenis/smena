export const getFillPercentage = (shift: Shifts.Shift) => {
  return Math.min(100, (shift.currentWorkers / shift.planWorkers) * 100);
};

export const getProgressColor = (shift: Shifts.Shift) => {
  const percentage = getFillPercentage(shift);
  if (percentage >= 100) return '#FF3B30';
  if (percentage >= 80) return '#FF9500';
  return '#34C759';
};
