const sendError = (res, code, message, data) => {
    res.status(code).json({ "status": "error", message, data });
}

const success = (res, code, message, data) => {
    res.status(code).json({ "status": "success", message, data });
}

const fail = (res, code, message, data) => {
    res.status(code).json({ "status": "Fail", message, data });
}
export { sendError, success, fail }
