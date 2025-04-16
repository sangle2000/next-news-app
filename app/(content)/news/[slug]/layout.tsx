export default function NewsDetailLayout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
    return (
        <main>
            {modal}
            {children}
        </main>
    )
}