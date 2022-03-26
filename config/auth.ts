/**
 * Config source: https://git.io/JY0mp
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import { AuthConfig } from '@ioc:Adonis/Addons/Auth'

/*
|--------------------------------------------------------------------------
| Authentication Mapping
|--------------------------------------------------------------------------
|
| List of available authentication mapping. You must first define them
| inside the `contracts/auth.ts` file before mentioning them here.
|
*/
const authConfig: AuthConfig = {
  guard: 'web',

  guards: {
    web: {
      driver: 'session',

      provider: {
        driver: 'database',
        identifierKey: 'id',
        uids: ['email'],
        usersTable: 'users',
        connection: 'mysql',
        hashDriver: 'argon',
      },
    },
  },
}

export default authConfig
