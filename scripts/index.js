document.getElementById('registerForm').addEventListener('submit', SubmitReg);
document.getElementById('loginForm').addEventListener('submit', SubmitLogin);
document.getElementById('toggleForm').addEventListener('click', SwitchAuth);

function SwitchAuth(e)
{
    if (e != null) e.preventDefault();
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const authTitle = document.getElementById('authTitle');

    if (registerForm.style.display === "none") 
    {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
        authTitle.innerText = "Sign up";
    } 
    else 
    {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        authTitle.innerText = "Sign in";
    }
}

function SubmitLogin(e)
{
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (localStorage.getItem(username) == password)
    {
        document.getElementById('message').textContent = 'Successfully signed in!';
        document.getElementById('message').style.color = 'green';
    } 
    else 
    {
        document.getElementById('message').textContent = 'Incorrect username or password!';
        document.getElementById('message').style.color = 'red';
    }
}

function SubmitReg(e)
{
    e.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (localStorage.getItem(username)) 
    {
        document.getElementById('message').textContent = 'User already registered!';
        document.getElementById('message').style.color = 'red';
    } 
    else 
    {
        localStorage.setItem(username, password);
        document.getElementById('message').textContent = 'Signed up successfully!';
        document.getElementById('message').style.color = 'green';
        SwitchAuth(null);
    }
}