/**
 * Formats a hash address to a more readable string
 * @param {string} address hash string
 * @returns {string} formatted string
 */
export const formatAddress = (address: string | undefined | null) => (
  address ? `${address.substring(0, 4)}...${address.slice(-4)}` : null
);
