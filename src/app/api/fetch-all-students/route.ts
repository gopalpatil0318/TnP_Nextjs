import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/options';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user) {
    return NextResponse.json({
      success: false,
      message: 'Not Authenticated'
    }, { status: 401 });
  }

  await dbConnect();

  try {
    // Fetch all users
    const users = await UserModel.aggregate([{ $sample: { size: await UserModel.countDocuments() } }]);

    if (!users || users.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'No Users Found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'All users data retrieved successfully in random sequence',
      users: users
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching users data:', error);
    return NextResponse.json({
      success: false,
      message: 'Error fetching users data'
    }, { status: 500 });
  }
}
