const AuditLog = require('../models/AuditLog');

/**
 * Creates an append-only audit log entry.
 * Call this after every significant admin action.
 *
 * @param {string} action       - Human-readable action description
 * @param {ObjectId} performedBy - The admin user's ID
 * @param {ObjectId} targetId   - The document that was affected
 * @param {string} targetCollection - Which collection was affected
 * @param {Object} meta         - Optional before/after values
 */
const logAction = async (action, performedBy, targetId, targetCollection, meta = {}) => {
  try {
    await AuditLog.create({
      action,
      performedBy,
      targetId,
      targetCollection,
      meta,
    });
  } catch (error) {
    // Audit log failure should never crash the main request
    console.error('Audit log error:', error.message);
  }
};

module.exports = { logAction };