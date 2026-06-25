/// Selects the language used for the game's interface and messages (i18n).
/// This is a player-level preference applied directly to the client.
/datum/preference/choiced/ui_locale
	category = PREFERENCE_CATEGORY_GAME_PREFERENCES
	savefile_key = "ui_locale"
	savefile_identifier = PREFERENCE_PLAYER

/datum/preference/choiced/ui_locale/init_possible_values()
	return list("pt-br", "en")

/datum/preference/choiced/ui_locale/create_default_value()
	return "pt-br"

/datum/preference/choiced/ui_locale/compile_constant_data()
	var/list/data = ..()

	data[CHOICED_PREFERENCE_DISPLAY_NAMES] = list(
		"pt-br" = "Português (BR)",
		"en" = "English",
	)

	return data

/datum/preference/choiced/ui_locale/apply_to_client(client/client, value)
	if(!istype(client))
		return

	client.i18n_locale = value

	// Make sure the chosen locale's translations are loaded server-side.
	load_translations(value)

	// Push a full update to any open TGUI windows so the new locale
	// propagates through the config payload immediately.
	for(var/datum/tgui/tgui as anything in client.mob?.tgui_open_uis)
		tgui.send_full_update(force = TRUE)
