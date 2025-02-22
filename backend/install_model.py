import argostranslate.package

def install_language_model(from_lang="en", to_lang="fr"):
    """Downloads and installs Argos Translate language models."""
    available_packages = argostranslate.package.get_available_packages()
    package_to_install = None

    for package in available_packages:
        if package.from_code == from_lang and package.to_code == to_lang:
            package_to_install = package
            break

    if package_to_install:
        download_path = package_to_install.download()
        argostranslate.package.install_from_path(download_path)
        print(f"Model for {from_lang} → {to_lang} installed successfully.")
    else:
        print(f"No model found for {from_lang} → {to_lang}.")
