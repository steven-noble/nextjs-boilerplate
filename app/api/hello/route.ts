import { NextResponse } from 'next/server'

export async function GET() {
    try {
        return Response.json({ data: 'hello world' })
    } catch {
        return NextResponse.json({
            errors: 'Unauthorized or token has expired',
        })
    }
}
