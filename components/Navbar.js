import logo from '../data/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="flex flex-col justify-between h-screen">
                <header className="flex items-center justify-between py-10">
                    <div>
                        <Link href="/" aria-label="Tailwind CSS Blog">
                            <div className="flex items-center justify-between">
                                <div className="mr-3">
                                    <img src={logo} height="100%" width="200px" />
                                </div>
                            </div>
                        </Link>
                    </div>

                </header>
            </div>
        </div>
    )
}

export default Navbar
