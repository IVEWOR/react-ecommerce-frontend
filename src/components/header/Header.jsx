import Container from "../Container";
import Logo from "./Logo";
import Nav from "./Nav";
import Utils from "./Utils";

export default function Header() {
    return (
        <header className="bg-zinc-100">
            <Container>
                <div className="grid grid-cols-3 py-3">
                    <Nav />
                    <Logo />
                    <Utils />
                </div>
            </Container>
        </header>
    )
}