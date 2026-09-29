---
name: godot-doc-search
description: Look up Godot Engine and GDScript documentation for the project's exact Godot version. Use when implementing Godot features, planning an implementation, looking up APIs, or finding code examples.
---

# Godot Docs

Look up Godot Engine API documentation and code examples with the `web_search` and `fetch_content` tools.

## 1. Detect the Godot version

Docs are published per minor release, so read `project.godot` and normalize to `major.minor`:

```
[application]
config/features=PackedStringArray("4.7", "Forward Plus")
```

The first feature string is the version - `4.7.1.stable.official.a13da4f` becomes `4.7`. Fall back to `godot --version` if it is missing.

## 2. Fetch class pages

The URL is deterministic once you know the class:

```
https://docs.godotengine.org/en/<version>/classes/class_<classname>.html
```

Class names are lowercase with no `_`: `Area2D` → `class_area2d.html`.

## 3. Search when unsure

Include the version in the query, then fetch the best result:

```
web_search: site:docs.godotengine.org <version> <topic>
```
