import Container from "../Container";
import Logo from "./Logo";
import Nav from "./Nav";
import Utils from "./Utils";

export default function Header() {
    return (
        <header className="bg-zinc-100">
            <Container>
                <div className="grid grid-cols-3 py-3">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </button>
                    <Logo />
                    <Utils />
                </div>
            </Container>
        </header>
    )
}