import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/options';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';

export async function GET(request: Request): Promise<Response> {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user) {
    return new Response(JSON.stringify({
      success: false,
      message: 'Not Authenticated'
    }), { status: 401 });
  }

  await dbConnect();

  try {
    console.log("username " , session.user.username)
    const user = await UserModel.findOne({ username: session.user.username });
    console.log("user ",user)
    if (!user) {
      return new Response(JSON.stringify({
        success: false,
        message: 'User Not Found'
      }), { status: 404 });
    }

    return new Response(JSON.stringify({
        success: true,
        message: 'User data retrieved successfully',
        user: user
      }), { status: 200 }); 

  } catch (error) {
    console.error('Error fetching user data:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Error fetching user data'
    }), { status: 500 });
  }
}
