# Pi Godot toolkit

An all-in-one extension for using Godot with [pi](https://pi.dev).

It helps agents write better, more maintainable GDScript and automate common tasks without being prompted to.

The extension activates only inside a Godot project, where it discovers the skills and adds a short task → skill map to pi's instructions.

## Features

- **Best practices** - code and scenes follow Godot's [best practices advice](https://docs.godotengine.org/en/stable/tutorials/best_practices/index.html).
- **Task automation** - skills for researching APIs, moving `.gd` files, and running tests.
- **Verification** - GDScript is compiled by Godot itself, so autoloads resolve and the errors are real.
- **gdUnit4** - support for writing and running unit tests.

## Requirements

- Godot Engine 4.x (resolved via `GODOT_BIN` or `PATH`).

## Optional

- [gdUnit4 (6.x)](https://github.com/godot-gdunit-labs/gdUnit4) - agents will write and run unit tests.
- [GDQuest GDScript formatter](https://github.com/GDQuest/GDScript-formatter) - agents will check and lint `.gd` files.

## Installation

```bash
pi install npm:pi-godot-toolkit
```

Or add it to `settings.json` under `packages`:

```json
{ "packages": ["npm:pi-godot-toolkit"] }
```

### Verify

- Type `/` to browse the skills, or load one with `/skill:<name>`.
- Or just ask: "run the tests for `test/settings`", "what signals does `Area2D` emit?", "rename this script".

## Skills

- `godot-best-practices` - follow best practices when writing or reviewing code.
- `godot-doc-search` - API research based on your project's Godot version.
- `gdscript-check` - compile, format, and lint `.gd` files.
- `gdscript-file-manager` - move/rename/delete `.gd` files with their `.uid` companions.
- `running-gdunit4-tests` - run gdUnit4 tests.
- `writing-gdunit4-tests` - write gdUnit4 test suites.
