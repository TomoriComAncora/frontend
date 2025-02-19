import { Header } from "./components/header";

export default function layoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <>
            <Header></Header>
            {children}
        </>
    )
}
