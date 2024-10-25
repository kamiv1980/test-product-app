import Navbar from './Navbar';
import {ReactNode} from "react";

interface MyComponentProps {
    children: ReactNode; // Explicitly define the type for children
}

export default function Layout ({ children }: MyComponentProps) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
