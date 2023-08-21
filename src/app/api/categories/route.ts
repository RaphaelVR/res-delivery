import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";
// ALL CATEGORIES 

export const GET = async () => {
  try {

    const categories = await prisma.category.findMany();
    return new NextResponse(
      JSON.stringify(categories),
      { status: 200}
    );

  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!"}),
      { status: 500 }
    );
  }
};


// import { prisma } from "@/utils/connect";
// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";


// // FETCH ALL CATEGORIES
// export const GET = async () => {
//   try {
//     const categories = await prisma.category.findMany();
//     return new NextResponse(JSON.stringify(categories), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }),
//       { status: 500 }
//     );
//   }
// };