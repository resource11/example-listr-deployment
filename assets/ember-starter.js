"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('ember-starter/app', ['exports', 'ember', 'ember-resolver', 'ember/load-initializers', 'ember-starter/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _emberStarterConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberStarterConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberStarterConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberStarterConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ember-starter/application/adapter', ['exports', 'ember-data', 'ember-starter/config/environment'], function (exports, _emberData, _emberStarterConfigEnvironment) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    host: _emberStarterConfigEnvironment['default'].apiHost
  });
});
define('ember-starter/application/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _ember['default'].RSVP.hash({
        lists: this.store.findAll('list')
      });
    }
  });
});
define('ember-starter/application/serializer', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONSerializer.extend({});
});
define("ember-starter/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "ember-starter/application/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "listr-list", [], ["list", ["subexpr", "@mut", [["get", "list", ["loc", [null, [4, 20], [4, 24]]]]], [], []]], ["loc", [null, [4, 2], [4, 26]]]]],
        locals: ["list"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "ember-starter/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Listr");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.lists", ["loc", [null, [3, 8], [3, 19]]]]], [], 0, null, ["loc", [null, [3, 0], [5, 9]]]], ["content", "outlet", ["loc", [null, [7, 0], [7, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('ember-starter/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-starter/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberStarterConfigEnvironment) {

  var name = _emberStarterConfigEnvironment['default'].APP.name;
  var version = _emberStarterConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('ember-starter/components/listr-list/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'ul',
    classNames: ['listr-list'],
    hidden: _ember['default'].computed.alias('list.hidden'),
    classNameBindings: ['hidden:listr-list--hidden'],
    store: _ember['default'].inject.service(),
    actions: {
      toggleList: function toggleList() {
        var id = this.get('list.id');
        var store = this.get('store');

        store.findRecord('list', id).then(function (list) {
          list.toggleProperty('hidden');
          list.save();
        });
      }
    }
  });
});
define('ember-starter/components/listr-list/listr-item/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    classNames: ['listr-list__listr-item'],
    done: _ember['default'].computed.alias('item.done'),
    classNameBindings: ['done:listr-list__listr-item--done'],
    store: _ember['default'].inject.service(),
    click: function click() {
      var id = this.get('item.id');
      var store = this.get('store');

      store.findRecord('item', id).then(function (item) {
        item.toggleProperty('done');
        item.save();
      });
    }
  });
});
define("ember-starter/components/listr-list/listr-item/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-starter/components/listr-list/listr-item/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "item.text", ["loc", [null, [1, 0], [1, 13]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-starter/components/listr-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 2
            }
          },
          "moduleName": "ember-starter/components/listr-list/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "listr-list/listr-item", [], ["item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [7, 33], [7, 37]]]]], [], []]], ["loc", [null, [7, 4], [7, 39]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 2
            },
            "end": {
              "line": 10,
              "column": 2
            }
          },
          "moduleName": "ember-starter/components/listr-list/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    This list is empty! Good job?\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "ember-starter/components/listr-list/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "listr-list__header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["element", "action", ["toggleList"], [], ["loc", [null, [1, 35], [1, 58]]]], ["content", "list.title", ["loc", [null, [2, 6], [2, 20]]]], ["block", "each", [["get", "list.items", ["loc", [null, [6, 10], [6, 20]]]]], [], 0, 1, ["loc", [null, [6, 2], [10, 11]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('ember-starter/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ember-starter/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ember-starter/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-starter/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberStarterConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberStarterConfigEnvironment['default'].APP.name, _emberStarterConfigEnvironment['default'].APP.version)
  };
});
define('ember-starter/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-starter/initializers/export-application-global', ['exports', 'ember', 'ember-starter/config/environment'], function (exports, _ember, _emberStarterConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberStarterConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _emberStarterConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberStarterConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-starter/item/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    text: _emberData['default'].attr('string'),
    done: _emberData['default'].attr('boolean')
  });
});
define('ember-starter/list/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    hidden: _emberData['default'].attr('boolean'),
    items: _emberData['default'].hasMany('item')
  });
});
define('ember-starter/router', ['exports', 'ember', 'ember-starter/config/environment'], function (exports, _ember, _emberStarterConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberStarterConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('ember-starter/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('ember-starter/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-starter';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("ember-starter/app")["default"].create({"name":"ember-starter","version":"0.0.5"});
}

/* jshint ignore:end */
//# sourceMappingURL=ember-starter.map