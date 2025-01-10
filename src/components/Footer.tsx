import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col md:flex-row justify-between p-4 items-center bg-slate-900/90 mt-1">
            <div className="sm:w-full md:flex-1 flex flex-col justify-center items-center sm:flex-row mb-3 md:mb-0 sm:gap-10 md:gap-0">
                <div className="flex items-center gap-0 mb-3 sm:mb-0">
                    <img src="/logo.png" alt="logo" className="w-16 sm:w-28" />
                    <h1 className="text-center text-2xl sm:text-3xl self-end mb-3 font-bold text-white">Music io</h1>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="grid grid-cols-2 w-full md:w-[70%]">
                        <div>
                            <h1 className="font-semibold text-lg">Useful Links</h1>
                            <div className="flex flex-col items-start self-start">
                                <Button variant={"link"} className="text-white/80">
                                    <Link href="#">Home</Link>
                                </Button>
                                <Button variant={"link"} className="text-white/80">
                                    <Link href="#">About Us</Link>
                                </Button>
                                <Button variant={"link"} className="text-white/80">
                                    <Link href="#">Contact Us</Link>
                                </Button>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-lg">Safety & Privacy</h1>
                            <div className="flex flex-col items-start">
                                <Button variant={"link"} className="text-white/80">
                                    <Link href="#">Terms & Conditions</Link>
                                </Button>
                                <Button variant={"link"} className="text-white/80">
                                    <Link href="#">Privacy Policy</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-white/50 text-sm">&copy; All rights reserved</p>
        </footer>
    )
}