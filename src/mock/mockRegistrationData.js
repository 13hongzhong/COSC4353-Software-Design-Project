const mockRegister = {
    fullName: "John Doe",
    username: "validuser",
    password: "validpassword"
}

const mockRegisterBadFullName = {
    fullName: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    username: "aaaaaaaaaaaaaaaaaaaaaa",
    password: "aaaaaaaaaaaaaaaaaaaaaaaaa"
}

const mockRegisterBadUsername = {
    fullName: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
    username: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    password: "aaaaaaaaaaaaaaaaaaaaaaaaa"
}

const mockRegisterBadPassword = {
    fullName: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
    username: "aaaaaaaaaaaaaaaaaaaaaaa",
    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}

module.exports =  {
    mockRegister,
    mockRegisterBadFullName,
    mockRegisterBadUsername,
    mockRegisterBadPassword,
};