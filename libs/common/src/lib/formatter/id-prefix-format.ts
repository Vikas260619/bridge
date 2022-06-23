export const IdPrefixFormat = (id: number, prefix = 'COMP') => {
  return prefix + String(id).padStart(3, '0');
};
