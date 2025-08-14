import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import process from "process";

async function main() {
  const filePath = join(process.cwd(), "../textFile/sampleData.txt");

  try {
    const fileContent = await readFile(filePath, "utf-8");
    const lines = fileContent.trim().split("\n");

    const allUsers = [];

    lines.forEach((line, index) => {
      const [fullname, email, phone] = line.trim().split(/\s+/);

      const user = {
        fullname,
        email,
        phone,
        lineNumber: index + 1,
      };
      allUsers.push(user);
    });

    const jsFileContent = `
export const allUsers = {
  allUsers: ${JSON.stringify(allUsers, null, 2)},
};
    `.trim();

    await writeFile("userData.js", jsFileContent, "utf-8");
    console.log("userData.js has been created with valid users.");
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}

main();
