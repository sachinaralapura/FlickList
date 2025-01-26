import { MovieType } from "../types";

function downloadJSON(data: MovieType[], fileName: string) {
  // extract only few properties of data and export
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
  // convert the data to a JSON string
  const jsonString = JSON.stringify(exportData);

  // create a blob from the JSON string
  const blob = new Blob([jsonString], { type: "application/json" });

  // create a link to allow the user to download the blob
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;

  // configure the download file name
  link.download = `${fileName}.json`;

  // simulate a link click to allow the user to download the blob
  link.click();

  // revoke the blob URL to free up memory
  URL.revokeObjectURL(url);
}

export { downloadJSON };
