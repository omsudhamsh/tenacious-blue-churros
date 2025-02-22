from install_model import install_language_model

def setup_translation():
    # Install English to French model (default)
    install_language_model("en", "fr")
    
    # If you want to add more language pairs, add them here
    # For example:
    # install_language_model("en", "es")  # English to Spanish
    # install_language_model("fr", "en")  # French to English

if __name__ == "__main__":
    setup_translation()