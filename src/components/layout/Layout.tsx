import { type ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type ILayout = {
    children?: ReactNode
}

export default function Layout({ children }: ILayout) {
    return (
        <div className="flex min-h-screen w-full">
            <aside className="w-75 bg-white border-r shrink-0">
                <Sidebar />
            </aside>

            <div className="flex-1 flex flex-col min-w-0 w-full">
                <Header />

                <main className="bg-indigo-50 w-full flex-1 p-5">
                    {children}
                </main>
            </div>
        </div>
    )
}