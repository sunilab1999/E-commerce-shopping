import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-red-600">Not Found – 404!</h1>
            <div className="mt-4">
                <Link href="/">
                    <p className="text-blue-500 hover:underline">Go back to Home</p>
                </Link>
            </div>
        </div>
    );
}
