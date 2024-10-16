import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import "./CyberHarcelement.css";
import CardCustom from "../../components/CardCustom/CardCustom";

function CyberHarcelement() {
  return (
    <div>
      <div>
        <HeadingTitle title="Sensibilisation sur le cyberharcèlement" />
      </div>
      <div className="card">
        <CardCustom
          url="https://www.youtube.com/embed/fFlDlNyozUY"
          title="Cyber-harcèlement : Marion Séclin raconte son histoire"
          desc='"Si j’ai un conseil à donner à toutes les personnes qui se font harceler en ligne : continuez à faire exactement ce que vous voulez".'
        />
        <CardCustom
          url="https://www.youtube.com/embed/kQhJmErUUlM"
          title="Sensibilisation au cyberharcèlement"
          desc="Collège Simone Veil - CAUFFRY - Catégorie cyber-harcèlement"
        />
      </div>
    </div>
  );
}

export default CyberHarcelement;
