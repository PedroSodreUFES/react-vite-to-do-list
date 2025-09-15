import Container from "../components/Container";
import TaskList from "../core-components/TaskList";
import TasksSummary from "../core-components/TasksSummary";

export default function PageHome() {
    return (
        <Container as="article" className="space-y-3">
            <header className="flex items-center justify-between">
                <TasksSummary />
            </header>
            
            <TaskList />
        </Container>
    )
}