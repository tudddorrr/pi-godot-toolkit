---
name: running-gdunit4-tests
description: "Run gdUnit4 (v6) tests: pick suites with `-a`, skip suites or cases with `-i`, read the results. Use when running tests, filtering which tests run, reading test reports, or verifying a code change."
---

# Running gdUnit4 Tests

Requires **gdUnit4 v6.x** (Godot ≥ 4.5) and `addons/gdUnit4/runtest.sh` - v5 uses different CLI flags.

```bash
GODOT_BIN=$(command -v godot) bash addons/gdUnit4/runtest.sh -a <test path>
```

- `-a` adds a suite or directory - target the suites covering your change, not the whole project.
- `-i` ignores a **suite name**, or a single case as `SuiteName:test_name` - not a file path.
- A non-zero exit means failure; a compile error aborts with exit 134 and names the file.
- Scene-runner input tests receive no `InputEvent` headless. Run them with an editor open, or exclude them (exit 103).
- Reports land in `reports/report_<n>/` - `index.html` (human), `results.xml` (JUnit).
