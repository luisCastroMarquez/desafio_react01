import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <>
        <Header/>
        <div className="row justify-content-center">
          <div className="col-ml-4 d-flex justify-content-center" >
            {data.cans.map((can) => (
              <Card
                key={can.id}
                image={can.image}
                name={can.name}
                description={can.description}
                text={can.texto}
                color={can.color}
              />
            ))}
          </div>
        </div>
      <Footer />
    </>
  );
};

export default App;
