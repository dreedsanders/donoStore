/** Matches category bucketing used in {@link topCategoriesFromItems}. */
export function normalizeCategoryName(category) {
  const raw = category != null ? String(category).trim() : "";
  return raw || "Other";
}

/**
 * Unique category counts from items, sorted by frequency (desc), capped at `limit`.
 */
export function topCategoriesFromItems(items, limit = 5) {
  if (!Array.isArray(items) || items.length === 0) return [];

  const counts = {};
  items.forEach((item) => {
    const cat = normalizeCategoryName(item && item.category);
    counts[cat] = (counts[cat] || 0) + 1;
  });

  return Object.entries(counts)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, limit);
}
