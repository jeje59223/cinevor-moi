import { Layout }  from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <div className="jumbotron mt-5">
          <h1 className="display-3">Bienvenue sur Cinévor-Moi !</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Voir les films</a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Home;