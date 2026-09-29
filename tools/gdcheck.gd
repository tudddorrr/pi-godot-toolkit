# Compile-check GDScript files with autoloads registered (see the gdscript-check skill).
#
#   godot --headless -s <toolkit>/tools/gdcheck.gd -- res://a.gd res://b.gd
#
# Exits 0 when every file compiles, 1 otherwise. can_instantiate() is the signal: true
# for valid scripts (including abstract ones), false when the script failed to parse.
extends SceneTree

func _initialize() -> void:
	var failed := 0

	for path in OS.get_cmdline_user_args():
		var script := ResourceLoader.load(path, "", ResourceLoader.CACHE_MODE_IGNORE) as GDScript
		var ok := script != null and script.can_instantiate()

		if ok:
			print("OK: ", path)
		else:
			failed += 1
			print("FAIL: ", path)

	quit(1 if failed > 0 else 0)
