# JSNLogWebpack
Showing problem when using JSNLog with angular-cli/webpack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Steps to reproduce error

* `npm install`
* `ng build --aot --prod`

## Output
```
ERROR in ./src/$$_gendir/app/app.module.ngfactory.ts
Module not found: Error: Can't resolve 'jsnlog/Definitions/jl' in 'C:\Users\Horst Zahradnik\Code\JSNLogWebpack\src\$$_gendir\app'
 @ ./src/$$_gendir/app/app.module.ngfactory.ts 13:0-44
 @ ./src/main.ts
 @ multi ./src/main.ts
 ```
