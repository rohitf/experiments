import requests, random, string
from enum import Enum

HANGMAN_ART = [
    """
 ------
 |    |
 |
 |
 |
 |
 |
 |
 |
----------
""", """
 ------
 |    |
 |    O
 |
 |
 |
 |
 |
 |
----------
""", """
 ------
 |    |
 |    O
 |   -+-
 | 
 |   
 |   
 |   
 |   
----------
""", """
 ------
 |    |
 |    O
 |  \-+-
 |   
 |   
 |   
 |   
 |   
----------
""", """
 ------
 |    |
 |    O
 |  \-+-/
 |   
 |   
 |   
 |   
 |   
----------
""", """
 ------
 |    |
 |    O
 |  \-+-/
 |    |
 |   
 |   
 |   
 |   
----------
""", """
 ------
 |    |
 |    O
 |  \-+-/
 |    |
 |    |
 |   | 
 |   | 
 |   
----------
""", """
 ------
 |    |
 |    O
 |  \-+-/
 |    |
 |    |
 |   | |
 |   | |
 |  
----------
"""
]

# Constant
EMPTY = '_'

class Letter(Enum):
    GUESS = 1
    CORRECT = 2
    DEFAULT = 3

# Helper functions
def print_state():
    guesses = [letter.upper() for letter in [*char_table] if char_table[letter] != Letter.DEFAULT]

    print("\n", HANGMAN_ART[0])
    print("Current state: ", ' '.join(current))
    print("Letters tried so far: ", ' '.join(guesses))
    print("Wrong attempts remaining: ", len(HANGMAN_ART))

def generate_word(length):
    query = '?' * length
    result = requests.get("https://api.datamuse.com/words?sp=" + query).json()
    word = list(result[random.randint(0, len(result) - 1)]["word"])
    return word

# Initialize vars
word_len = random.randint(3, 10)
word = generate_word(word_len)
char_table = {char: Letter.DEFAULT for char in string.ascii_lowercase}

current = [EMPTY] * len(word)

print("\tWelcome to Hangman!")
input("\nPress Enter to begin game: ")

while current != word and HANGMAN_ART:
    print_state()

    # Duplicate guess checking
    guess = input("Guess a letter: ").lower()
    while char_table[guess] != Letter.DEFAULT:
        print("Please try again. This letter has already been tried.")
        guess = input("\nGuess a letter: ")
    char_table[guess] = Letter.GUESS

    # Verify guess
    if guess in word:
        print("\nCorrect! Keep on going! ")
        char_table[guess] = Letter.CORRECT
    else:
        print("\nWrong! Please try again! ")
        del HANGMAN_ART[0]

    # Set current state
    current = [(letter if char_table[letter] == Letter.CORRECT else EMPTY) for letter in word]

if not HANGMAN_ART:
    print("\nYou have been hung for your bad guesses :(")
    print("The word was...", "".join(word))
else:
    print_state()
    print("\nCongratulations! You guessed the word!")

input("\nPress Enter to exit game: ")