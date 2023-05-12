import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  /** Login Routes */
  Route.get('/login', 'PortalController.getLoginView')
  Route.post('/login', 'PortalController.emailLogin')

  /** Signup Routes */
  Route.get('/signup', 'PortalController.getSignupView')
  Route.post('/signup', 'PortalController.emailSignup')

  /** Forgot Password Routes */
  Route.get('/forgot-password', 'PortalController.getForgotPasswordView')
  Route.post('/forgot-password', 'PortalController.forgotPasswordSubmission')

  /** Reset Password Routes */
  Route.get('/reset-password', 'PortalController.getResetPasswordView')
  Route.post('/reset-password', 'PortalController.resetPasswordSubmission')

  /** Verify Email Route */
  Route.get('/verify-email', 'PortalController.verifyEmail')
}).prefix('/portal')

Route.group(() => {
  Route.get('/account', 'PortalController.getAccountView')
  Route.get('/logout', 'PortalController.logout')
})
  .prefix('/portal')
  .middleware('auth')
