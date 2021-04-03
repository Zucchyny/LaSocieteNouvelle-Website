var React = require('react');

export default class Header extends React.Component {
  render() {
    return (

    <div className="Header">

      <div id="header">

        <div id="header-strip">
          <a href="/">
          <img id="logo-header" src="/resources/logo_miniature.jpg" alt="logo"/>
          </a>
          <div id="header-name-company">
            <h1 id="company-name-header">La Société Nouvelle</h1>
            <p id="text-header">L'OpenData au service de l'économie</p>
          </div>
          <p className="header-strip-item" id="header-text2">
            Système d'Information extra-financière
          </p>
        </div>

        <div id="menu">
          <ul id="menu-items">
            <li id="menu-item"><a href="/a-propos">A Propos</a></li>
            <li id="menu-item"><a href="/empreinte-societale">Empreinte Societale</a></li>
            <li id="menu-item"><a href="/portail">Portail</a></li>
            <li id="menu-item"><a href="/services">Services</a></li>
            <li id="menu-item">Ressources</li>
            <li id="menu-item">Contact</li>
          </ul>
        </div>

      </div>

    </div>
      
    );
  }
}