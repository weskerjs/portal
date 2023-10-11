## portal

This package scaffolds the following for Adonis web applications:  
✅ Sign up and Sign in flows  
✅ Password Reset flow  
✅ Verify Email flow  

## Prerequisites

- `@adonisjs/auth` -> Lucid Provider & Web Guard
- Auth middleware added in `start/kernel.ts`
- `tailwindcss` -> Used in Portal's .edge files (though you're free to restyle them)

## Install

1. `npm i @adonisaddons/portal`
2. Add the following to your .adonisrc.json file

```
"directories": {
    "app": "app"
}
```

3. `node ace configure @adonisaddons/portal`
4. Import `start/portal.ts` file into `start/routes.ts` file to add portal's routes to your app
5. Change `redirectTo` in `middleware/auth.ts` to `/portal/login`

## Notes

- This package doesn't send emails but instead emits events that you can tie into your email logic.  
- Additionally, Portal assumes you have a users table without a `name` column and generates a migration for it.  
- You will probably need to update your User model with the two new fields this package adds; `name` and `email_verified`  

## Images

![Signup](https://i.imgur.com/HK0eX7D.png)
![Login](https://i.imgur.com/jfckeVw.png)
![Forgot Password](https://i.imgur.com/WonR2LK.png)
![Reset Password](https://i.imgur.com/Lm09UmU.png)
