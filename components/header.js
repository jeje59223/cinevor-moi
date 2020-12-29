import React from "react";
import Link from "next/link";

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Cinévor-Moi</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link href="/" passHref>
                    <a className="nav-link" href="#">Accueil
                        <span className="sr-only">(current)</span>
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/bestFilms">
                    <a className="nav-link" href="#">Best-Films</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/auCinema">
                    <a className="nav-link" href="#">A l'affiche</a>
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}
