// Suppress noisy "Invalid source map" / "sourceMapURL could not be parsed" warnings in dev logs.
//
// This is a small dev helper — не видаляє реальної причини. Для production/long-term
// краще оновити пакети або видалити/замінити некоректні .map файли.
const origEmitWarning = process.emitWarning;
process.emitWarning = (warning, ...args) => {
  try {
    const msg = typeof warning === "string" ? warning : (warning && warning.message) || "";
    if (msg.includes("Invalid source map") || msg.includes("sourceMapURL could not be parsed")) {
      return; // swallow this noisy warning
    }
  } catch (e) {
    // fall through to original
  }
  return origEmitWarning.call(process, warning, ...args);
};

// Optional: also filter console.warn lines that include the same text
const origConsoleWarn = console.warn;
console.warn = (...args) => {
  try {
    const txt = args.map(a => (typeof a === "string" ? a : JSON.stringify(a))).join(" ");
    if (txt.includes("Invalid source map") || txt.includes("sourceMapURL could not be parsed")) {
      return; // swallow noisy console warning
    }
  } catch (e) {
    // fallback to original
  }
  return origConsoleWarn.apply(console, args);
};
