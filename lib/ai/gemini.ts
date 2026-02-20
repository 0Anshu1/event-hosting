import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateEventDescription(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(`
      Create a professional, engaging event description for a campus event. 
      Details: ${prompt}
      Make it structured with sections like 'About', 'Agenda', and 'Why Attend?'.
    `);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "Failed to generate description. Please try again.";
  }
}
