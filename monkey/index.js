var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var webdriver = require('selenium-webdriver');
describe('selenium test', function () {
    this.timeout(100000);
    var driver = new webdriver.Builder()
        .usingServer('http://localhost:9515')
        .withCapabilities({
        chromeOptions: {
            binary: '/home/vasyoid/WebstormProjects/school_timetable/Timetable-linux-x64/Timetable'
        }
    })
        .forBrowser('chrome')
        .build();
    it('run', function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 100)) return [3 /*break*/, 4];
                        return [4 /*yield*/, randomClick()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, driver.quit()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    var randomClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var success, elems, index, _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        success = false;
                        _c.label = 1;
                    case 1:
                        if (!!success) return [3 /*break*/, 9];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 7, , 8]);
                        success = true;
                        return [4 /*yield*/, driver.findElements(webdriver.By.css('[class]:not([class=""])'))];
                    case 3:
                        elems = _c.sent();
                        index = Math.floor(Math.random() * (elems.length - 1));
                        return [4 /*yield*/, elems[index].getAttribute('class')];
                    case 4:
                        if ((_c.sent()) == 'minimizeBTN') {
                            return [3 /*break*/, 1];
                        }
                        return [4 /*yield*/, elems[index].click()];
                    case 5:
                        _c.sent();
                        _b = (_a = console).log;
                        return [4 /*yield*/, elems[index].getAttribute('class')];
                    case 6:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _c.sent();
                        success = false;
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 1];
                    case 9: return [4 /*yield*/, driver.manage().window];
                    case 10:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
});
