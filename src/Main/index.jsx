import Home from "./Home"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"

export default function Main() {
    return (
        <main>
            <div class="center-container">
                <Home />
                {/* <About /> */}
                <Projects />
                {/* <Contact /> */}
            </div>
        </main>
    )
}