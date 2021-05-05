import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>La Société Nouvelle | Services disponibles</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className="main">

        <h1>Services disponibles</h1>

        <div id="services-strip" className="strip">
          <ul id="services">
            <li id="declaration" className="services-item">
              <h3>Déclaration</h3>
              <p>Publier les valeurs des indicateurs de l'Empreinte Sociétale de votre entreprise.</p>
              <p>Nous préconisons une publication annuelle des données à chaque fin d'exercice. Une fois publiées, les données sont modifiables sur simple demande (pour un même exercice).</p>
              <p>Le coût de la formalité de publication est libre. Les frais de publication permettent de financer l'hébergement, la maintenance et le développement de la base de données.</p>
              <a  href="/publication" className="button">Formulaire de déclaration</a>
            </li>
            <li id="declaration-simplifiee" className="services-item">
              <h3>Déclaration simplifiée</h3>
              <p>Ajuster les valeurs des indicateurs de l'Empreinte Sociétale de votre entreprise en publiant vos imapcts directs.</p>
              <p>Du fait de l'analyse incomplète, les incertitudes liées aux valeurs peuvent être élevées, notamment sur les indicateurs environnementaux.</p>
              <p>Le coût de la formalité de publication est libre. Les frais de publication permettent de financer l'hébergement, la maintenance et le développement de la base de données.</p>
              <a href="/publication-simplifiee" className="button">Formulaire de déclaration</a>
            </li>
            <li id="acces-donnees" className="services-item">
              <h3>Accès aux données</h3>
              <p>Les données sont accessibles librement via le portail web ou l'API. Elles peuvent ainsi être directement intégrées au sein de votre ERP, SME ou logiciel de comptabilité.</p>
              <p>Les requêtes se font via le numéro de siren (clef primaire). Un service de recherche par dénomination est également disponible.</p>
              <p>
                <a href="../documentation-api" target="_blank">Lien vers la documentation</a>
              </p>
              <a href="http://api.lasocietenouvelle.org" target="_blank" className="button">Accès à l'API</a>
            </li>
            <li id="mesure-indicateurs" className="services-item">
              <h3>Mesure des indicateurs</h3>
              <p>L'ensemble des documentations, outils et autres supports pour la mesure des indicateurs sont mis à disposition librement. (cf. Ressources)</p>
              <p>Les informations relatives aux indicateurs (description, données par défaut, etc.) sont disponibles à partir de la page Empreinte Sociétale.</p>
              <p>Nous proposons également un service d'audit pour la mesure des indicateurs</p>
              <a className="button" href="https://github.com/SylvainH-LSN/LaSocieteNouvelle-METRIZ" target="_blank">Téléchargement Logiciel</a>
            </li>
          </ul>
        </div>

        <div id="services-partenaires-strip" className="strip">
          <h1>Partenaires</h1>
          <div className="partenaires">
            <img src="/resources/mestawet-logo.jpg" alt="mestawet-logo"/>
            <div className="partenaire-box">
              <p className="partenaire-title">MESTAWET</p>
              <p className="partenaire-presentation">
              Mestawet accompagne les entreprises pour développer des projets à impact positif.<br/>
              La méthode s’appuie sur 4 piliers :<br/>
              - Identifier (Assessment BCorp, Empreinte Sociétale, etc.)<br/>
              - Eclairer : inspirer, montrer les choses qui fonctionnent ailleurs, autour de soi<br/>
              - Concevoir : passer à l’action et tester des choses<br/>
              - Développer : faire grandir les projets, passer à l’échelle<br/>
              </p>
              <p><a href="https://www.mestawet.fr" target="_blank">www.mestawet.fr</a></p>
            </div>
          </div>
        </div>

      </main>

      <Footer/>

    </div>
  )
}
