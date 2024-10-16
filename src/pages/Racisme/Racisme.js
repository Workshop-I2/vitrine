import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import "./Racisme.css";
import CardCustom from "../../components/CardCustom/CardCustom";

function Racisme() {
  return (
    <div>
      <div>
        <HeadingTitle title="Sensibilisation sur le racisme" />
      </div>
      <div className="card">
        <CardCustom
          url="https://www.youtube.com/embed/lp5L7GSxdF8"
          title="Le racisme ordinaire, c'est leur quotidien"
          desc="Des petites remarques qui tournent au vrai traumatisme, c'est
                  le racisme ordinaire. Elles, c'est leur quotidien. Voilà
                  comment elles le vivent."
        />
        <CardCustom
          url="https://www.youtube.com/embed/1aBFWiFKFMc"
          title="Tous contre le Racisme"
          desc="Vidéo de sensibilisation pour la lutte contre le racisme."
        />
      </div>
    </div>
  );
}

export default Racisme;
