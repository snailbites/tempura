System.config({
    "baseURL": "/",
    "bundles": {
        "dist/tempura.js": [
            "src/app.ts",
            "src/pop-over/pop-over-directive.ts",
            "src/typeahead/template/typeahead-match.html!github:systemjs/plugin-text@0.0.7.js",
            "src/typeahead/template/typeahead-popup.html!github:systemjs/plugin-text@0.0.7.js",
            "src/typeahead/typeahead-match.ts",
            "src/typeahead/typeahead-parser.ts",
            "src/typeahead/typeahead-popup.ts",
            "src/typeahead/typeahead.ts",
            "src/utility/debounce.ts",
            "src/utility/position.ts"
        ],
        "javascript/demo.js": [
            "demo/bootstrapper.js",
            "demo/example.js",
            "demo/popover1.tpl.html!github:systemjs/plugin-text@0.0.7.js",
            "demo/popover2.tpl.html!github:systemjs/plugin-text@0.0.7.js",
            "demo/popover3.tpl.html!github:systemjs/plugin-text@0.0.7.js",
            "demo/typeahead1.tpl.html!github:systemjs/plugin-text@0.0.7.js",
            "demo/typeahead2.tpl.html!github:systemjs/plugin-text@0.0.7.js",
            "demo/typeaheadMatchReload.tpl.html!github:systemjs/plugin-text@0.0.7.js",
            "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
            "node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js",
            "node_modules/prismjs/prism.js",
            "src/app.ts",
            "src/pop-over/pop-over-directive.ts",
            "src/typeahead/template/typeahead-match.html!github:systemjs/plugin-text@0.0.7.js",
            "src/typeahead/template/typeahead-popup.html!github:systemjs/plugin-text@0.0.7.js",
            "src/typeahead/typeahead-match.ts",
            "src/typeahead/typeahead-parser.ts",
            "src/typeahead/typeahead-popup.ts",
            "src/typeahead/typeahead.ts",
            "src/utility/debounce.ts",
            "src/utility/position.ts"
        ]
    },
    "defaultJSExtensions": true,
    "experimentalDecorators": true,
    "map": {
        "angular": "npm:angular@1.5.3",
        "angular-mocks": "npm:angular-mocks@1.5.3",
        "babel": "npm:babel-core@5.8.38",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "core-js": "npm:core-js@1.2.7",
        "github:frankwallis/plugin-typescript@4.0.16": {
            "typescript": "npm:typescript@1.8.10"
        },
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.4.1"
        },
        "github:jspm/nodelibs-buffer@0.1.0": {
            "buffer": "npm:buffer@3.6.0"
        },
        "github:jspm/nodelibs-events@0.1.1": {
            "events": "npm:events@1.0.2"
        },
        "github:jspm/nodelibs-http@1.7.1": {
            "Base64": "npm:Base64@0.2.1",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "url": "github:jspm/nodelibs-url@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "github:jspm/nodelibs-os@0.1.0": {
            "os-browserify": "npm:os-browserify@0.1.2"
        },
        "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.6"
        },
        "github:jspm/nodelibs-stream@0.1.0": {
            "stream-browserify": "npm:stream-browserify@1.0.0"
        },
        "github:jspm/nodelibs-url@0.1.0": {
            "url": "npm:url@0.10.3"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "github:jspm/nodelibs-vm@0.1.0": {
            "vm-browserify": "npm:vm-browserify@0.0.4"
        },
        "github:manda-linda/tempura@0.0.2": {
            "angular": "npm:angular@1.5.3",
            "angular-mocks": "npm:angular-mocks@1.5.3",
            "jasmine": "npm:jasmine@2.4.1",
            "ts": "github:frankwallis/plugin-typescript@4.0.16"
        },
        "jasmine": "npm:jasmine@2.4.1",
        "karma-typescript-preprocessor": "npm:karma-typescript-preprocessor@0.2.1",
        "manda-linda/tempura": "github:manda-linda/tempura@0.0.2",
        "npm:assert@1.4.1": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "util": "npm:util@0.10.3"
        },
        "npm:babel-runtime@5.8.38": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:buffer@3.6.0": {
            "base64-js": "npm:base64-js@0.0.8",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ieee754": "npm:ieee754@1.1.6",
            "isarray": "npm:isarray@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:core-js@1.2.7": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        },
        "npm:core-util-is@1.0.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:exit@0.1.2": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:glob@3.2.11": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inherits": "npm:inherits@2.0.1",
            "minimatch": "npm:minimatch@0.3.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:jasmine-core@2.4.1": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:jasmine@2.4.1": {
            "exit": "npm:exit@0.1.2",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "glob": "npm:glob@3.2.11",
            "jasmine-core": "npm:jasmine-core@2.4.1",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.2",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:karma-typescript-preprocessor@0.2.1": {
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "typescript": "npm:typescript@1.8.10"
        },
        "npm:minimatch@0.3.0": {
            "lru-cache": "npm:lru-cache@2.7.3",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "sigmund": "npm:sigmund@1.0.1"
        },
        "npm:os-browserify@0.1.2": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        },
        "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:process@0.11.6": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "vm": "github:jspm/nodelibs-vm@0.1.0"
        },
        "npm:punycode@1.3.2": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:readable-stream@1.1.14": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "core-util-is": "npm:core-util-is@1.0.2",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "isarray": "npm:isarray@0.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream-browserify": "npm:stream-browserify@1.0.0",
            "string_decoder": "npm:string_decoder@0.10.31"
        },
        "npm:sigmund@1.0.1": {
            "http": "github:jspm/nodelibs-http@1.7.1",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:stream-browserify@1.0.0": {
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "readable-stream": "npm:readable-stream@1.1.14"
        },
        "npm:string_decoder@0.10.31": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:typescript@1.8.10": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        },
        "npm:url@0.10.3": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "punycode": "npm:punycode@1.3.2",
            "querystring": "npm:querystring@0.2.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:vm-browserify@0.0.4": {
            "indexof": "npm:indexof@0.0.1"
        },
        "text": "github:systemjs/plugin-text@0.0.7",
        "ts": "github:frankwallis/plugin-typescript@4.0.16",
        "typescript": "npm:typescript@1.8.10"
    },
    "packages": {
        "/src": {
            "defaultExtension": "ts",
            "meta": {
                "*.html": {
                    "loader": "text"
                },
                "*.js": {
                    "loader": "ts"
                },
                "*.ts": {
                    "loader": "ts"
                }
            }
        },
        "src": {
            "defaultExtension": "ts",
            "meta": {
                "*.html": {
                    "loader": "text"
                },
                "*.js": {
                    "loader": "ts"
                },
                "*.ts": {
                    "loader": "ts"
                }
            }
        }
    },
    "paths": {
        "*": "./*",
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },
    "transpiler": "typescript",
    "typescriptOptions": {
        "compilerOptions": {
            "sourceMap": true,
            "target": "es5"
        },
        "module": "system",
        "noImplicitAny": false
    }
});