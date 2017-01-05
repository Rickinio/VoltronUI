(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _server = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(5);
	
	var _aspnetPrerendering = __webpack_require__(6);
	
	var _routes = __webpack_require__(7);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _configureStore = __webpack_require__(19);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = (0, _aspnetPrerendering.createServerRenderer)(function (params) {
	    return new Promise(function (resolve, reject) {
	        // Match the incoming request against the list of client-side routes
	        (0, _reactRouter.match)({ routes: _routes2.default, location: params.location }, function (error, redirectLocation, renderProps) {
	            if (error) {
	                throw error;
	            }
	            // If there's a redirection, just send this information back to the host application
	            if (redirectLocation) {
	                resolve({ redirectUrl: redirectLocation.pathname });
	                return;
	            }
	            // If it didn't match any route, renderProps will be undefined
	            if (!renderProps) {
	                throw new Error('The location \'' + params.url + '\' doesn\'t match any route configured in react-router.');
	            }
	            // Build an instance of the application
	            var store = (0, _configureStore2.default)();
	            var app = React.createElement(
	                _reactRedux.Provider,
	                { store: store },
	                React.createElement(_reactRouter.RouterContext, renderProps)
	            );
	            // Perform an initial render that will cause any async tasks (e.g., data access) to begin
	            (0, _server.renderToString)(app);
	            // Once the tasks are done, we can perform the final render
	            // We also send the redux store state, so the client can continue execution where the server left off
	            params.domainTasks.then(function () {
	                resolve({
	                    html: (0, _server.renderToString)(app),
	                    globals: { initialReduxState: store.getState() }
	                });
	            }, reject); // Also propagate any errors back into the host application
	        });
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(250);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("./vendor");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(324);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(41);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(261);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(35);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _Layout = __webpack_require__(8);
	
	var _MessagePage = __webpack_require__(10);
	
	var _MessagePage2 = _interopRequireDefault(_MessagePage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = React.createElement(
	    _reactRouter.Route,
	    { component: _Layout.Layout },
	    React.createElement(_reactRouter.Route, { path: '/', components: { body: _MessagePage2.default } })
	);
	// Enable Hot Module Replacement (HMR)
	
	if (false) {
	    module.hot.accept();
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Layout = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _NavMenu = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Layout = exports.Layout = function (_React$Component) {
	    _inherits(Layout, _React$Component);
	
	    function Layout() {
	        _classCallCheck(this, Layout);
	
	        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
	    }
	
	    _createClass(Layout, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'container-fluid' },
	                React.createElement(
	                    'div',
	                    { className: 'row' },
	                    React.createElement(
	                        'div',
	                        { className: 'col-sm-3' },
	                        React.createElement(_NavMenu.NavMenu, null)
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'col-sm-9' },
	                        this.props.body
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Layout;
	}(React.Component);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NavMenu = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavMenu = exports.NavMenu = function (_React$Component) {
	    _inherits(NavMenu, _React$Component);
	
	    function NavMenu() {
	        _classCallCheck(this, NavMenu);
	
	        return _possibleConstructorReturn(this, (NavMenu.__proto__ || Object.getPrototypeOf(NavMenu)).apply(this, arguments));
	    }
	
	    _createClass(NavMenu, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'main-nav' },
	                React.createElement(
	                    'div',
	                    { className: 'navbar navbar-inverse' },
	                    React.createElement(
	                        'div',
	                        { className: 'navbar-header' },
	                        React.createElement(
	                            'button',
	                            { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
	                            React.createElement(
	                                'span',
	                                { className: 'sr-only' },
	                                'Toggle navigation'
	                            ),
	                            React.createElement('span', { className: 'icon-bar' }),
	                            React.createElement('span', { className: 'icon-bar' }),
	                            React.createElement('span', { className: 'icon-bar' })
	                        ),
	                        React.createElement(
	                            _reactRouter.Link,
	                            { className: 'navbar-brand', to: '/' },
	                            'VoltronUI'
	                        )
	                    ),
	                    React.createElement('div', { className: 'clearfix' }),
	                    React.createElement(
	                        'div',
	                        { className: 'navbar-collapse collapse' },
	                        React.createElement(
	                            'ul',
	                            { className: 'nav navbar-nav' },
	                            React.createElement(
	                                'li',
	                                null,
	                                React.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/', activeClassName: 'active' },
	                                    React.createElement('span', { className: 'glyphicon glyphicon-th-list' }),
	                                    ' Messages'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return NavMenu;
	}(React.Component);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _Messages = __webpack_require__(11);
	
	var IMessagesState = _interopRequireWildcard(_Messages);
	
	var _MessageList = __webpack_require__(14);
	
	var _MessageList2 = _interopRequireDefault(_MessageList);
	
	var _MessageParsedText = __webpack_require__(15);
	
	var _MessageParsedText2 = _interopRequireDefault(_MessageParsedText);
	
	var _TextInput = __webpack_require__(16);
	
	var _TextInput2 = _interopRequireDefault(_TextInput);
	
	var _CheckboxInput = __webpack_require__(17);
	
	var _CheckboxInput2 = _interopRequireDefault(_CheckboxInput);
	
	var _FieldSelector = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MessagePage = function (_React$Component) {
	    _inherits(MessagePage, _React$Component);
	
	    function MessagePage(props, context) {
	        _classCallCheck(this, MessagePage);
	
	        var _this = _possibleConstructorReturn(this, (MessagePage.__proto__ || Object.getPrototypeOf(MessagePage)).call(this, props, context));
	
	        _this.state = {
	            selectedMessage: _this.props.selectedMessage
	        };
	        _this.setSelectedMessage = _this.setSelectedMessage.bind(_this);
	        _this.updateScrapedData = _this.updateScrapedData.bind(_this);
	        _this.getScrapedData = _this.getScrapedData.bind(_this);
	        return _this;
	    }
	
	    _createClass(MessagePage, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.props.requestMessages();
	            this.setState({ selectedMessage: Object.assign({}, this.props.selectedMessage) });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            //this.props.requestMessages();
	            this.setState({ selectedMessage: Object.assign({}, nextProps.selectedMessage) });
	        }
	    }, {
	        key: 'buildParsedTextTable',
	        value: function buildParsedTextTable(parsedTextTable, scrapedDataForm) {
	            if (this.state.selectedMessage.parsedText) {
	                parsedTextTable.push(React.createElement(_MessageParsedText2.default, { key: this.state.selectedMessage.id, message: this.state.selectedMessage, onDoubleClick: this.getScrapedData }));
	                this.buildScrapedDataForm(scrapedDataForm);
	            } else {
	                parsedTextTable = [];
	            }
	        }
	    }, {
	        key: 'buildScrapedDataForm',
	        value: function buildScrapedDataForm(scrapedDataForm) {
	            if (this.state.selectedMessage && this.state.selectedMessage.scrapedData && this.state.selectedMessage.scrapedData.vessel) {
	                for (var key in this.state.selectedMessage.scrapedData) {
	                    var FieldComponent = _FieldSelector.ScrapedDataFields[key];
	                    if (FieldComponent == _CheckboxInput2.default) {
	                        var checkboxInputParams = {
	                            error: '',
	                            label: key,
	                            name: key,
	                            onChange: this.updateScrapedData,
	                            value: this.state.selectedMessage.scrapedData[key]
	                        };
	                        scrapedDataForm.push(React.createElement(FieldComponent, _extends({ key: key }, checkboxInputParams)));
	                    } else if (FieldComponent == _TextInput2.default) {
	                        var textInputParams = {
	                            error: '',
	                            label: key,
	                            name: key,
	                            onChange: this.updateScrapedData,
	                            placeholder: '',
	                            value: this.state.selectedMessage.scrapedData[key]
	                        };
	                        scrapedDataForm.push(React.createElement(FieldComponent, _extends({ key: key }, textInputParams)));
	                    }
	                }
	            } else {
	                scrapedDataForm = [];
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var messageList = void 0;
	            var parsedTextTable = [];
	            var scrapedDataForm = [];
	            if (this.props.isLoading) {
	                messageList = '<p>Loading...</p>';
	            } else {
	                messageList = React.createElement(_MessageList2.default, { messages: this.props.messages, onDoubleClickEvent: this.setSelectedMessage });
	                this.buildParsedTextTable(parsedTextTable, scrapedDataForm);
	            }
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'List of Messages'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'This component demonstrates getting data from Mock API'
	                ),
	                messageList,
	                parsedTextTable,
	                scrapedDataForm.length > 0 ? React.createElement(
	                    'h3',
	                    null,
	                    'Scraped Data'
	                ) : [],
	                scrapedDataForm
	            );
	        }
	    }, {
	        key: 'setSelectedMessage',
	        value: function setSelectedMessage(message) {
	            this.setState({ selectedMessage: Object.assign({}, message) });
	        }
	    }, {
	        key: 'getScrapedData',
	        value: function getScrapedData(message) {
	            this.props.getScrapedData(message);
	        }
	    }, {
	        key: 'updateScrapedData',
	        value: function updateScrapedData(event) {
	            var field = event.target.name;
	            var selectedMessage = this.state.selectedMessage;
	            if (_FieldSelector.ScrapedDataFields[field] == _CheckboxInput2.default) {
	                selectedMessage.scrapedData[field] = event.target.checked;
	            } else if (_FieldSelector.ScrapedDataFields[field] == _TextInput2.default) {
	                selectedMessage.scrapedData[field] = event.target.value;
	            }
	            this.setState({ selectedMessage: selectedMessage });
	        }
	    }]);
	
	    return MessagePage;
	}(React.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return state.messages;
	}, // Selects which state properties are merged into the component's props
	IMessagesState.actionCreators // Selects which action creators are merged into the component's props
	)(MessagePage);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.reducer = exports.actionCreators = undefined;
	
	var _domainTask = __webpack_require__(12);
	
	var _mockMessageApi = __webpack_require__(13);
	
	var _mockMessageApi2 = _interopRequireDefault(_mockMessageApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var actionCreators = exports.actionCreators = {
	    requestMessages: function requestMessages() {
	        return function (dispatch, getState) {
	            if (getState().messages.messages.length == 0) {
	                var fetchTask = _mockMessageApi2.default.getNextTenMessages().then(function (data) {
	                    dispatch({ type: 'RECEIVE_MESSAGES', messages: data, selectedMessage: getState().messages.selectedMessage });
	                });
	                (0, _domainTask.addTask)(fetchTask); // Ensure server-side prerendering waits for this to complete
	                dispatch({ type: 'REQUEST_MESSAGES' });
	            }
	        };
	    },
	    getScrapedData: function getScrapedData(message) {
	        return function (dispatch, getState) {
	            var scrapedData = _mockMessageApi2.default.getScrapedData().then(function (data) {
	                var msgs = getState().messages.messages;
	                var selectedMessage = msgs.filter(function (m) {
	                    return m.id == message.id;
	                })[0];
	                var selectedMessageIndex = msgs.findIndex(function (m) {
	                    return m.id == message.id;
	                });
	                selectedMessage.scrapedData = data;
	                msgs.splice(selectedMessageIndex, 1, selectedMessage);
	                dispatch({ type: 'GET_SCRAPED_DATA', messages: msgs, selectedMessage: selectedMessage });
	            });
	        };
	    }
	};
	var unloadedState = { messages: [], isLoading: false, selectedMessage: {} };
	var reducer = exports.reducer = function reducer(state, action) {
	    switch (action.type) {
	        case 'REQUEST_MESSAGES':
	            return Object.assign({}, state, {
	                isLoading: true
	            });
	        case 'RECEIVE_MESSAGES':
	            return Object.assign({}, state, {
	                isLoading: false,
	                messages: action.messages
	            });
	        case 'GET_SCRAPED_DATA':
	            return Object.assign({}, state, {
	                messages: action.messages,
	                isLoading: false,
	                selectedMessage: action.selectedMessage
	            });
	        default:
	            // The following line guarantees that every action in the KnownAction union has been covered by a case above
	            var exhaustiveCheck = action;
	    }
	    return state || unloadedState;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(209);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domainTask = __webpack_require__(12);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScrapedData = {
	    vessel: "Theofilos",
	    loading: "Rastanura",
	    isPartial: true
	};
	
	var MessageApi = function () {
	    function MessageApi() {
	        _classCallCheck(this, MessageApi);
	    }
	
	    _createClass(MessageApi, null, [{
	        key: "getNextTenMessages",
	        value: function getNextTenMessages() {
	            return new Promise(function (resolve, reject) {
	                (0, _domainTask.fetch)('/api/MockData/GetMessages').then(function (response) {
	                    return response.json();
	                }).then(function (data) {
	                    return resolve(data);
	                }).catch(function (error) {
	                    return reject(error);
	                });
	            });
	        }
	    }, {
	        key: "getParsedText",
	        value: function getParsedText() {
	            return new Promise(function (resolve, reject) {
	                setTimeout(function () {
	                    resolve("line111111111111111111\n                        line222222222222222\n                        line33333333333333333\n                        ");
	                }, 2000);
	            });
	        }
	    }, {
	        key: "getScrapedData",
	        value: function getScrapedData() {
	            return new Promise(function (resolve, reject) {
	                setTimeout(function () {
	                    resolve(ScrapedData);
	                }, 1000);
	            });
	        }
	    }]);
	
	    return MessageApi;
	}();
	
	exports.default = MessageApi;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var MessageList = function MessageList(_ref) {
	    var messages = _ref.messages,
	        onDoubleClickEvent = _ref.onDoubleClickEvent;
	
	    return React.createElement(
	        'table',
	        { className: 'table' },
	        React.createElement(
	            'thead',
	            null,
	            React.createElement(
	                'tr',
	                null,
	                React.createElement(
	                    'th',
	                    null,
	                    'Id'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    'Email Date'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    'From Address'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    'Subject'
	                )
	            )
	        ),
	        React.createElement(
	            'tbody',
	            null,
	            messages.map(function (message) {
	                return React.createElement(
	                    'tr',
	                    { key: message.id, onDoubleClick: function onDoubleClick() {
	                            return onDoubleClickEvent(message);
	                        } },
	                    React.createElement(
	                        'td',
	                        null,
	                        message.id
	                    ),
	                    React.createElement(
	                        'td',
	                        null,
	                        message.emailDate
	                    ),
	                    React.createElement(
	                        'td',
	                        null,
	                        message.fromAddress
	                    ),
	                    React.createElement(
	                        'td',
	                        null,
	                        message.subject
	                    )
	                );
	            })
	        )
	    );
	};
	exports.default = MessageList;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var MessageParsedText = function MessageParsedText(_ref) {
	    var message = _ref.message,
	        _onDoubleClick = _ref.onDoubleClick;
	
	    var messageVm = message;
	    var parsedLines = [];
	    var lineNo = 1;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = messageVm.parsedText.split('\n')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var line = _step.value;
	
	            var lineObj = { lineNum: lineNo, lineText: line };
	            parsedLines.push(lineObj);
	            lineNo++;
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(
	            'h3',
	            null,
	            'Parsed Text of message ',
	            React.createElement(
	                'strong',
	                null,
	                messageVm.subject
	            )
	        ),
	        React.createElement(
	            'table',
	            { className: 'table' },
	            React.createElement(
	                'thead',
	                null,
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'th',
	                        null,
	                        'Line Number'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        'Line Text'
	                    )
	                )
	            ),
	            React.createElement(
	                'tbody',
	                null,
	                parsedLines.map(function (line) {
	                    return React.createElement(
	                        'tr',
	                        { className: line.lineNum == 2 ? 'bg-danger' : '', key: line.lineNum, onDoubleClick: function onDoubleClick() {
	                                return _onDoubleClick(message);
	                            } },
	                        React.createElement(
	                            'td',
	                            null,
	                            line.lineNum
	                        ),
	                        React.createElement(
	                            'td',
	                            null,
	                            line.lineText
	                        )
	                    );
	                })
	            )
	        )
	    );
	};
	exports.default = MessageParsedText;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var TextInput = function TextInput(params) {
	    var wrapperClass = 'form-group';
	    if (params.error && params.error.length > 0) {
	        wrapperClass += " " + 'has-error';
	    }
	    return React.createElement(
	        'div',
	        { className: wrapperClass },
	        React.createElement(
	            'label',
	            { htmlFor: params.name },
	            params.label
	        ),
	        React.createElement(
	            'div',
	            { className: 'field' },
	            React.createElement('input', { type: 'text', name: params.name, className: 'form-control', placeholder: params.placeholder, value: params.value, onChange: params.onChange }),
	            params.error && React.createElement(
	                'div',
	                { className: 'alert alert-danger' },
	                params.error
	            )
	        )
	    );
	};
	exports.default = TextInput;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var CheckboxInput = function CheckboxInput(params) {
	    var wrapperClass = 'form-group';
	    if (params.error && params.error.length > 0) {
	        wrapperClass += " " + 'has-error';
	    }
	    return React.createElement(
	        'div',
	        { className: wrapperClass },
	        React.createElement(
	            'label',
	            { htmlFor: params.name },
	            params.label
	        ),
	        React.createElement(
	            'div',
	            { className: 'field' },
	            React.createElement('input', { type: 'checkbox', name: params.name, className: '', checked: params.value, onChange: params.onChange }),
	            params.error && React.createElement(
	                'div',
	                { className: 'alert alert-danger' },
	                params.error
	            )
	        )
	    );
	};
	exports.default = CheckboxInput;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ScrapedDataFields = undefined;
	
	var _TextInput = __webpack_require__(16);
	
	var _TextInput2 = _interopRequireDefault(_TextInput);
	
	var _CheckboxInput = __webpack_require__(17);
	
	var _CheckboxInput2 = _interopRequireDefault(_CheckboxInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScrapedDataFields = exports.ScrapedDataFields = {
	    vessel: _TextInput2.default,
	    loading: _TextInput2.default,
	    isPartial: _CheckboxInput2.default
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(20);
	
	var _reduxThunk = __webpack_require__(21);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reactRouterRedux = __webpack_require__(22);
	
	var _store = __webpack_require__(23);
	
	var Store = _interopRequireWildcard(_store);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configureStore(initialState) {
	    // Build middleware. These are functions that can process the actions before they reach the store.
	    var windowIfDefined = typeof window === 'undefined' ? null : window;
	    // If devTools is installed, connect to it
	    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
	    var createStoreWithMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), devToolsExtension ? devToolsExtension() : function (f) {
	        return f;
	    })(_redux.createStore);
	    // Combine all reducers and instantiate the app-wide store instance
	    var allReducers = buildRootReducer(Store.reducers);
	    var store = createStoreWithMiddleware(allReducers, initialState);
	    // Enable Webpack hot module replacement for reducers
	    if (false) {
	        module.hot.accept('./store', function () {
	            var nextRootReducer = require('./store');
	            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
	        });
	    }
	    return store;
	}
	function buildRootReducer(allReducers) {
	    return (0, _redux.combineReducers)(Object.assign({}, allReducers, { routing: _reactRouterRedux.routerReducer }));
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(331);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(352);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(22);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.reducers = undefined;
	
	var _Messages = __webpack_require__(11);
	
	var Messages = _interopRequireWildcard(_Messages);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// Whenever an action is dispatched, Redux will update each top-level application state property using
	// the reducer with the matching name. It's important that the names match exactly, and that the reducer
	// acts on the corresponding ApplicationState property type.
	var reducers = exports.reducers = {
	    messages: Messages.reducer
	};

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzc2YWRjOTAzMzZhMjM0ZWQ3NTUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuL3ZlbmRvclwiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL21lc3NhZ2VzL01lc3NhZ2VQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvTWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwaS9tb2NrTWVzc2FnZUFwaS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvTWVzc2FnZVBhcnNlZFRleHQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2NvbW1vbi9UZXh0SW5wdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2NvbW1vbi9DaGVja2JveElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9jb21tb24vRmllbGRTZWxlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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TUFBVztBQUNyRCxTQUFXLFFBQTRCLDBCQUFZLGFBQXVEO0FBRXJEO0FBQ2xELFNBQU8sS0FBSyxFQUFFO0FBQ1AsZ0JBQUksSUFBTyxPQUFVLFdBQUU7QUFDekIsaUJBQXFCLGtCQUFVLFFBQTBCO0FBQ3BELG1CQUFlLGVBQWlCLGlCQUFnQixnQkFDekQ7QUFDSjtBQUFDO0FBRUssWUFDVjtBQUFDO0FBRUQsMkJBQXFDO0FBQzNCLFlBQWdCLDRCQUErQixPQUFPLE9BQUcsSUFBYSxhQUFFLEVBQ2xGO0FBQUMsRTs7Ozs7O0FDaENELGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7Ozs7QUNBTzs7S0FBK0I7Ozs7QUFPZ0U7QUFDRTtBQUVsRztBQUFDLEtBQWM7QUFDVCxlQUFTLFNBQ25CO0FBRnNCLEciLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNzZhZGM5MDMzNmEyMzRlZDc1NSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IG1hdGNoLCBSb3V0ZXJDb250ZXh0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xuICAgICAgICBtYXRjaCh7IHJvdXRlcywgbG9jYXRpb246IHBhcmFtcy5sb2NhdGlvbiB9LCAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByZWRpcmVjdExvY2F0aW9uLnBhdGhuYW1lIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0IG1hdGNoIGFueSByb3V0ZSwgcmVuZGVyUHJvcHMgd2lsbCBiZSB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmICghcmVuZGVyUHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBsb2NhdGlvbiAnJHsgcGFyYW1zLnVybCB9JyBkb2Vzbid0IG1hdGNoIGFueSByb3V0ZSBjb25maWd1cmVkIGluIHJlYWN0LXJvdXRlci5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQnVpbGQgYW4gaW5zdGFuY2Ugb2YgdGhlIGFwcGxpY2F0aW9uXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG4gICAgICAgICAgICBjb25zdCBhcHAgPSAoXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnJlbmRlclByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGFuIGluaXRpYWwgcmVuZGVyIHRoYXQgd2lsbCBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpblxuICAgICAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcblxuICAgICAgICAgICAgLy8gT25jZSB0aGUgdGFza3MgYXJlIGRvbmUsIHdlIGNhbiBwZXJmb3JtIHRoZSBmaW5hbCByZW5kZXJcbiAgICAgICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXG4gICAgICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyNTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDMyNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyNjEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgzNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEhpc3RvcnlCYXNlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IE1lc3NhZ2VQYWdlIGZyb20gJy4vY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzYWdlUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IDxSb3V0ZSBjb21wb25lbnQ9eyBMYXlvdXQgfT5cbiAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50cz17eyBib2R5OiBNZXNzYWdlUGFnZSB9fSAvPlxuPC9Sb3V0ZT47XG5cbi8vIEVuYWJsZSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IChITVIpXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdk1lbnUgfSBmcm9tICcuL05hdk1lbnUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFByb3BzIHtcbiAgICBib2R5OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pjtcbn1cblxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXlvdXRQcm9wcywgdm9pZD4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMyc+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZNZW51IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS05Jz5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmJvZHkgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHZvaWQsIHZvaWQ+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J21haW4tbmF2Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17ICcvJyB9PlZvbHRyb25VSTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYgbmF2YmFyLW5hdic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyAnLycgfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IE1lc3NhZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xuaW1wb3J0ICogYXMgSU1lc3NhZ2VzU3RhdGUgZnJvbSAnLi4vLi4vc3RvcmUvTWVzc2FnZXMnO1xuaW1wb3J0IE1lc3NhZ2VMaXN0IGZyb20gJy4vTWVzc2FnZUxpc3QnO1xuaW1wb3J0IE1lc3NhZ2VQYXJzZWRUZXh0LCB7IElQYXJzZWRMaW5lIH0gZnJvbSAnLi9NZXNzYWdlUGFyc2VkVGV4dCc7XG5pbXBvcnQgVGV4dElucHV0LCB7IElUZXh0SW5wdXQgfSBmcm9tICcuLi9jb21tb24vVGV4dElucHV0JztcbmltcG9ydCBDaGVja2JveElucHV0LCB7IElDaGVja2JveElucHV0IH0gZnJvbSAnLi4vY29tbW9uL0NoZWNrYm94SW5wdXQnO1xuaW1wb3J0IHsgU2NyYXBlZERhdGFGaWVsZHMgfSBmcm9tICcuLi9jb21tb24vRmllbGRTZWxlY3Rvcic7XG5cbnR5cGUgSU1lc3NhZ2VzUHJvcHMgPSBJTWVzc2FnZXNTdGF0ZS5JTWVzc2FnZVBhZ2VTdGF0ZSAmIHR5cGVvZiBJTWVzc2FnZXNTdGF0ZS5hY3Rpb25DcmVhdG9ycztcblxuaW50ZXJmYWNlIElNZXNzYWdlU3RhdGUge1xuICAgIHNlbGVjdGVkTWVzc2FnZTogSU1lc3NhZ2VzU3RhdGUuSU1lc3NhZ2U7XG59XG5cbmNsYXNzIE1lc3NhZ2VQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElNZXNzYWdlc1Byb3BzLCBJTWVzc2FnZVN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZE1lc3NhZ2U6IHRoaXMucHJvcHMuc2VsZWN0ZWRNZXNzYWdlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkTWVzc2FnZSA9IHRoaXMuc2V0U2VsZWN0ZWRNZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlU2NyYXBlZERhdGEgPSB0aGlzLnVwZGF0ZVNjcmFwZWREYXRhLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0U2NyYXBlZERhdGEgPSB0aGlzLmdldFNjcmFwZWREYXRhLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RNZXNzYWdlcygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNZXNzYWdlOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGVjdGVkTWVzc2FnZSkgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IElNZXNzYWdlc1Byb3BzKSB7XG4gICAgICAgIC8vdGhpcy5wcm9wcy5yZXF1ZXN0TWVzc2FnZXMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWVzc2FnZTogT2JqZWN0LmFzc2lnbih7fSwgbmV4dFByb3BzLnNlbGVjdGVkTWVzc2FnZSkgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZFBhcnNlZFRleHRUYWJsZShwYXJzZWRUZXh0VGFibGU6IEFycmF5PGFueT4sIHNjcmFwZWREYXRhRm9ybTogQXJyYXk8YW55Pik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZE1lc3NhZ2UucGFyc2VkVGV4dCkge1xuICAgICAgICAgICAgcGFyc2VkVGV4dFRhYmxlLnB1c2goPE1lc3NhZ2VQYXJzZWRUZXh0IGtleT17dGhpcy5zdGF0ZS5zZWxlY3RlZE1lc3NhZ2UuaWR9IG1lc3NhZ2U9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNZXNzYWdlfSBvbkRvdWJsZUNsaWNrPXt0aGlzLmdldFNjcmFwZWREYXRhfSAvPik7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkU2NyYXBlZERhdGFGb3JtKHNjcmFwZWREYXRhRm9ybSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWRUZXh0VGFibGUgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRTY3JhcGVkRGF0YUZvcm0oc2NyYXBlZERhdGFGb3JtOiBBcnJheTxhbnk+KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkTWVzc2FnZSAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkTWVzc2FnZS5zY3JhcGVkRGF0YSAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkTWVzc2FnZS5zY3JhcGVkRGF0YS52ZXNzZWwpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLnNlbGVjdGVkTWVzc2FnZS5zY3JhcGVkRGF0YSkge1xuICAgICAgICAgICAgICAgIGxldCBGaWVsZENvbXBvbmVudCA9IFNjcmFwZWREYXRhRmllbGRzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKEZpZWxkQ29tcG9uZW50ID09IENoZWNrYm94SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94SW5wdXRQYXJhbXM6IElDaGVja2JveElucHV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnVwZGF0ZVNjcmFwZWREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXNzYWdlLnNjcmFwZWREYXRhW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzY3JhcGVkRGF0YUZvcm0ucHVzaCg8RmllbGRDb21wb25lbnQga2V5PXtrZXl9IHsuLi5jaGVja2JveElucHV0UGFyYW1zfSAvPik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEZpZWxkQ29tcG9uZW50ID09IFRleHRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dElucHV0UGFyYW1zOiBJVGV4dElucHV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnVwZGF0ZVNjcmFwZWREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXNzYWdlLnNjcmFwZWREYXRhW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgc2NyYXBlZERhdGFGb3JtLnB1c2goPEZpZWxkQ29tcG9uZW50IGtleT17a2V5fSB7Li4udGV4dElucHV0UGFyYW1zfSAvPik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2NyYXBlZERhdGFGb3JtID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWVzc2FnZUxpc3Q7XG4gICAgICAgIGxldCBwYXJzZWRUZXh0VGFibGUgPVtdO1xuICAgICAgICBsZXQgc2NyYXBlZERhdGFGb3JtID0gW107XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzTG9hZGluZykge1xuICAgICAgICAgICAgbWVzc2FnZUxpc3QgPSAnPHA+TG9hZGluZy4uLjwvcD4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZUxpc3QgPSA8TWVzc2FnZUxpc3QgbWVzc2FnZXM9e3RoaXMucHJvcHMubWVzc2FnZXN9IG9uRG91YmxlQ2xpY2tFdmVudD17dGhpcy5zZXRTZWxlY3RlZE1lc3NhZ2V9IC8+XG4gICAgICAgICAgICB0aGlzLmJ1aWxkUGFyc2VkVGV4dFRhYmxlKHBhcnNlZFRleHRUYWJsZSxzY3JhcGVkRGF0YUZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8aDE+TGlzdCBvZiBNZXNzYWdlczwvaDE+XG4gICAgICAgICAgICA8cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZ2V0dGluZyBkYXRhIGZyb20gTW9jayBBUEk8L3A+XG4gICAgICAgICAgICB7bWVzc2FnZUxpc3R9XG4gICAgICAgICAgICB7cGFyc2VkVGV4dFRhYmxlfVxuICAgICAgICAgICAge3NjcmFwZWREYXRhRm9ybS5sZW5ndGggPiAwID8gPGgzPlNjcmFwZWQgRGF0YTwvaDM+IDogW119XG4gICAgICAgICAgICB7c2NyYXBlZERhdGFGb3JtfVxuICAgICAgICA8L2Rpdj47XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0ZWRNZXNzYWdlKG1lc3NhZ2U6IElNZXNzYWdlc1N0YXRlLklNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1lc3NhZ2U6IE9iamVjdC5hc3NpZ24oe30sIG1lc3NhZ2UpIH0pO1xuXG4gICAgfVxuXG4gICAgZ2V0U2NyYXBlZERhdGEobWVzc2FnZTogSU1lc3NhZ2VzU3RhdGUuSU1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRTY3JhcGVkRGF0YShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY3JhcGVkRGF0YShldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICBsZXQgc2VsZWN0ZWRNZXNzYWdlOiBJTWVzc2FnZXNTdGF0ZS5JTWVzc2FnZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXNzYWdlO1xuICAgICAgICBpZiAoU2NyYXBlZERhdGFGaWVsZHNbZmllbGRdID09IENoZWNrYm94SW5wdXQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTWVzc2FnZS5zY3JhcGVkRGF0YVtmaWVsZF0gPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTY3JhcGVkRGF0YUZpZWxkc1tmaWVsZF0gPT0gVGV4dElucHV0KSB7XG4gICAgICAgICAgICBzZWxlY3RlZE1lc3NhZ2Uuc2NyYXBlZERhdGFbZmllbGRdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWVzc2FnZTogc2VsZWN0ZWRNZXNzYWdlIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLm1lc3NhZ2VzLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xuICAgIElNZXNzYWdlc1N0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXG4pKE1lc3NhZ2VQYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL21lc3NhZ2VzL01lc3NhZ2VQYWdlLnRzeCIsImltcG9ydCB7IGZldGNoLCBhZGRUYXNrIH0gZnJvbSAnZG9tYWluLXRhc2snO1xuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBUaHVua0FjdGlvbiwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xuaW1wb3J0IE1lc3NhZ2VBcGkgZnJvbSAnLi4vYXBpL21vY2tNZXNzYWdlQXBpJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWVzc2FnZVBhZ2VTdGF0ZSB7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuLFxuICAgIG1lc3NhZ2VzOiBJTWVzc2FnZVtdLFxuICAgIHNlbGVjdGVkTWVzc2FnZTogSU1lc3NhZ2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTWVzc2FnZSB7XG4gICAgaWQ6IG51bWJlcixcbiAgICBlbWFpbERhdGU6IHN0cmluZyxcbiAgICBmcm9tQWRkcmVzczogc3RyaW5nLFxuICAgIHN1YmplY3Q6IHN0cmluZyxcbiAgICBwYXJzZWRUZXh0OiBzdHJpbmcsXG4gICAgaXNTZWxlY3RlZDogYm9vbGVhbixcbiAgICBzY3JhcGVkRGF0YTogSVNjcmFwZWREYXRhXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNjcmFwZWREYXRhIHtcbiAgICB2ZXNzZWw6IHN0cmluZyxcbiAgICBsb2FkaW5nOiBzdHJpbmcsXG4gICAgaXNQYXJ0aWFsOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBSZXF1ZXN0TWVzc2FnZXNBY3Rpb24ge1xuICAgIHR5cGU6ICdSRVFVRVNUX01FU1NBR0VTJyxcbn1cblxuaW50ZXJmYWNlIFJlY2VpdmVNZXNzYWdlc0FjdGlvbiB7XG4gICAgdHlwZTogJ1JFQ0VJVkVfTUVTU0FHRVMnLFxuICAgIG1lc3NhZ2VzOiBJTWVzc2FnZVtdXG4gICAgc2VsZWN0ZWRNZXNzYWdlOiBJTWVzc2FnZVxufVxuXG5pbnRlcmZhY2UgR2V0U2NyYXBlZERhdGFBY3Rpb24ge1xuICAgIHR5cGU6ICdHRVRfU0NSQVBFRF9EQVRBJyxcbiAgICBtZXNzYWdlczogSU1lc3NhZ2VbXSxcbiAgICBzZWxlY3RlZE1lc3NhZ2U6IElNZXNzYWdlXG59XG5cbnR5cGUgS25vd25BY3Rpb24gPSBSZXF1ZXN0TWVzc2FnZXNBY3Rpb24gfCBSZWNlaXZlTWVzc2FnZXNBY3Rpb24gfCBHZXRTY3JhcGVkRGF0YUFjdGlvbjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xuICAgIHJlcXVlc3RNZXNzYWdlczogKCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGlmIChnZXRTdGF0ZSgpLm1lc3NhZ2VzLm1lc3NhZ2VzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBsZXQgZmV0Y2hUYXNrID0gTWVzc2FnZUFwaS5nZXROZXh0VGVuTWVzc2FnZXMoKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUNFSVZFX01FU1NBR0VTJywgbWVzc2FnZXM6IGRhdGEgYXMgSU1lc3NhZ2VbXSwgc2VsZWN0ZWRNZXNzYWdlOiBnZXRTdGF0ZSgpLm1lc3NhZ2VzLnNlbGVjdGVkTWVzc2FnZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWRkVGFzayhmZXRjaFRhc2spOyAvLyBFbnN1cmUgc2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nIHdhaXRzIGZvciB0aGlzIHRvIGNvbXBsZXRlXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVFVRVNUX01FU1NBR0VTJyB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0U2NyYXBlZERhdGE6IChtZXNzYWdlOiBJTWVzc2FnZSk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGxldCBzY3JhcGVkRGF0YSA9IE1lc3NhZ2VBcGkuZ2V0U2NyYXBlZERhdGEoKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1zZ3M6IElNZXNzYWdlW10gPSBnZXRTdGF0ZSgpLm1lc3NhZ2VzLm1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZE1lc3NhZ2UgPSBtc2dzLmZpbHRlcigobSkgPT4gbS5pZCA9PSBtZXNzYWdlLmlkKVswXTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRNZXNzYWdlSW5kZXggPSBtc2dzLmZpbmRJbmRleChtID0+IG0uaWQgPT0gbWVzc2FnZS5pZCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRNZXNzYWdlLnNjcmFwZWREYXRhID0gZGF0YSBhcyBJU2NyYXBlZERhdGFcbiAgICAgICAgICAgICAgICBtc2dzLnNwbGljZShzZWxlY3RlZE1lc3NhZ2VJbmRleCwgMSwgc2VsZWN0ZWRNZXNzYWdlKVxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0dFVF9TQ1JBUEVEX0RBVEEnLCBtZXNzYWdlczogbXNncywgc2VsZWN0ZWRNZXNzYWdlOiBzZWxlY3RlZE1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn07XG5cbmNvbnN0IHVubG9hZGVkU3RhdGU6IElNZXNzYWdlUGFnZVN0YXRlID0geyBtZXNzYWdlczogW10sIGlzTG9hZGluZzogZmFsc2UsIHNlbGVjdGVkTWVzc2FnZToge30gYXMgSU1lc3NhZ2UgfTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8SU1lc3NhZ2VQYWdlU3RhdGU+ID0gKHN0YXRlOiBJTWVzc2FnZVBhZ2VTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnUkVRVUVTVF9NRVNTQUdFUyc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSBhcyBJTWVzc2FnZVBhZ2VTdGF0ZSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnUkVDRUlWRV9NRVNTQUdFUyc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSBhcyBJTWVzc2FnZVBhZ2VTdGF0ZSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBhY3Rpb24ubWVzc2FnZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlICdHRVRfU0NSQVBFRF9EQVRBJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9IGFzIElNZXNzYWdlUGFnZVN0YXRlLCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBhY3Rpb24ubWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZE1lc3NhZ2U6IGFjdGlvbi5zZWxlY3RlZE1lc3NhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZSB8fCB1bmxvYWRlZFN0YXRlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9NZXNzYWdlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDIwOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XG5pbXBvcnQgKiBhcyBNZXNzYWdlU3RhdGUgZnJvbSAnLi4vc3RvcmUvTWVzc2FnZXMnO1xuXG5jb25zdCBTY3JhcGVkRGF0YSA9IHtcbiAgICB2ZXNzZWw6XCJUaGVvZmlsb3NcIixcbiAgICBsb2FkaW5nOlwiUmFzdGFudXJhXCIsXG4gICAgaXNQYXJ0aWFsOnRydWVcbn1cblxuY2xhc3MgTWVzc2FnZUFwaSB7XG5cbiAgICBzdGF0aWMgZ2V0TmV4dFRlbk1lc3NhZ2VzKCk6UHJvbWlzZTxNZXNzYWdlU3RhdGUuSU1lc3NhZ2VbXT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZmV0Y2goJy9hcGkvTW9ja0RhdGEvR2V0TWVzc2FnZXMnKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxNZXNzYWdlU3RhdGUuSU1lc3NhZ2VbXT4pXG4gICAgICAgICAgICAudGhlbihkYXRhPT5yZXNvbHZlKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yPT4gcmVqZWN0KGVycm9yKSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFBhcnNlZFRleHQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGBsaW5lMTExMTExMTExMTExMTExMTExXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lMjIyMjIyMjIyMjIyMjIyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lMzMzMzMzMzMzMzMzMzMzMzNcbiAgICAgICAgICAgICAgICAgICAgICAgIGApO1xuICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNjcmFwZWREYXRhKCl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShTY3JhcGVkRGF0YSk7XG4gICAgICAgICAgICB9LDEwMDApXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQXBpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcGkvbW9ja01lc3NhZ2VBcGkudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc3RvcmUvTWVzc2FnZXMnXHJcblxyXG5cclxuXHJcbmNvbnN0IE1lc3NhZ2VMaXN0ID0gKHttZXNzYWdlcywgb25Eb3VibGVDbGlja0V2ZW50fSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+SWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+RnJvbSBBZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+U3ViamVjdDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKG1lc3NhZ2UgPT5cclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXttZXNzYWdlLmlkfSBvbkRvdWJsZUNsaWNrPXsoKSA9PiBvbkRvdWJsZUNsaWNrRXZlbnQobWVzc2FnZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21lc3NhZ2UuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttZXNzYWdlLmVtYWlsRGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21lc3NhZ2UuZnJvbUFkZHJlc3N9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttZXNzYWdlLnN1YmplY3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUxpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvTWVzc2FnZUxpc3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZSB9IGZyb20gJy4uLy4uL3N0b3JlL01lc3NhZ2VzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VkTGluZSB7XHJcbiAgICBsaW5lTnVtOiBudW1iZXIsXHJcbiAgICBsaW5lVGV4dDogc3RyaW5nLFxyXG59XHJcblxyXG5jb25zdCBNZXNzYWdlUGFyc2VkVGV4dCA9ICh7bWVzc2FnZSwgb25Eb3VibGVDbGlja30pID0+IHtcclxuICAgIHZhciBtZXNzYWdlVm06IElNZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHZhciBwYXJzZWRMaW5lczogSVBhcnNlZExpbmVbXSA9IFtdO1xyXG4gICAgdmFyIGxpbmVObyA9IDE7XHJcbiAgICBmb3IgKGxldCBsaW5lIG9mIG1lc3NhZ2VWbS5wYXJzZWRUZXh0LnNwbGl0KCdcXG4nKSkge1xyXG4gICAgICAgIGxldCBsaW5lT2JqOiBJUGFyc2VkTGluZSA9IHsgbGluZU51bTogbGluZU5vLCBsaW5lVGV4dDogbGluZSB9XHJcbiAgICAgICAgcGFyc2VkTGluZXMucHVzaChsaW5lT2JqKTtcclxuICAgICAgICBsaW5lTm8rKztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPlBhcnNlZCBUZXh0IG9mIG1lc3NhZ2UgPHN0cm9uZz57bWVzc2FnZVZtLnN1YmplY3R9PC9zdHJvbmc+PC9oMz5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpbmUgTnVtYmVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpbmUgVGV4dDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhcnNlZExpbmVzLm1hcCgobGluZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17bGluZS5saW5lTnVtID09IDIgPyAnYmctZGFuZ2VyJyA6ICcnfSBrZXk9e2xpbmUubGluZU51bX0gb25Eb3VibGVDbGljaz17KCkgPT4gb25Eb3VibGVDbGljayhtZXNzYWdlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2xpbmUubGluZU51bX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntsaW5lLmxpbmVUZXh0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZVBhcnNlZFRleHQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvTWVzc2FnZVBhcnNlZFRleHQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGV4dElucHV0IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZShldmVudDogYW55KTogdm9pZCxcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmcsXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgZXJyb3I6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBUZXh0SW5wdXQgPSAocGFyYW1zOklUZXh0SW5wdXQpID0+IHtcclxuICAgIGxldCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgICBpZiAocGFyYW1zLmVycm9yICYmIHBhcmFtcy5lcnJvci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgd3JhcHBlckNsYXNzICs9IFwiIFwiICsgJ2hhcy1lcnJvcic7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3BhcmFtcy5uYW1lfT57cGFyYW1zLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwYXJhbXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwYXJhbXMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhcmFtcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFyYW1zLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAge3BhcmFtcy5lcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntwYXJhbXMuZXJyb3J9PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvY29tbW9uL1RleHRJbnB1dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2JveElucHV0IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZShldmVudDogYW55KTogdm9pZCxcclxuICAgIHZhbHVlOiBib29sZWFuLFxyXG4gICAgZXJyb3I6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBDaGVja2JveElucHV0ID0gKHBhcmFtczpJQ2hlY2tib3hJbnB1dCkgPT4ge1xyXG4gICAgbGV0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIGlmIChwYXJhbXMuZXJyb3IgJiYgcGFyYW1zLmVycm9yLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB3cmFwcGVyQ2xhc3MgKz0gXCIgXCIgKyAnaGFzLWVycm9yJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cGFyYW1zLm5hbWV9PntwYXJhbXMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwYXJhbXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3BhcmFtcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFyYW1zLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAge3BhcmFtcy5lcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntwYXJhbXMuZXJyb3J9PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hJbnB1dDtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2NvbW1vbi9DaGVja2JveElucHV0LnRzeCIsImltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vY29tbW9uL1RleHRJbnB1dCc7XHJcbmltcG9ydCBDaGVja2JveElucHV0IGZyb20gJy4uL2NvbW1vbi9DaGVja2JveElucHV0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTY3JhcGVkRGF0YUZpZWxkcyA9IHtcclxuICAgIHZlc3NlbDpUZXh0SW5wdXQsXHJcbiAgICBsb2FkaW5nOlRleHRJbnB1dCxcclxuICAgIGlzUGFydGlhbDpDaGVja2JveElucHV0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9jb21tb24vRmllbGRTZWxlY3Rvci50cyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgR2VuZXJpY1N0b3JlRW5oYW5jZXIgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgKiBhcyBTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlPzogU3RvcmUuQXBwbGljYXRpb25TdGF0ZSkge1xuICAgIC8vIEJ1aWxkIG1pZGRsZXdhcmUuIFRoZXNlIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gcHJvY2VzcyB0aGUgYWN0aW9ucyBiZWZvcmUgdGhleSByZWFjaCB0aGUgc3RvcmUuXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcbiAgICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvd0lmRGVmaW5lZCAmJiB3aW5kb3dJZkRlZmluZWQuZGV2VG9vbHNFeHRlbnNpb24gYXMgKCkgPT4gR2VuZXJpY1N0b3JlRW5oYW5jZXI7XG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxuICAgICkoY3JlYXRlU3RvcmUpO1xuXG4gICAgLy8gQ29tYmluZSBhbGwgcmVkdWNlcnMgYW5kIGluc3RhbnRpYXRlIHRoZSBhcHAtd2lkZSBzdG9yZSBpbnN0YW5jZVxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihTdG9yZS5yZWR1Y2Vycyk7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpIGFzIFJlZHV4LlN0b3JlPFN0b3JlLkFwcGxpY2F0aW9uU3RhdGU+O1xuXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdG9yZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlPignLi9zdG9yZScpO1xuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxTdG9yZS5BcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb25maWd1cmVTdG9yZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDMzMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDM1Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDIyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIE1lc3NhZ2VzIGZyb20gJy4vTWVzc2FnZXMnXG5cbi8vIFRoZSB0b3AtbGV2ZWwgc3RhdGUgb2JqZWN0XG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xuICAgIG1lc3NhZ2VzOk1lc3NhZ2VzLklNZXNzYWdlUGFnZVN0YXRlXG59XG5cbi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xuICAgIG1lc3NhZ2VzOk1lc3NhZ2VzLnJlZHVjZXJcbn07XG5cbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyJdLCJzb3VyY2VSb290IjoiIn0=