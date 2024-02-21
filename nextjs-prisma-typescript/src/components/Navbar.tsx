import Link from "next/link";

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4">
            <Link href="/">
                <h3 className="text-2x1 font-bold">
                    NextCRUD
                </h3>
            </Link>
            
            <ul>
                <li>                        
                    <Link href="/new" className="text-slade-200 
                    hover:text-slade-400">
                        New
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar