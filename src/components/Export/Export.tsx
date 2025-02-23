import svg from "../../assets/export1.svg";
import { MovieType } from "../../types";
import { downloadJSON } from "../../Utils";

export default function Export({ watched }: { watched: MovieType[] }) {
  return (
    <span
      className="btn-export"
      onClick={() => downloadJSON(watched, "movies")}
    >
      <img src={svg} alt="export" className="svg-export" />
    </span>
  );
}
