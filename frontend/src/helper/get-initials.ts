export const GetInitials = (name: string) => {
  const nameParts = name.split(" ");
  if (nameParts.length === 1) {
    return nameParts[0][0]; // Return the first character if only one name part
  } else {
    return `${nameParts[0][0]}${nameParts[1][0]}`; // Return the initials of the first two parts
  }
};
