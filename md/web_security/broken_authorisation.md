# Broken Authorisation

Broken authorisation is a group of flaws occurring when granting user access privileges, this is due to ineffective implementation of authorisation checks.

**Impact**

- access unauthorised content, change or delete content, perform functions, and assume full control of site administration.
- Example of breach, [CloudPets](https://www.troyhunt.com/data-from-connected-cloudpets-teddy-bears-leaked-and-ransomed-exposing-kids-voice-messages/).

## Horizontal Authorisation Control

A user gaining access to other users’ accounts that possess equal privileges.

**Example: IDOR**

A user gaining access to other users’ accounts that possess equal privileges.

```
http://vulnerableapp.com/user/account?accountId=7800001
http://vulnerableapp.com/user/account?accountId=7800002
```

## Vertical Authorisation Control

A user gaining access to higher level access, _upwards_ use of access.

```
http://vulnerableapp.com/user/account
http://vulnerableapp.com/admin/panel
```

This occurs when the application doesn’t check the role of the user in session to match with the role that is required to access the resources.

### Preventing

- define policy for what type of users can access the system and what users can and can’t do
- implement Role-based Access Control, to enforce boundaries
- don’t reinvent the wheel, implement Open Source Authorisation frameworks

### Python

#### Django

`request.user` , if user not logged in attribute is set to `AnonymousUser`. check authentication with `User.is_authenticated`.

```Python
def admin_init(request):
  if request.user.is_superuser:
      # Do something for authenticated users.
  else:
      # Do something for anonymous users.
```

#### Flask

Use `Flask-Session`

```Python
from flask import Flask, session, abort
from flask.ext.session import Session

app = Flask(__name__)
app.config.from_object(__name__)
Session(app)

@app.route('/admin/init')
def admin_init():
    if not session.get('user', 'is_superuser')
      abort(401)
    ...
```

### Node.js

#### Express.js

Route to the admin page.

```js
app.use("/admin", function (req, res) {
  res.end("some administrative functionality here...");
});
```

Middleware function that checks the user session.

```js
function check_admin(req, res, next) {
  const username = req.session.user_id;
  if (!username) {
    res.redirect("/login.html?message=Please+log+in");
  } else {
    const user = db.fetchUser(username);
    if (user.is_admin) {
      next(); // next middleware stage or handler
    } else {
      res.redirect("/login.html?message=Administrators+only");
    }
  }
}
```

Adding `check_admin` to endpoint and router.

```js
app.use("/admin", check_admin, function (req, res) {
  res.end("some administrative functionality here...");
});
```

## Authorisation Testing

[OWASP](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/05-Authorization_Testing/README.html)

- Directory Traversal File Include
- Bypassing Authorisation Schema
- Privilege Escalation
- Insecure Direct Object References
