const getBackgroundColor = (types: string[]) => {
  const colors: { [key: string]: string } = {
    Bug: "#A7B723",
    Dark: "#75574C",
    Dragon: "#7037FF",
    Electric: "#F9CF30",
    Fairy: "#E69EAC",
    Fighting: "#C12239",
    Fire: "#F57D31",
    Flying: "#70559B",
    Grass: "#74CB48",
    Ground: "#DEC16B",
    Ice: "#9AD6DF",
    Normal: "#AAA67F",
    Poison: "#A43E9E",
    Psychic: "#FB5584",
    Rock: "#B69E31",
    Steel: "#B7B9D0",
    Water: "#6493EB",
  };
  return colors[types[0]] || colors.default;
};

export default getBackgroundColor;
