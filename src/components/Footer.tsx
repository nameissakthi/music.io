import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <footer className={`w-full flex justify-between px-4 py-1 items-center bg-slate-900/90 mt-1`}>
            <div className="flex items-center gap-0">
                <img src="/logo.png" alt="logo" className="w-28 h-28" />
                <h1 className="text-center text-4xl self-end mb-4 font-bold text-white">Music io</h1>
            </div>
            <div className="flex-1 flex justify-center">
                <div className="grid grid-cols-2 w-[70%]">
                    <div className="flex flex-col items-start self-start">
                        <Button variant={"link"} className="text-white">
                            <Link href="#">Home</Link>
                        </Button>
                        <Button variant={"link"} className="text-white">
                            <Link href="#">About Us</Link>
                        </Button>
                        <Button variant={"link"} className="text-white">
                            <Link href="#">Contact Us</Link>
                        </Button>
                    </div>
                    <div className="flex flex-col items-start">
                        <Button variant={"link"} className="text-white">
                            <Link href="#">Terms & Conditions</Link>
                        </Button>
                        <Button variant={"link"} className="text-white">
                            <Link href="#">Privacy Policy</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <p className="text-white/50 text-sm">&copy; All rights reserved</p>
        </footer>
    )
}