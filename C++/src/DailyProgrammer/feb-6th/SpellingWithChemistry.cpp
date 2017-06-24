#include <iostream>
#include <map>
#include <string>
#include <list>

using namespace std;

// Hash map containing the elements and their symbols (partial table).
map<string, string> periodicTable {
	{ "Ac", "Actinium" },
	{ "Al", "Aluminum" },
	{ "Am", "Americium" },
	{ "Sb", "Antimony"},
	{ "Ar", "Argon" },
	{ "As", "Arsenic" },
	{ "At", "Astatine" }
};

// List of words the user entered.
list<string> words;

/**
 * Run function to be called by main.
 */
void run() {

	bool flag = false;

	while(!flag) {

		// Prompt user for input.
		cout << "Enter a word: ";
		string word = "";
		getline(cin, word);
		words.push_back(word);

		cout << endl;

		cout << "Enter another word? (y or n): ";
		string answer = "";
		getline(cin, answer);
		cout << endl;

		if (answer == "n") { flag = true; }

	}

	// Check for elements.
	string response = "(";

	// While there are still words to check.
	while(!words.empty()) {

		string currentWord = words.front();

		// Traverse the word in 2 character increments.
		for (unsigned int index = 0; index < currentWord.length(); index+=2) {

			if (periodicTable.find(currentWord.substr(index, index + 2)) != periodicTable.end()) {
				response += periodicTable.find(currentWord.substr(index, index + 2))->second;
				response += " ";
			}

		}

		words.pop_front();

	}

	// If no matches were found.
	if (response == "(") { response = "No elements were found."; }
	else { response += ")"; }

	cout << response;


} // end run.
