import pool from "@/utils/postgres";
import { NextResponse } from "next/server";

interface Albums{
    albumName: string;
    artistName: string;
    popularLevel?: number;
    email: string;
}

export async function GET() {
    try {
        const sql = `SELECT * FROM albums`;
        const result = await pool.query(sql);
        return NextResponse.json({
            success: true,
            albums: result.rows
        });
    } catch (error: any) {
        console.error("Error in GET /api/albums:", error.message);
        return NextResponse.json({
            success: false,
            message: error.message,
        });
    }
}

export async function POST(req:Request){
    let albums = <Albums>{}
    try {
        await req.json().then((res)=>{albums=res})
        const { albumName, artistName, email } = albums
        const popularLevel = 0
        const sql = `INSERT INTO albums(albumName, artistName, email, popularLevel) VALUES($1, $2, $3, $4)`
        const result = await pool.query(sql, [albumName, artistName, email, popularLevel])
        return Response.json({success: true})
    } catch (error:any) {
        console.error("Error in POST /api/artists:", error.message);
        return NextResponse.json({
            success: false,
            message: error.message,
        });
    }
}