import { AppShell } from "@mantine/core";
import Header from "../SharedComponents/Header";
import { Dashboard } from "../Dashboard";

const App = () => (
  <AppShell
    padding="md"
    header={<Header />}
    styles={(theme) => ({
      main: {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
      },
    })}
  >
    <Dashboard />
  </AppShell>
);

export default App;
