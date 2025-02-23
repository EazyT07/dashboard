import CategoryCollection from "./CategoryCollection";

export default function Main() {
  return (
    <>
      <header data-bs-theme="dark">
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <strong>Categories</strong>
            </a>
          </div>
        </div>
      </header>
      <main data-bs-theme="dark" className="main">
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <CategoryCollection />
          </div>
        </div>
      </main>
    </>
  );
}
