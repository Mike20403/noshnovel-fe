import nosh_logo from '/src/assets/nosh_logo.png'

export const Navbar = () => {

  return (
    <>
      <div className="navbar-wrapper flex min-h-[1.5rem] bg-app_primary p-2 sticky top-0 z-50">
        <nav className="navbar">
          <a href="/noshnovel-fe" className="navbar-brand flex flex-row items-center">
            <img className="w-[3rem] h-[3rem]" src={nosh_logo} alt="logo" />
            <p className="nosh-logo-text text-2xl">Nosh Novel</p>
          </a>
        </nav>
      </div>
    </>
  )
}