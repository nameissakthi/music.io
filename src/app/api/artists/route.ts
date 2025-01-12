import pool from "@/utils/postgres";
import { NextResponse } from "next/server";

interface Artist{
    name: string;
    profile: string;
    popularLevel: number;
    email: string;
}

export async function GET() {
    try {
        const sql = `SELECT * FROM artists`;
        const result = await pool.query(sql);
        return NextResponse.json({
            success: true,
            artists: result.rows
        });
    } catch (error: any) {
        console.error("Error in GET /api/artists:", error.message);
        return NextResponse.json({
            success: false,
            message: error.message,
        });
    }
}

export async function POST(req:Request){
    let artist = <Artist>{}
    try {
        await req.json().then((res)=>{artist=res})
        const { name, profile, email } = artist
        const popularLevel = 0
        const sql = `INSERT INTO artists(name, email, profile, popularLevel) VALUES($1, $2, $3, $4)`
        const result = await pool.query(sql, [name, email, profile, popularLevel])
        return Response.json({success: true})
    } catch (error:any) {
        console.error("Error in POST /api/artists:", error.message);
        return NextResponse.json({
            success: false,
            message: error.message,
        });
    }
}