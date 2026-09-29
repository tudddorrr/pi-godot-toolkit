// Godot toolkit for pi, active only inside Godot projects (a `project.godot` at or
// above the working directory). Keeps the Godot skills out of every other repo:
// - skills/ is registered on resources_discover, so their descriptions never enter
//   the system prompt elsewhere
// - godot.md is injected as the <godot> system-prompt section before each run
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "..");
const SKILLS_DIR = join(ROOT, "skills");

// Replace godot.md's {{toolkit}} marker with this package's real path.
const RULES = readFileSync(join(ROOT, "godot.md"), "utf-8");
const SYSTEM_PROMPT = RULES.replaceAll("{{toolkit}}", ROOT);

function godotRoot(cwd: string): string | null {
  const dir = resolve(cwd);

  if (existsSync(join(dir, "project.godot"))) {
    return dir;
  }

  const parent = dirname(dir);

  return parent === dir ? null : godotRoot(parent);
}

export default function godot(pi: ExtensionAPI) {
  pi.on("resources_discover", (event) => {
    if (!godotRoot(event.cwd)) {
      return {};
    }

    return { skillPaths: [SKILLS_DIR] };
  });

  pi.on("before_agent_start", (event, ctx) => {
    if (!godotRoot(ctx.cwd)) {
      return;
    }

    event.systemPromptOptions.sections.godot = SYSTEM_PROMPT;
  });
}
