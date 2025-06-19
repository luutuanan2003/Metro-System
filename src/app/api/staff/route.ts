import { connectDB } from '@/lib/mongodb';
import Staff from '@/models/staff.model';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const staff = await Staff.find({});
  return NextResponse.json(staff);
}
