export const transformInsertedDate = (insertedAt?: string) => {
  if (!insertedAt) {
    return null;
  }
  const insertedDate = new Date(insertedAt);

  const dateString = insertedDate.toDateString();
  const timeString = insertedDate.toTimeString().split(' ')[0];

  return dateString + ' at ' + timeString;
};
