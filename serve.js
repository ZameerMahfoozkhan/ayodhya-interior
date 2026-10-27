/**
 * Zero-Dependency Local Static HTTP Server
 * Serves dist/ directory with clean URLs, proper MIME types, and 404 handling.
 */

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "dist");

const MIME_TYPES = {
  ".html": "text/html; charset=UTF-8",
  ".css": "text/css; charset=UTF-8",
  ".js": "text/javascript; charset=UTF-8",
  ".json": "application/json; charset=UTF-8",
  ".xml": "application/xml; charset=UTF-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json"
};

// Check if dist exists, if not run build first
if (!fs.existsSync(distDir) || !fs.existsSync(path.join(distDir, "index.html"))) {
  console.log("No dist directory found. Triggering initial build...");
  const buildProc = spawn("node", ["build.js"], { stdio: "inherit" });
  buildProc.on("close", (code) => {
    if (code === 0) startServer();
  });
} else {
  startServer();
}

function startServer(port = 3000) {
  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Map clean directory URLs to index.html
    let filePath = path.join(distDir, pathname);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    // Try adding .html if file doesn't exist directly
    if (!fs.existsSync(filePath) && fs.existsSync(filePath + ".html")) {
      filePath = filePath + ".html";
    }

    // If still doesn't exist, serve 404.html
    let statusCode = 200;
    if (!fs.existsSync(filePath)) {
      filePath = path.join(distDir, "404.html");
      statusCode = 404;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 Server Error");
        return;
      }
      res.writeHead(statusCode, {
        "Content-Type": contentType,
        "Cache-Control": "no-cache"
      });
      res.end(data);
    });
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${port} in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error("Server error:", err);
    }
  });

  server.listen(port, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 AYODHYA INTERIORS & EXTERIOR STUDIO LOCAL DEV SERVER`);
    console.log(`🔗 Local URL: http://localhost:${port}`);
    console.log(`📁 Serving directory: ${distDir}`);
    console.log(`======================================================\n`);
  });
}
