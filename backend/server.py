from flask import Flask, request, jsonify
from translate import translate_text
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React Native to communicate with Flask

@app.route("/translate", methods=["POST"])
def translate():
    data = request.json
    text = data.get("text", "")
    from_lang = data.get("from_lang", "en")
    to_lang = data.get("to_lang", "fr")
    
    if not text:
        return jsonify({"error": "No text provided"}), 400
    
    translated_text = translate_text(text, from_lang, to_lang)
    return jsonify({"translated_text": translated_text})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # Run on local network
