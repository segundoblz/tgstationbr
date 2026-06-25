GLOBAL_LIST(translation_cache)

/proc/load_translations(locale = "pt-br")
	if(!locale || locale == "en")
		return
	if(GLOB.translation_cache?[locale])
		return
	if(!GLOB.translation_cache)
		GLOB.translation_cache = list()
	GLOB.translation_cache[locale] = list()
	var/base_path = "strings/translations/[locale]"
	for(var/filename in flist("[base_path]/"))
		if(!findtext(filename, ".json"))
			continue
		var/file_path = "[base_path]/[filename]"
		if(!fexists(file_path))
			continue
		var/data = json_decode(file2text(file_path))
		if(!islist(data))
			continue
		for(var/key in data)
			GLOB.translation_cache[locale][key] = data[key]

/proc/T(key, locale)
	if(!locale || locale == "en")
		return key
	if(!GLOB.translation_cache?[locale])
		load_translations(locale)
	var/translated = GLOB.translation_cache?[locale]?[key]
	return translated || key

/proc/T_format(key, locale, ...)
	var/result = T(key, locale)
	for(var/i in 1 to (length(args) - 2))
		result = replacetext(result, "{[i]}", "[args[i + 2]]")
	return result

/proc/client_T(client/C, key)
	if(!C)
		return key
	return T(key, C.i18n_locale)

/client
	var/i18n_locale = "pt-br"
