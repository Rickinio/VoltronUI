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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTQ4N2FjNmE4NzFiNmQwMDFjMDgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuL3ZlbmRvclwiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL21lc3NhZ2VzL01lc3NhZ2VQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvTWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwaS9tb2NrTWVzc2FnZUFwaS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvTWVzc2FnZVBhcnNlZFRleHQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2NvbW1vbi9UZXh0SW5wdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2NvbW1vbi9DaGVja2JveElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9jb21tb24vRmllbGRTZWxlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QUFDckQsU0FBVyxRQUE0QiwwQkFBWSxhQUF1RDtBQUVyRDtBQUNsRCxTQUFPLEtBQUssRUFBRTtBQUNQLGdCQUFJLElBQU8sT0FBVSxXQUFFO0FBQ3pCLGlCQUFxQixrQkFBVSxRQUEwQjtBQUNwRCxtQkFBZSxlQUFpQixpQkFBZ0IsZ0JBQ3pEO0FBQ0o7QUFBQztBQUVLLFlBQ1Y7QUFBQztBQUVELDJCQUFxQztBQUMzQixZQUFnQiw0QkFBK0IsT0FBTyxPQUFHLElBQWEsYUFBRSxFQUNsRjtBQUFDLEU7Ozs7OztBQ2hDRCxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7O0FDQU87O0tBQStCOzs7O0FBT2dFO0FBQ0U7QUFFbEc7QUFBQyxLQUFjO0FBQ1QsZUFBUyxTQUNuQjtBQUZzQixHIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTQ4N2FjNmE4NzFiNmQwMDFjMDgiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgY3JlYXRlTWVtb3J5SGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5JztcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gTWF0Y2ggdGhlIGluY29taW5nIHJlcXVlc3QgYWdhaW5zdCB0aGUgbGlzdCBvZiBjbGllbnQtc2lkZSByb3V0ZXNcbiAgICAgICAgbWF0Y2goeyByb3V0ZXMsIGxvY2F0aW9uOiBwYXJhbXMubG9jYXRpb24gfSwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCByZW5kZXJQcm9wczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeyByZWRpcmVjdFVybDogcmVkaXJlY3RMb2NhdGlvbi5wYXRobmFtZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCBtYXRjaCBhbnkgcm91dGUsIHJlbmRlclByb3BzIHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoIXJlbmRlclByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbG9jYXRpb24gJyR7IHBhcmFtcy51cmwgfScgZG9lc24ndCBtYXRjaCBhbnkgcm91dGUgY29uZmlndXJlZCBpbiByZWFjdC1yb3V0ZXIuYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvblxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuICAgICAgICAgICAgY29uc3QgYXBwID0gKFxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJDb250ZXh0IHsuLi5yZW5kZXJQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gUGVyZm9ybSBhbiBpbml0aWFsIHJlbmRlciB0aGF0IHdpbGwgY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cbiAgICAgICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XG5cbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxuICAgICAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHN4IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjUwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdmVuZG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiLi92ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgzMjQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjYxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBIaXN0b3J5QmFzZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBNZXNzYWdlUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvbWVzc2FnZXMvTWVzc2FnZVBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCA8Um91dGUgY29tcG9uZW50PXsgTGF5b3V0IH0+XG4gICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudHM9e3sgYm9keTogTWVzc2FnZVBhZ2UgfX0gLz5cbjwvUm91dGU+O1xuXG4vLyBFbmFibGUgSG90IE1vZHVsZSBSZXBsYWNlbWVudCAoSE1SKVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3JvdXRlcy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZNZW51IH0gZnJvbSAnLi9OYXZNZW51JztcblxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gICAgYm9keTogUmVhY3QuUmVhY3RFbGVtZW50PGFueT47XG59XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TGF5b3V0UHJvcHMsIHZvaWQ+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTMnPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TWVudSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tOSc+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5ib2R5IH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5leHBvcnQgY2xhc3MgTmF2TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx2b2lkLCB2b2lkPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdtYWluLW5hdic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1oZWFkZXInPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdmJhci1icmFuZCcgdG89eyAnLycgfT5Wb2x0cm9uVUk8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsZWFyZml4Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IG5hdmJhci1uYXYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsgJy8nIH0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdCc+PC9zcGFuPiBNZXNzYWdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcbmltcG9ydCAqIGFzIElNZXNzYWdlc1N0YXRlIGZyb20gJy4uLy4uL3N0b3JlL01lc3NhZ2VzJztcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tICcuL01lc3NhZ2VMaXN0JztcbmltcG9ydCBNZXNzYWdlUGFyc2VkVGV4dCwgeyBJUGFyc2VkTGluZSB9IGZyb20gJy4vTWVzc2FnZVBhcnNlZFRleHQnO1xuaW1wb3J0IFRleHRJbnB1dCwgeyBJVGV4dElucHV0IH0gZnJvbSAnLi4vY29tbW9uL1RleHRJbnB1dCc7XG5pbXBvcnQgQ2hlY2tib3hJbnB1dCwgeyBJQ2hlY2tib3hJbnB1dCB9IGZyb20gJy4uL2NvbW1vbi9DaGVja2JveElucHV0JztcbmltcG9ydCB7IFNjcmFwZWREYXRhRmllbGRzIH0gZnJvbSAnLi4vY29tbW9uL0ZpZWxkU2VsZWN0b3InO1xuXG50eXBlIElNZXNzYWdlc1Byb3BzID0gSU1lc3NhZ2VzU3RhdGUuSU1lc3NhZ2VQYWdlU3RhdGUgJiB0eXBlb2YgSU1lc3NhZ2VzU3RhdGUuYWN0aW9uQ3JlYXRvcnM7XG5cbmludGVyZmFjZSBJTWVzc2FnZVN0YXRlIHtcbiAgICBzZWxlY3RlZE1lc3NhZ2U6IElNZXNzYWdlc1N0YXRlLklNZXNzYWdlO1xufVxuXG5jbGFzcyBNZXNzYWdlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJTWVzc2FnZXNQcm9wcywgSU1lc3NhZ2VTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRNZXNzYWdlOiB0aGlzLnByb3BzLnNlbGVjdGVkTWVzc2FnZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZE1lc3NhZ2UgPSB0aGlzLnNldFNlbGVjdGVkTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcmFwZWREYXRhID0gdGhpcy51cGRhdGVTY3JhcGVkRGF0YS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFNjcmFwZWREYXRhID0gdGhpcy5nZXRTY3JhcGVkRGF0YS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb21wb25lbnRXaWxsTW91bnQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0TWVzc2FnZXMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWVzc2FnZTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWxlY3RlZE1lc3NhZ2UpIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogSU1lc3NhZ2VzUHJvcHMpOnZvaWQge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNZXNzYWdlOiBPYmplY3QuYXNzaWduKHt9LCBuZXh0UHJvcHMuc2VsZWN0ZWRNZXNzYWdlKSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkUGFyc2VkVGV4dFRhYmxlKHBhcnNlZFRleHRUYWJsZTogQXJyYXk8YW55Piwgc2NyYXBlZERhdGFGb3JtOiBBcnJheTxhbnk+KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkTWVzc2FnZS5wYXJzZWRUZXh0KSB7XG4gICAgICAgICAgICBwYXJzZWRUZXh0VGFibGUucHVzaCg8TWVzc2FnZVBhcnNlZFRleHQga2V5PXt0aGlzLnN0YXRlLnNlbGVjdGVkTWVzc2FnZS5pZH0gbWVzc2FnZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE1lc3NhZ2V9IG9uRG91YmxlQ2xpY2s9e3RoaXMuZ2V0U2NyYXBlZERhdGF9IC8+KTtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRTY3JhcGVkRGF0YUZvcm0oc2NyYXBlZERhdGFGb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZFRleHRUYWJsZSA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZFNjcmFwZWREYXRhRm9ybShzY3JhcGVkRGF0YUZvcm06IEFycmF5PGFueT4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXNzYWdlICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXNzYWdlLnNjcmFwZWREYXRhICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXNzYWdlLnNjcmFwZWREYXRhLnZlc3NlbCkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXNzYWdlLnNjcmFwZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgbGV0IEZpZWxkQ29tcG9uZW50ID0gU2NyYXBlZERhdGFGaWVsZHNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoRmllbGRDb21wb25lbnQgPT0gQ2hlY2tib3hJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hJbnB1dFBhcmFtczogSUNoZWNrYm94SW5wdXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMudXBkYXRlU2NyYXBlZERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5zZWxlY3RlZE1lc3NhZ2Uuc2NyYXBlZERhdGFba2V5XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNjcmFwZWREYXRhRm9ybS5wdXNoKDxGaWVsZENvbXBvbmVudCBrZXk9e2tleX0gey4uLmNoZWNrYm94SW5wdXRQYXJhbXN9IC8+KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoRmllbGRDb21wb25lbnQgPT0gVGV4dElucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0SW5wdXRQYXJhbXM6IElUZXh0SW5wdXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMudXBkYXRlU2NyYXBlZERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5zZWxlY3RlZE1lc3NhZ2Uuc2NyYXBlZERhdGFba2V5XVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBzY3JhcGVkRGF0YUZvcm0ucHVzaCg8RmllbGRDb21wb25lbnQga2V5PXtrZXl9IHsuLi50ZXh0SW5wdXRQYXJhbXN9IC8+KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY3JhcGVkRGF0YUZvcm0gPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGxldCBtZXNzYWdlTGlzdDtcbiAgICAgICAgbGV0IHBhcnNlZFRleHRUYWJsZSA9W107XG4gICAgICAgIGxldCBzY3JhcGVkRGF0YUZvcm0gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICBtZXNzYWdlTGlzdCA9ICc8cD5Mb2FkaW5nLi4uPC9wPic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlTGlzdCA9IDxNZXNzYWdlTGlzdCBtZXNzYWdlcz17dGhpcy5wcm9wcy5tZXNzYWdlc30gb25Eb3VibGVDbGlja0V2ZW50PXt0aGlzLnNldFNlbGVjdGVkTWVzc2FnZX0gLz5cbiAgICAgICAgICAgIHRoaXMuYnVpbGRQYXJzZWRUZXh0VGFibGUocGFyc2VkVGV4dFRhYmxlLHNjcmFwZWREYXRhRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxoMT5MaXN0IG9mIE1lc3NhZ2VzPC9oMT5cbiAgICAgICAgICAgIDxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBnZXR0aW5nIGRhdGEgZnJvbSBNb2NrIEFQSTwvcD5cbiAgICAgICAgICAgIHttZXNzYWdlTGlzdH1cbiAgICAgICAgICAgIHtwYXJzZWRUZXh0VGFibGV9XG4gICAgICAgICAgICB7c2NyYXBlZERhdGFGb3JtLmxlbmd0aCA+IDAgPyA8aDM+U2NyYXBlZCBEYXRhPC9oMz4gOiBbXX1cbiAgICAgICAgICAgIHtzY3JhcGVkRGF0YUZvcm19XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZE1lc3NhZ2UobWVzc2FnZTogSU1lc3NhZ2VzU3RhdGUuSU1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWVzc2FnZTogT2JqZWN0LmFzc2lnbih7fSwgbWVzc2FnZSkgfSk7XG5cbiAgICB9XG5cbiAgICBnZXRTY3JhcGVkRGF0YShtZXNzYWdlOiBJTWVzc2FnZXNTdGF0ZS5JTWVzc2FnZSkge1xuICAgICAgICB0aGlzLnByb3BzLmdldFNjcmFwZWREYXRhKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjcmFwZWREYXRhKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgICAgIGxldCBzZWxlY3RlZE1lc3NhZ2U6IElNZXNzYWdlc1N0YXRlLklNZXNzYWdlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZE1lc3NhZ2U7XG4gICAgICAgIGlmIChTY3JhcGVkRGF0YUZpZWxkc1tmaWVsZF0gPT0gQ2hlY2tib3hJbnB1dCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRNZXNzYWdlLnNjcmFwZWREYXRhW2ZpZWxkXSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNjcmFwZWREYXRhRmllbGRzW2ZpZWxkXSA9PSBUZXh0SW5wdXQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTWVzc2FnZS5zY3JhcGVkRGF0YVtmaWVsZF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNZXNzYWdlOiBzZWxlY3RlZE1lc3NhZ2UgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUubWVzc2FnZXMsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXG4gICAgSU1lc3NhZ2VzU3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbikoTWVzc2FnZVBhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvTWVzc2FnZVBhZ2UudHN4IiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIFRodW5rQWN0aW9uLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XG5pbXBvcnQgTWVzc2FnZUFwaSBmcm9tICcuLi9hcGkvbW9ja01lc3NhZ2VBcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlUGFnZVN0YXRlIHtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW4sXG4gICAgbWVzc2FnZXM6IElNZXNzYWdlW10sXG4gICAgc2VsZWN0ZWRNZXNzYWdlOiBJTWVzc2FnZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlIHtcbiAgICBpZDogbnVtYmVyLFxuICAgIGVtYWlsRGF0ZTogc3RyaW5nLFxuICAgIGZyb21BZGRyZXNzOiBzdHJpbmcsXG4gICAgc3ViamVjdDogc3RyaW5nLFxuICAgIHBhcnNlZFRleHQ6IHN0cmluZyxcbiAgICBpc1NlbGVjdGVkOiBib29sZWFuLFxuICAgIHNjcmFwZWREYXRhOiBJU2NyYXBlZERhdGFcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2NyYXBlZERhdGEge1xuICAgIHZlc3NlbDogc3RyaW5nLFxuICAgIGxvYWRpbmc6IHN0cmluZyxcbiAgICBpc1BhcnRpYWw6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFJlcXVlc3RNZXNzYWdlc0FjdGlvbiB7XG4gICAgdHlwZTogJ1JFUVVFU1RfTUVTU0FHRVMnLFxufVxuXG5pbnRlcmZhY2UgUmVjZWl2ZU1lc3NhZ2VzQWN0aW9uIHtcbiAgICB0eXBlOiAnUkVDRUlWRV9NRVNTQUdFUycsXG4gICAgbWVzc2FnZXM6IElNZXNzYWdlW11cbiAgICBzZWxlY3RlZE1lc3NhZ2U6IElNZXNzYWdlXG59XG5cbmludGVyZmFjZSBHZXRTY3JhcGVkRGF0YUFjdGlvbiB7XG4gICAgdHlwZTogJ0dFVF9TQ1JBUEVEX0RBVEEnLFxuICAgIG1lc3NhZ2VzOiBJTWVzc2FnZVtdLFxuICAgIHNlbGVjdGVkTWVzc2FnZTogSU1lc3NhZ2Vcbn1cblxudHlwZSBLbm93bkFjdGlvbiA9IFJlcXVlc3RNZXNzYWdlc0FjdGlvbiB8IFJlY2VpdmVNZXNzYWdlc0FjdGlvbiB8IEdldFNjcmFwZWREYXRhQWN0aW9uO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG4gICAgcmVxdWVzdE1lc3NhZ2VzOiAoKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgaWYgKGdldFN0YXRlKCkubWVzc2FnZXMubWVzc2FnZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGxldCBmZXRjaFRhc2sgPSBNZXNzYWdlQXBpLmdldE5leHRUZW5NZXNzYWdlcygpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFQ0VJVkVfTUVTU0FHRVMnLCBtZXNzYWdlczogZGF0YSBhcyBJTWVzc2FnZVtdLCBzZWxlY3RlZE1lc3NhZ2U6IGdldFN0YXRlKCkubWVzc2FnZXMuc2VsZWN0ZWRNZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhZGRUYXNrKGZldGNoVGFzayk7IC8vIEVuc3VyZSBzZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmcgd2FpdHMgZm9yIHRoaXMgdG8gY29tcGxldGVcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfTUVTU0FHRVMnIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRTY3JhcGVkRGF0YTogKG1lc3NhZ2U6IElNZXNzYWdlKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgbGV0IHNjcmFwZWREYXRhID0gTWVzc2FnZUFwaS5nZXRTY3JhcGVkRGF0YSgpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbXNnczogSU1lc3NhZ2VbXSA9IGdldFN0YXRlKCkubWVzc2FnZXMubWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTWVzc2FnZSA9IG1zZ3MuZmlsdGVyKChtKSA9PiBtLmlkID09IG1lc3NhZ2UuaWQpWzBdO1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZE1lc3NhZ2VJbmRleCA9IG1zZ3MuZmluZEluZGV4KG0gPT4gbS5pZCA9PSBtZXNzYWdlLmlkKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZE1lc3NhZ2Uuc2NyYXBlZERhdGEgPSBkYXRhIGFzIElTY3JhcGVkRGF0YVxuICAgICAgICAgICAgICAgIG1zZ3Muc3BsaWNlKHNlbGVjdGVkTWVzc2FnZUluZGV4LCAxLCBzZWxlY3RlZE1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnR0VUX1NDUkFQRURfREFUQScsIG1lc3NhZ2VzOiBtc2dzLCBzZWxlY3RlZE1lc3NhZ2U6IHNlbGVjdGVkTWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufTtcblxuY29uc3QgdW5sb2FkZWRTdGF0ZTogSU1lc3NhZ2VQYWdlU3RhdGUgPSB7IG1lc3NhZ2VzOiBbXSwgaXNMb2FkaW5nOiBmYWxzZSwgc2VsZWN0ZWRNZXNzYWdlOiB7fSBhcyBJTWVzc2FnZSB9O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxJTWVzc2FnZVBhZ2VTdGF0ZT4gPSAoc3RhdGU6IElNZXNzYWdlUGFnZVN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdSRVFVRVNUX01FU1NBR0VTJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9IGFzIElNZXNzYWdlUGFnZVN0YXRlLCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlICdSRUNFSVZFX01FU1NBR0VTJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9IGFzIElNZXNzYWdlUGFnZVN0YXRlLCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IGFjdGlvbi5tZXNzYWdlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ0dFVF9TQ1JBUEVEX0RBVEEnOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30gYXMgSU1lc3NhZ2VQYWdlU3RhdGUsIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IGFjdGlvbi5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkTWVzc2FnZTogYWN0aW9uLnNlbGVjdGVkTWVzc2FnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL01lc3NhZ2VzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjA5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvZG9tYWluLXRhc2svaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcbmltcG9ydCAqIGFzIE1lc3NhZ2VTdGF0ZSBmcm9tICcuLi9zdG9yZS9NZXNzYWdlcyc7XG5cbmNvbnN0IFNjcmFwZWREYXRhID0ge1xuICAgIHZlc3NlbDpcIlRoZW9maWxvc1wiLFxuICAgIGxvYWRpbmc6XCJSYXN0YW51cmFcIixcbiAgICBpc1BhcnRpYWw6dHJ1ZVxufVxuXG5jbGFzcyBNZXNzYWdlQXBpIHtcblxuICAgIHN0YXRpYyBnZXROZXh0VGVuTWVzc2FnZXMoKTpQcm9taXNlPE1lc3NhZ2VTdGF0ZS5JTWVzc2FnZVtdPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9Nb2NrRGF0YS9HZXRNZXNzYWdlcycpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZT0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPE1lc3NhZ2VTdGF0ZS5JTWVzc2FnZVtdPilcbiAgICAgICAgICAgIC50aGVuKGRhdGE9PnJlc29sdmUoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3I9PiByZWplY3QoZXJyb3IpKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGFyc2VkVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYGxpbmUxMTExMTExMTExMTExMTExMTFcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyMjIyMjIyMjIyMjIyMjJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUzMzMzMzMzMzMzMzMzMzMzM1xuICAgICAgICAgICAgICAgICAgICAgICAgYCk7XG4gICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U2NyYXBlZERhdGEoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICByZXNvbHZlKFNjcmFwZWREYXRhKTtcbiAgICAgICAgICAgIH0sMTAwMClcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VBcGk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwaS9tb2NrTWVzc2FnZUFwaS50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSU1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zdG9yZS9NZXNzYWdlcydcclxuXHJcblxyXG5cclxuY29uc3QgTWVzc2FnZUxpc3QgPSAoe21lc3NhZ2VzLCBvbkRvdWJsZUNsaWNrRXZlbnR9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5JZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsIERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Gcm9tIEFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdWJqZWN0PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAobWVzc2FnZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e21lc3NhZ2UuaWR9IG9uRG91YmxlQ2xpY2s9eygpID0+IG9uRG91YmxlQ2xpY2tFdmVudChtZXNzYWdlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bWVzc2FnZS5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21lc3NhZ2UuZW1haWxEYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bWVzc2FnZS5mcm9tQWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21lc3NhZ2Uuc3ViamVjdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzYWdlTGlzdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc3RvcmUvTWVzc2FnZXMnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWRMaW5lIHtcclxuICAgIGxpbmVOdW06IG51bWJlcixcclxuICAgIGxpbmVUZXh0OiBzdHJpbmcsXHJcbn1cclxuXHJcbmNvbnN0IE1lc3NhZ2VQYXJzZWRUZXh0ID0gKHttZXNzYWdlLCBvbkRvdWJsZUNsaWNrfSkgPT4ge1xyXG4gICAgdmFyIG1lc3NhZ2VWbTogSU1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdmFyIHBhcnNlZExpbmVzOiBJUGFyc2VkTGluZVtdID0gW107XHJcbiAgICB2YXIgbGluZU5vID0gMTtcclxuICAgIGZvciAobGV0IGxpbmUgb2YgbWVzc2FnZVZtLnBhcnNlZFRleHQuc3BsaXQoJ1xcbicpKSB7XHJcbiAgICAgICAgbGV0IGxpbmVPYmo6IElQYXJzZWRMaW5lID0geyBsaW5lTnVtOiBsaW5lTm8sIGxpbmVUZXh0OiBsaW5lIH1cclxuICAgICAgICBwYXJzZWRMaW5lcy5wdXNoKGxpbmVPYmopO1xyXG4gICAgICAgIGxpbmVObysrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+UGFyc2VkIFRleHQgb2YgbWVzc2FnZSA8c3Ryb25nPnttZXNzYWdlVm0uc3ViamVjdH08L3N0cm9uZz48L2gzPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGluZSBOdW1iZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGluZSBUZXh0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cGFyc2VkTGluZXMubWFwKChsaW5lKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtsaW5lLmxpbmVOdW0gPT0gMiA/ICdiZy1kYW5nZXInIDogJyd9IGtleT17bGluZS5saW5lTnVtfSBvbkRvdWJsZUNsaWNrPXsoKSA9PiBvbkRvdWJsZUNsaWNrKG1lc3NhZ2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bGluZS5saW5lTnVtfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2xpbmUubGluZVRleHR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlUGFyc2VkVGV4dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzYWdlUGFyc2VkVGV4dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0SW5wdXQge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgbGFiZWw6IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkLFxyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcclxuICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICBlcnJvcjogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFRleHRJbnB1dCA9IChwYXJhbXM6SVRleHRJbnB1dCkgPT4ge1xyXG4gICAgbGV0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIGlmIChwYXJhbXMuZXJyb3IgJiYgcGFyYW1zLmVycm9yLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB3cmFwcGVyQ2xhc3MgKz0gXCIgXCIgKyAnaGFzLWVycm9yJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cGFyYW1zLm5hbWV9PntwYXJhbXMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3BhcmFtcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BhcmFtcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFyYW1zLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXJhbXMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7cGFyYW1zLmVycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e3BhcmFtcy5lcnJvcn08L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9jb21tb24vVGV4dElucHV0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94SW5wdXQge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgbGFiZWw6IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkLFxyXG4gICAgdmFsdWU6IGJvb2xlYW4sXHJcbiAgICBlcnJvcjogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IENoZWNrYm94SW5wdXQgPSAocGFyYW1zOklDaGVja2JveElucHV0KSA9PiB7XHJcbiAgICBsZXQgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgaWYgKHBhcmFtcy5lcnJvciAmJiBwYXJhbXMuZXJyb3IubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHdyYXBwZXJDbGFzcyArPSBcIiBcIiArICdoYXMtZXJyb3InO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJDbGFzc30+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwYXJhbXMubmFtZX0+e3BhcmFtcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3BhcmFtcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cGFyYW1zLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXJhbXMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7cGFyYW1zLmVycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e3BhcmFtcy5lcnJvcn08L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveElucHV0O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvY29tbW9uL0NoZWNrYm94SW5wdXQudHN4IiwiaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi9jb21tb24vVGV4dElucHV0JztcclxuaW1wb3J0IENoZWNrYm94SW5wdXQgZnJvbSAnLi4vY29tbW9uL0NoZWNrYm94SW5wdXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjcmFwZWREYXRhRmllbGRzID0ge1xyXG4gICAgdmVzc2VsOlRleHRJbnB1dCxcclxuICAgIGxvYWRpbmc6VGV4dElucHV0LFxyXG4gICAgaXNQYXJ0aWFsOkNoZWNrYm94SW5wdXRcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2NvbW1vbi9GaWVsZFNlbGVjdG9yLnRzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBHZW5lcmljU3RvcmVFbmhhbmNlciB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCAqIGFzIFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU/OiBTdG9yZS5BcHBsaWNhdGlvblN0YXRlKSB7XG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cbiAgICBjb25zdCB3aW5kb3dJZkRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cgYXMgYW55O1xuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXG4gICAgKShjcmVhdGVTdG9yZSk7XG5cbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXG4gICAgY29uc3QgYWxsUmVkdWNlcnMgPSBidWlsZFJvb3RSZWR1Y2VyKFN0b3JlLnJlZHVjZXJzKTtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgUmVkdXguU3RvcmU8U3RvcmUuQXBwbGljYXRpb25TdGF0ZT47XG5cbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgU3RvcmU+KCcuL3N0b3JlJyk7XG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcmU7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnMpIHtcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzPFN0b3JlLkFwcGxpY2F0aW9uU3RhdGU+KE9iamVjdC5hc3NpZ24oe30sIGFsbFJlZHVjZXJzLCB7IHJvdXRpbmc6IHJvdXRlclJlZHVjZXIgfSkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMzMxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMzUyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcydcblxuLy8gVGhlIHRvcC1sZXZlbCBzdGF0ZSBvYmplY3RcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XG4gICAgbWVzc2FnZXM6TWVzc2FnZXMuSU1lc3NhZ2VQYWdlU3RhdGVcbn1cblxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XG4gICAgbWVzc2FnZXM6TWVzc2FnZXMucmVkdWNlclxufTtcblxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==