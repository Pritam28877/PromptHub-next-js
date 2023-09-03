import { connectToDB } from "@utils/db";
export const post = async (req, res) => {
  const { userID, prompt, tag } = await req.json();

  try {
    await connectToDB();
  } catch (error) {}
};
