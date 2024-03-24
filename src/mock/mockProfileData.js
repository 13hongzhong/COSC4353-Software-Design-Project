const mockProfile = {
    fullName: "Alice Bob",
    address: "5128 Gotham Park Lane",
    city: "Arkham City",
    state: "NY",
    zipcode: "93958"
}

const mockProfileBadName = {
    fullName: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    address: "5128 Gotham Park Lane",
    city: "Arkham City",
    state: "NY",
    zipcode: "93958"
}

const mockProfileBadAddress = {
    fullName: "a",
    address: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    city: "Arkham City",
    state: "NY",
    zipcode: "93958"
}


module.exports =  {
    mockProfile,
    mockProfileBadName,
    mockProfileBadAddress,
};