import { connectDB } from "@/app/lib/dbConnect";

export async function POST(request) {
  try {
    await connectDB();
    const obj = await request.json();
    return Response.json(obj);
  } catch (error) {
    console.log(error);
  }
}
