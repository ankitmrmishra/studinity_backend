"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const console_1 = require("console");
const mongoose_1 = __importDefault(require("mongoose"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
const server = http_1.default.createServer(app);
server.listen(8080, () => {
    (0, console_1.log)("hello server");
});
const uri = "mongodb+srv://AnkitTheStudinity:pFrgUsdwGi0RCziP@cluster0.o5cw5xj.mongodb.net/?retryWrites=true&w=majority";
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(uri);
mongoose_1.default.connection.on("error", (error) => console.log(error));
app.use("/", (0, routers_1.default)());
