import logo from "../assets/react.svg";

export default function CategoryCard(props) {
  return (
    <>
      <div className="card">
        <img src={logo} className="card-img-top" alt="Card Logo" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
