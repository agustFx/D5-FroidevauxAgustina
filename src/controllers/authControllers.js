export async function registerController(req, res, next) {
    res.status(201).json(req.user)
}

export async function loginController(req, res, next) {
    res.sendStatus(201)
}

export async function logoutController(req, res, next) {
    req.logout(err => {
        res.sendStatus(200)
    })
}