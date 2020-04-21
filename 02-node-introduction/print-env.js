'use strict'

/**
 * print all the environement variables
 */

// {'database_url': 'some string'}
// ['database_url', ]

for(const key in process.env) {
    console.log(process.env[key]);
}