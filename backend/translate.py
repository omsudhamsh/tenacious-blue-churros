import argostranslate.translate

def translate_text(text, from_lang="en", to_lang="fr"):
    """Translates text using Argos Translate."""
    return argostranslate.translate.translate(text, from_lang, to_lang)
