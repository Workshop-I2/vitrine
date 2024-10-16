import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import "./Sexisme.css";
import CardCustom from "../../components/CardCustom/CardCustom";

function Sexisme() {
  return (
    <div>
      <div>
        <HeadingTitle title="Sensibilisation sur le sexisme" />
      </div>
      <div className="card">
        <CardCustom
          url="https://www.youtube.com/embed/71W0YZT2imY"
          title="C'est quoi le sexisme ? Quel lien avec les violences ?"
          desc="Mini vidéo pédagogique et didactique sur le sexisme : ses manifestations au quotidien dans le couple, au travail, dans l’espace public et son lien direct avec les violences subies par les femmes."
        />
        <CardCustom
          url="https://www.youtube.com/embed/AxapViuF8DM"
          title="Cocovoit - Sexisme Ordinaire (avec Astrid Roos)"
          desc="Cocovoit - Sexisme Ordinaire (avec Astrid Roos)"
        />
      </div>
    </div>
  );
}

export default Sexisme;
