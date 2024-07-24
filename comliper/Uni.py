def set_password():
    global user, pas
    user = input("Enter your desired username: ")
    pas = input("Enter your desired password: ")
    pas = '*' * len(pas)  # to hide the password

def login():
    global user, pas, attempt
    attempt = 0
    while attempt < 3:
        u = input("Username: ")
        p = input("Password: ")
        p = '*' * len(p)  # to hide the password
        if u == user and p == pas:
            print("Login successful!")
            break
        else:
            attempt += 1
            if attempt < 3:
                print(f"Incorrect username or password. You have {3-attempt} attempts left.")
            else:
                print("You have used all your attempts. Exiting...")
                exit()

# Set the username and password
set_password()

# Start the login system
login()