import React from 'react';

const TravelerChart = () => {
  return (
    <div className="wrap">
      <div className="fullChart">
        <div className="warning">
          Un voyage dans le temps n’est pas un voyage comme les autres,
          certaines mesures doivent être respectées, et certaines précautions
          sont nécessaires avant, pendant et après votre voyage.
        </div>
        <div className="underline firstUnderline" />
        <div className="chartArticle">
          Ne tuez pas n’importe qui. Certains de nos séjours vous permettent de
          découvrir des temps troublés de notre passé, à l’époque où on a la
          fâcheuse manie de tuer son voisin. Attention toutefois à ne pas créer
          le fameux paradoxe qui consiste à tuer votre ancêtre, qui ne pourra
          donc pas engendrer vos aïeuls, vous ne pourrez donc pas voir le jour
          et effectuer ce beau voyage…
        </div>
        <div className="underline chartUnderlines" />
        <div className="chartArticle">
          Vous devez rester dans l’espace géographique et à l’époque déterminée
          pour votre voyage. Afin d’assurer votre rapatriement en toute
          sécurité, il est strictement interdit d’essayer d’échapper à ces
          délimitations spatio-temporelles.
        </div>
        <div className="underline chartUnderlines" />
        <div className="chartArticle">
          Non, vous ne pourrez pas tuer Hitler. D’autres ont déjà essayé avant
          vous, et rien ne sort jamais de bon de cette tentative.
          <br />
          Ceci est valable pour tout tyran qui vous viendrait en tête.
        </div>
        <div className="underline chartUnderlines" />
        <div className="chartArticle">
          Vous ne pourrez engendrer de descendance pendant votre voyage. Inutile
          d’essayer de changer le cours de l’histoire grâce à votre génétique
          que vous pensez hors du commun. Pour cette mesure, vous trouverez dans
          le contrat à ratifier avant votre départ un accord signé de votre part
          pour vous administrer un contraceptif par intraveineuse, avec une
          efficacité d’une semaine, à renouveler donc pour les voyages plus
          longs. Vous n’êtes cependant pas immunisés aux diverses infections
          sexuelles, protégez-vous.
        </div>
        <div className="underline chartUnderlines" />
        <div className="chartArticle">
          Avant chaque voyage, selon l’époque, des vaccins obligatoires sont à
          prévoir, afin de prévenir le retour de maladies éradiquées que l’on ne
          souhaiterait retrouver à l’époque actuelle (peste noire, covid19,
          fièvre typhoïde par exemple).
        </div>
      </div>
    </div>
  );
};

export default TravelerChart;
