import fs from "fs";

// Data
import data from "@/../../public/data/footer.json";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    /*
    try {
      fs.writeFile("./public/data/footer.json", JSON.stringify({ "title": req.body.title }) , (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Title updated successfully");
      });
      res.status(200).json({ message: "Title stored successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error storing title" });
    }
    */
  } else {
    res.status(200).json(data)
  }
}
