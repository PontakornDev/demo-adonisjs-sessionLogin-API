/**
 * Contract source: https://git.io/JOdz5
 *
 * Feel free to let us know via PR, if you find something broken in this
 * file.
 */

declare module '@ioc:Adonis/Addons/Auth' {

  interface ProvidersList {

    user: {
      implementation: DatabaseProviderContract<DatabaseProviderRow>
      config: DatabaseProviderConfig
    }

  }

  interface GuardsList {

    web: {
      implementation: SessionGuardContract<'user', 'web'>
      config: SessionGuardConfig<'user'>
    }
  }
}
