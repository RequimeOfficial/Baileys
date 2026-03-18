"use strict";

const chalk = require("chalk");
const gradient = require("gradient-string");
const pkg = require("../package.json");

// Info dari package.json
const version = pkg.version || "-";
const updateDate = pkg.update || "Belum ditentukan";
const name = "Requime";

// Branding
const CONTACT = "6287729850738";
const YOUTUBE = "@requime__";
const STATUS = "Sistem aktif dan siap digunakan";
const TAGLINE = "Engine WhatsApp Multi-Device generasi modern";
const FOOTER = "Crafted with precision by Requime";
const LABEL = "REQUIEME CORE";

// Lebar terminal
const termWidth = Math.max(72, Math.min(process.stdout.columns || 80, 110));
const innerWidth = termWidth - 2;

function repeat(char, len) {
  return char.repeat(Math.max(0, len));
}

function stripAnsi(text = "") {
  return text.replace(/\x1B\[[0-9;]*m/g, "");
}

function visibleLength(text = "") {
  return stripAnsi(text).length;
}

function trimVisible(text = "", maxLen = 0) {
  const plain = stripAnsi(text);
  if (plain.length <= maxLen) return text;
  return plain.slice(0, Math.max(0, maxLen - 3)) + "...";
}

function line(text = "", align = "left") {
  const content = trimVisible(text, innerWidth - 2);
  const len = visibleLength(content);
  const space = Math.max(0, innerWidth - 2 - len);

  if (align === "center") {
    const left = Math.floor(space / 2);
    const right = space - left;
    return `│ ${repeat(" ", left)}${content}${repeat(" ", right)} │`;
  }

  if (align === "right") {
    return `│ ${repeat(" ", space)}${content} │`;
  }

  return `│ ${content}${repeat(" ", space)} │`;
}

function topBorder() {
  return `╭${repeat("─", innerWidth)}╮`;
}

function bottomBorder() {
  return `╰${repeat("─", innerWidth)}╯`;
}

function divider(char = "═") {
  return repeat(char, termWidth);
}

function printBanner() {
  const brandGradient = gradient(["#6C5CE7", "#00CEC9", "#A29BFE"]);
  const lineGradient = gradient(["#00B894", "#0984E3", "#6C5CE7"]);
  const accentGradient = gradient(["#FDCB6E", "#E17055", "#D63031"]);

  const title = `✦ ${name.toUpperCase()} • ${LABEL} ✦`;
  const subtitle = `${TAGLINE}`;

  console.log("");
  console.log(lineGradient(divider("═")));
  console.log(brandGradient(title.padStart(Math.floor((termWidth + title.length) / 2)).padEnd(termWidth)));
  console.log(chalk.gray(subtitle.padStart(Math.floor((termWidth + subtitle.length) / 2)).padEnd(termWidth)));
  console.log(lineGradient(divider("═")));
  console.log("");

  const infoLines = [
    line(chalk.bold.hex("#A29BFE")("SYSTEM OVERVIEW"), "center"),
    line(""),
    line(`${chalk.hex("#74B9FF").bold("Project")}   : ${chalk.whiteBright(name)}`),
    line(`${chalk.hex("#55EFC4").bold("Version")}   : ${chalk.whiteBright(version)}`),
    line(`${chalk.hex("#FFEAA7").bold("Release")}   : ${chalk.whiteBright(updateDate)}`),
    line(`${chalk.hex("#FF7675").bold("Status")}    : ${chalk.whiteBright(STATUS)}`),
    line(`${chalk.hex("#E84393").bold("Channel")}   : ${chalk.whiteBright(YOUTUBE)}`),
    line(`${chalk.hex("#0984E3").bold("Contact")}   : ${chalk.whiteBright(CONTACT)}`),
    line(""),
    line(chalk.gray("Optimized for a smoother and more stable runtime"), "center"),
    line(chalk.gray(FOOTER), "center"),
  ];

  console.log(chalk.whiteBright(topBorder()));
  for (const item of infoLines) console.log(item);
  console.log(chalk.whiteBright(bottomBorder()));

  console.log("");
  console.log(accentGradient(` ${"◆".repeat(Math.max(8, Math.floor(termWidth / 9)))} REQUIME SESSION INITIALIZED ${"◆".repeat(Math.max(8, Math.floor(termWidth / 9)))} `));
  console.log("");
}

printBanner();

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));

var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) {
            __createBinding(exports, m, p);
        }
    }
};

var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = exports.makeWASocket = void 0;

const WAProto_1 = require("../WAProto");
Object.defineProperty(exports, "proto", {
    enumerable: true,
    get: function() {
        return WAProto_1.proto;
    }
});

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;