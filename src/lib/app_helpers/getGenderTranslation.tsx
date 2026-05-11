const genderNames: Record<string, string> = {
  men: "hombres",
  women: "mujeres",
  kid: "niño",
};

const getGenderTranslation = function (gender: string) {
  return genderNames[gender] || "desconocido";
};

export default getGenderTranslation;
