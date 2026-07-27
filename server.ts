import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory inquiries store for active session storage
  const inquiries: any[] = [];

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Vihaan Cold Storage", timestamp: new Date().toISOString() });
  });

  app.get("/api/inquiries", (_req, res) => {
    res.json({ success: true, count: inquiries.length, inquiries });
  });

  app.post("/api/inquiries", (req, res) => {
    const { name, phone, cropType, quantity, duration, notes } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone number are required." });
    }
    const newInquiry = {
      id: "VCS-" + Math.floor(100000 + Math.random() * 900000),
      name,
      phone,
      cropType: cropType || "Potatoes",
      quantity: quantity || "100 bags",
      duration: duration || "6 months",
      notes: notes || "",
      createdAt: new Date().toISOString(),
      status: "Received"
    };
    inquiries.unshift(newInquiry);
    res.json({ success: true, inquiry: newInquiry });
  });

  app.post("/api/ai/advise", async (req, res) => {
    try {
      const { crop, question } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.json({
          advice: `For optimal preservation of ${crop || 'agricultural produce'}, Vihaan Cold Storage maintains strict temperature controls (2°C–4°C for seed & table potatoes, 4°C–8°C for agricultural seeds, 85%–95% RH) with continuous air circulation. Contact Vishal Choudhary at +91 8218037615 in Silawar, Shamli for customized chamber allocation.`
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `You are the Expert Cold Storage Agronomist for "Vihaan Cold Storage" located in Silawar, District Shamli, Uttar Pradesh, managed by Vishal Choudhary.
Farmers, traders, and seed growers ask for cold storage guidance, temperature/humidity recommendations, sprout prevention, or market timing advice.
Crop in question: ${crop || 'General Produce'}
User Question: "${question || 'What are the recommended storage parameters and preservation techniques?'}"

Provide a clear, practical, expert cold storage advice in 3-4 bullet points or concise paragraphs. Emphasize Vihaan Cold Storage's advanced preservation technology, safe & hygienic environment, and 24/7 power backup in Silawar, Shamli. Keep the tone helpful, professional, and respectful.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
      });

      res.json({ advice: response.text || "Storage guidance successfully generated." });
    } catch (err: any) {
      console.error("Gemini API error:", err);
      res.json({
        advice: `Vihaan Cold Storage in Silawar, Shamli utilizes advanced refrigeration coils, anti-sprouting humidity regulation, and multi-chamber isolation. Call Vishal Choudhary directly at 8218037615 to reserve your space.`
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Vihaan Cold Storage server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
