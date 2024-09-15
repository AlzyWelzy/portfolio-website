// route to directly download my resume as pdf

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    const filePath = path.join(process.cwd(), "public", "Manvendra_Rajpoot_Resume.pdf");

    try {
        const fileBuffer = fs.readFileSync(filePath);
        const response = new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `inline; filename="Manvendra_Rajpoot_Resume.pdf"`,
            },
        })

        return response;
    } catch (error) {
        return NextResponse.error();
    }


}