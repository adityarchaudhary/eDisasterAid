/**
 * Priority Score Formula:
 * Score = (Severity × 4) + (FamilySize × 2) + VulnerabilityBonus
 * VulnerabilityBonus: +3 if elderly/disabled present, +2 if children under 10
 * Max score capped at 100
 */

const calculatePriorityScore = ({ severity, familySize, hasElderly, hasChildren }) => {
  let score = 0;

  // Severity contributes most — urgency of the situation
  score += (severity || 0) * 4;

  // Family size — larger families = more people affected
  score += (familySize || 0) * 2;

  // Vulnerability bonus — ethical weighting for most at-risk
  if (hasElderly) score += 3;
  if (hasChildren) score += 2;

  // Cap at 100 for normalization
  return Math.min(score, 100);
};

module.exports = { calculatePriorityScore };