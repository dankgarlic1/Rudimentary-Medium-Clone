export const GetInitials = (name: string) => {
  const nameParts = name.split(" ");
  if (nameParts.length === 1) {
    return nameParts[0][0].toUpperCase(); // Return the first character if only one name part
  } else {
    return `${nameParts[0][0].toUpperCase()}${nameParts[1][0].toUpperCase()}`; // Return the initials of the first two parts
  }
};
