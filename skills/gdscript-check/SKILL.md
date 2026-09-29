---
name: gdscript-check
description: "Validate GDScript changes: compile-check with Godot, then format and lint. Use after creating or editing any .gd file."
---

# GDScript Check

Validate GDScript changes with the project's own tooling - no editor or language server. Run what exists, skip what doesn't.

## Compile

Catches syntax and type errors, autoloads included. Requires `godot` on PATH:

```bash
godot --headless -s <toolkit>/tools/gdcheck.gd -- res://a.gd res://b.gd
```

`<toolkit>` is the path in your `<godot>` section. It prints `OK`/`FAIL` per file and **exits non-zero when any file fails**. Because it runs inside the project, autoload singletons resolve - no false `Identifier not found`.

## Format and lint

Requires `gdscript-formatter` on PATH:

```bash
gdscript-formatter --check <file>
gdscript-formatter lint --pretty <file>
```

## Why not `--check-only`

`godot --headless --check-only --script <file>` parses the script **in isolation**, so autoloads aren't registered and references to them report a false `Identifier not found`. It also exits 0 on parse errors. Use `gdcheck.gd` instead.

## Notes

- Pass `res://…` paths.
- Warnings configured as errors in `project.godot` fail the compile check too.
- Run once after editing all files, or per file while iterating.
