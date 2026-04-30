const getUsernameInitials = (username: string): string => {
  const separatedNames = username.split(" ");

  const initialsArray = separatedNames.map(
    (nameToEvaluate: string, nameIndex: number) => {
      if (nameIndex > 1) return;
      return nameToEvaluate[0];
    },
  );

  return initialsArray.join("");
};

export default getUsernameInitials;
