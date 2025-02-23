import { MovieType } from "../types";

function downloadJSON(data: MovieType[], fileName: string) {
  const exportData = data.map(
    ({ Title, Year, Genre, Director, ImdbRating, Actors, Language }) => ({
      Title,
      Year,
      Genre,
      Director,
      ImdbRating,
      Actors,
      Language,
    })
  );
  const jsonString = JSON.stringify(exportData);

  const blob = new Blob([jsonString], { type: "application/json" });

  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;

  link.download = `${fileName}.json`;

  link.click();

  URL.revokeObjectURL(url);
}

export { downloadJSON };
