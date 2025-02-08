import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

// First, you need to manually show your following or followers on the Duolingo website.
// Then, manually download the HTML file to your desktop and name it `input.html`.
// Run this script and it will create `users.txt` on your desktop.

async function extractAndSaveH3Values() {
  try {
    const htmlContent = await Deno.readTextFile(
      `${Deno.env.get("HOME")}/Desktop/input.html`,
    );

    // Parse HTML
    const doc = new DOMParser().parseFromString(htmlContent, "text/html");
    if (!doc) {
      throw new Error("Failed to parse HTML document");
    }

    // Select all h3 elements with the specified classes
    const h3Elements = doc.querySelectorAll("h3._2iA7Q._2jQO8");

    // Extract text content from elements
    const values = Array.from(h3Elements)
      .map((element) => element.textContent.trim())
      .filter((text) => text.length > 0); // Remove empty strings

    // Remove duplicates and sort
    const uniqueSortedValues = [...new Set(values)].sort();

    // Join with newlines
    const outputContent = uniqueSortedValues.join("\n");

    // Write to output file
    await Deno.writeTextFile(
      `${Deno.env.get("HOME")}/Desktop/users.txt`,
      outputContent,
    );

    console.log(
      `Successfully processed ${uniqueSortedValues.length} unique values`,
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
}

// Run the function
await extractAndSaveH3Values();
