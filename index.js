#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { globby } from "globby";
import { compile } from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkDirectives from "remark-directive";
import remarkGFM from "remark-gfm";
import remarkComment from "@slorber/remark-comment";

////////////////////////////////////////
// Params

const versioned = false;

const cwd = "/Users/sebastienlorber/Desktop/projects/jest";

const include = ["**/*.{md,mdx}", "../docs/**/*.{md,mdx}"];

const exclude = [
  "packages",
  "examples",
  "node_modules",
  //
  "CHANGELOG.md",
  "CODE_OF_CONDUCT.md",
  "CONTRIBUTING.md",
  "README.md",
  "website/README.md",
  "benchmarks/test-file-overhead/README.md",
  //
  versioned ? null : "**/versioned_docs",
].filter(Boolean);

const format = "mdx";

const remarkPlugins = [
  remarkFrontmatter,
  remarkDirectives,
  remarkGFM,
  remarkComment,
];

////////////////////////////////////////
// Script

const allRelativeFilePaths = await globby(include, {
  cwd,
  ignore: exclude,
  // gitignore: true, // Does not work well with relative paths like ../docs
});

console.log(
  "All file paths being checked: " + allRelativeFilePaths.length,
  JSON.stringify(allRelativeFilePaths, null, 2)
);

const allResults = await Promise.all(allRelativeFilePaths.map(processFilePath));

const allErrors = allResults.filter((r) => r.status === "error");
const allSuccess = allResults.filter((r) => r.status === "success");

console.log("Errors: ", allErrors.length);
console.log("Success: ", allSuccess.length);

const outputSeparator = "\n---\n";
const outputs = allErrors.map((error) => {
  return error.errorMessage;
});

console.log(outputSeparator + outputs.join(outputSeparator) + outputSeparator);

////////////////////////////////////////
// Functions

async function processFilePath(relativeFilePath) {
  const filePath = path.resolve(cwd, relativeFilePath);
  try {
    // console.log("filePath", filePath);
    const fileContent = await fs.readFile(filePath);
    // console.log("fileContent", fileContent);
    const result = await compile(fileContent, { format, remarkPlugins });
    // TODO generate warnings for compat options here?
    return { relativeFilePath, status: "success", result };
  } catch (error) {
    const errorMessage = `Error while compiling file ${relativeFilePath}:\n${formatMDXErrorMessage(
      error
    )}`;
    return { relativeFilePath, status: "error", error, errorMessage };
  }
}

function formatMDXErrorMessage(error) {
  let message = `Details: ${error.message}`;

  if (error.line || error.column) {
    let lineColumn = "";
    if (error.line) {
      lineColumn = lineColumn + "Line=" + error.line + " ";
    }
    if (error.column) {
      lineColumn = lineColumn + "Column=" + error.column;
    }
    message = message + "\n" + lineColumn;
  }

  return message;
}
