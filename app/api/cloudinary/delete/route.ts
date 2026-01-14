import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function extractPublicId(url: string) {
  if (!url) return null;
  try {
    const u = new URL(url);
    const parts = u.pathname.split('/');
    const uploadIndex = parts.findIndex((p) => p === 'upload');
    if (uploadIndex === -1) return null;
    // take everything after 'upload'
    let after = parts.slice(uploadIndex + 1).join('/');
    // remove version prefix if present (v123456)
    after = after.replace(/^v\d+\//, '');
    // remove file extension if present
    const dot = after.lastIndexOf('.');
    if (dot !== -1) after = after.substring(0, dot);
    // decode and return
    return decodeURIComponent(after);
  } catch (e) {
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const imageUrl = body?.imageUrl;
    if (!imageUrl) return NextResponse.json({ error: "imageUrl required" }, { status: 400 });
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      return NextResponse.json({ error: "Cloudinary not configured on server" }, { status: 500 });
    }
    const publicId = extractPublicId(imageUrl);
    if (!publicId) {
      return NextResponse.json({ error: "Could not extract public_id from URL" }, { status: 400 });
    }
    const res = await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
    return NextResponse.json({ ok: true, result: res }, { status: 200 });
  } catch (err: any) {
    console.error("/api/cloudinary/delete error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
